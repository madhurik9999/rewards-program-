import React, {useState, useEffect} from 'react';
import {getTransactions} from './transactions'
import './App.css'

export default function App() {
  const calculateRewardPoints = (amount) => {
    if (amount < 100 && amount > 50) {
      return amount-50
    }
    else if(amount > 100) {
      return 50 + (amount - 100) * 2
    } else {
      return 0
    }

  };

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchTransactions()
  }, [])

  const fetchTransactions = async () => {
    setIsLoading(true)
    const txns = await getTransactions();
    calculateRewards(txns)
    setIsLoading(false)
  }

  const [monthlyCustomerRewards, setMonthlyCustomerRewards] = useState({});
  const [totalCustomerRewards, setTotalCustomerRewards] = useState({});

  const calculateRewards = (transactions) => {
    const monthlyRewards = {};
    const totalRewards = {};

      transactions.forEach((transaction) => {
      const { customer, amount, date } = transaction;
      const points = calculateRewardPoints(amount);

      // Extract year and month from the date
      const [year, month] = date.split("-");

      // Calculate monthly rewards
      const monthlyKey = `${year}-${month}`;
      if (!monthlyRewards[monthlyKey]) {
        monthlyRewards[monthlyKey] = {};
      }
      if (!monthlyRewards[monthlyKey][customer]) {
        monthlyRewards[monthlyKey][customer] = 0;
      }
      monthlyRewards[monthlyKey][customer] += points;

      // Calculate total rewards
      if (!totalRewards[customer]) {
        totalRewards[customer] = 0;
      }
      totalRewards[customer] += points;
    });

    setMonthlyCustomerRewards(monthlyRewards);
    setTotalCustomerRewards(totalRewards);
  };

  return (
  isLoading ? <div>Loading...</div> :  <div>
      <div>
        <h2>Rewards per Customer per Month</h2>
        {Object.entries(monthlyCustomerRewards).map(([month, rewards]) => (
          <div key={month}>
            <h3>{month}</h3>
            <ul>
              {Object.entries(rewards).map(([customer, monthlyRewards]) => (
                <li key={customer}>
                  {customer}: {monthlyRewards} points
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div>
        <h2>Total Rewards per Customer in the last 3 months</h2>
        <ul>
          {Object.entries(totalCustomerRewards).map(([customer, totalRewards]) => (
            <li key={customer}>
              {customer}: {totalRewards} points
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
