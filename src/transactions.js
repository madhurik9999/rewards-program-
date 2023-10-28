
const filterTransaction = (transaction) => {
  const currentDate = new Date(); // Current date
  const threeMonthsAgo = new Date(currentDate);
  threeMonthsAgo.setMonth(currentDate.getMonth() - 3); // Calculate date 3 months ago

  const transactionDate = new Date(transaction.date);
  return transactionDate >= threeMonthsAgo && transactionDate <= currentDate;
};

const sortTransaction = (transaction1,transaction2) => {
  return new Date(transaction1.date) - new Date(transaction2.date)
}

export const getTransactions = async () => {
  return sleep(Promise.resolve(transactions.filter(filterTransaction).sort(sortTransaction)),1000)
}

const sleep = (promise, timeout) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(promise)
    }, timeout)
  })
}

const transactions = [
    { customer: "John Krasinky", amount: 79, date: "2023-06-25" },
    { customer: "Matthew Perry", amount: 131, date: "2023-06-04" },
    { customer: "Shawn Mendes", amount: 80, date: "2023-08-19" },
    { customer: "Priyanka Chopra", amount: 191, date: "2023-08-10" },
    { customer: "Emma Watson", amount: 77, date: "2023-07-01" },
    { customer: "Matthew Perry", amount: 188, date: "2023-06-29" },
    { customer: "John Krasinky", amount: 125, date: "2023-08-13" },
    { customer: "Emma Watson", amount: 93, date: "2023-07-09" },
    { customer: "Shawn Mendes", amount: 92, date: "2023-07-15" },
    { customer: "Shawn Mendes", amount: 68, date: "2023-08-15" },
    { customer: "Matthew Perry", amount: 128, date: "2023-09-07" },
    { customer: "John Krasinky", amount: 82, date: "2023-07-05" },
    { customer: "Priyanka Chopra", amount: 136, date: "2023-10-01" },
    { customer: "Emma Watson", amount: 144, date: "2023-09-12" },
    { customer: "Emma Watson", amount: 127, date: "2023-09-26" },
    { customer: "Shawn Mendes", amount: 71, date: "2023-09-02" },
    { customer: "Matthew Perry", amount: 93, date: "2023-06-10" },
    { customer: "John Krasinky", amount: 155, date: "2023-06-21" },
    { customer: "Shawn Mendes", amount: 179, date: "2023-10-12" },
    { customer: "Priyanka Chopra", amount: 143, date: "2023-08-31" },
    { customer: "Priyanka Chopra", amount: 128, date: "2023-10-16" },
    { customer: "Matthew Perry", amount: 101, date: "2023-10-25" },
    { customer: "John Krasinky", amount: 179, date: "2023-10-18" },
    { customer: "Emma Watson", amount: 178, date: "2023-09-23" },
    { customer: "Matthew Perry", amount: 161, date: "2023-10-21" },
    { customer: "Shawn Mendes", amount: 67, date: "2023-08-03" },
    { customer: "John Krasinky", amount: 160, date: "2023-07-26" },
    { customer: "Shawn Mendes", amount: 187, date: "2023-09-20" },
    { customer: "Emma Watson", amount: 121, date: "2023-10-06" },
    { customer: "Priyanka Chopra", amount: 169, date: "2023-08-27" },
    { customer: "Priyanka Chopra", amount: 68, date: "2023-07-28" },
    { customer: "Matthew Perry", amount: 179, date: "2023-07-20" },
    { customer: "Emma Watson", amount: 121, date: "2023-06-19" },
    { customer: "Matthew Perry", amount: 82, date: "2023-07-17" },
    { customer: "Shawn Mendes", amount: 187, date: "2023-06-13" },
    { customer: "John Krasinky", amount: 109, date: "2023-06-22" },
    { customer: "John Krasinky", amount: 56, date: "2023-09-27" },
    { customer: "Shawn Mendes", amount: 199, date: "2023-09-05" },
    { customer: "Emma Watson", amount: 135, date: "2023-06-14" },
    { customer: "Priyanka Chopra", amount: 74, date: "2023-07-08" },
    { customer: "Matthew Perry", amount: 166, date: "2023-07-03" },
    { customer: "Shawn Mendes", amount: 142, date: "2023-10-04" },
    { customer: "John Krasinky", amount: 195, date: "2023-09-18" },
    { customer: "Emma Watson", amount: 95, date: "2023-07-30" },
    { customer: "Priyanka Chopra", amount: 153, date: "2023-09-09" },
    { customer: "Matthew Perry", amount: 84, date: "2023-08-24" },
    { customer: "John Krasinky", amount: 128, date: "2023-08-29" },
    { customer: "Matthew Perry", amount: 150, date: "2023-06-02" },
    { customer: "Shawn Mendes", amount: 59, date: "2023-08-17" },
    { customer: "Emma Watson", amount: 66, date: "2023-09-30" },
    { customer: "Priyanka Chopra", amount: 141, date: "2023-08-04" },
    { customer: "Emma Watson", amount: 99, date: "2023-06-24" },
    { customer: "John Krasinky", amount: 51, date: "2023-06-16" },
    { customer: "Shawn Mendes", amount: 111, date: "2023-08-12" },
    { customer: "Priyanka Chopra", amount: 198, date: "2023-06-18" },
    { customer: "Matthew Perry", amount: 90, date: "2023-08-02" },
    { customer: "Emma Watson", amount: 74, date: "2023-10-22" },
    { customer: "Matthew Perry", amount: 63, date: "2023-06-27" },
    { customer: "John Krasinky", amount: 104, date: "2023-08-11" },
    { customer: "Shawn Mendes", amount: 55, date: "2023-10-01" },
    { customer: "Emma Watson", amount: 140, date: "2023-09-14" },
    { customer: "Priyanka Chopra", amount: 128, date: "2023-09-06" },
    { customer: "Shawn Mendes", amount: 189, date: "2023-07-14" },
    { customer: "John Krasinky", amount: 59, date: "2023-09-25" },
    { customer: "Matthew Perry", amount: 85, date: "2023-10-27" },
    { customer: "Priyanka Chopra", amount: 180, date: "2023-08-07" },
    { customer: "Emma Watson", amount: 199, date: "2023-06-20" },
    { customer: "Matthew Perry", amount: 112, date: "2023-07-29" },
    { customer: "John Krasinky", amount: 105, date: "2023-08-26" },
    { customer: "Shawn Mendes", amount: 130, date: "2023-06-11" },
    { customer: "Emma Watson", amount: 83, date: "2023-09-11" },
    { customer: "Matthew Perry", amount: 126, date: "2023-10-15" },
    { customer: "John Krasinky", amount: 78, date: "2023-07-11" },
    { customer: "Priyanka Chopra", amount: 116, date: "2023-07-06" },
    { customer: "Emma Watson", amount: 138, date: "2023-10-10" },
    { customer: "Shawn Mendes", amount: 80, date: "2023-08-01" },
    { customer: "Matthew Perry", amount: 69, date: "2023-09-16" },
    { customer: "John Krasinky", amount: 101, date: "2023-09-29" },
    { customer: "Priyanka Chopra", amount: 109, date: "2023-06-01" },
    { customer: "Shawn Mendes", amount: 169, date: "2023-06-15" },
    { customer: "Emma Watson", amount: 110, date: "2023-08-25" },
    { customer: "John Krasinky", amount: 69, date: "2023-07-22" },
    { customer: "Matthew Perry", amount: 98, date: "2023-08-16" },
    { customer: "Shawn Mendes", amount: 129, date: "2023-07-12" },
    { customer: "Priyanka Chopra", amount: 188, date: "2023-10-20" },
    { customer: "Emma Watson", amount: 134, date: "2023-07-24" },
    { customer: "Matthew Perry", amount: 76, date: "2023-09-24" },
    { customer: "John Krasinky", amount: 199, date: "2023-07-27" },
    { customer: "Shawn Mendes", amount: 157, date: "2023-06-22" },
    { customer: "Emma Watson", amount: 121, date: "2023-06-06" },
    { customer: "Priyanka Chopra", amount: 97, date: "2023-10-24" },
    { customer: "Priyanka Chopra", amount: 64, date: "2023-08-22" },
    { customer: "Matthew Perry", amount: 80, date: "2023-10-03" },
    { customer: "John Krasinky", amount: 83, date: "2023-09-07" },
    { customer: "Matthew Perry", amount: 153, date: "2023-08-08" },
    { customer: "Shawn Mendes", amount: 162, date: "2023-09-17" },
    { customer: "Emma Watson", amount: 112, date: "2023-10-08" },
    { customer: "Priyanka Chopra", amount: 89, date: "2023-09-28" },
    { customer: "Shawn Mendes", amount: 63, date: "2023-07-03" },
    { customer: "John Krasinky", amount: 66, date: "2023-10-31" },
    { customer: "Matthew Perry", amount: 160, date: "2023-10-23" },
    { customer: "Emma Watson", amount: 111, date: "2023-09-21" },
    { customer: "John Krasinky", amount: 95, date: "2023-10-14" },
    { customer: "Shawn Mendes", amount: 79, date: "2023-06-23" },
    { customer: "Priyanka Chopra", amount: 93, date: "2023-08-14" },
    { customer: "Priyanka Chopra", amount: 105, date: "2023-10-29" },
    { customer: "Matthew Perry", amount: 147, date: "2023-06-08" },
    { customer: "John Krasinky", amount: 160, date: "2023-10-17" },
    { customer: "Emma Watson", amount: 102, date: "2023-08-30" },
    { customer: "Matthew Perry", amount: 74, date: "2023-07-25" },
    { customer: "Shawn Mendes", amount: 185, date: "2023-06-03" },
    { customer: "John Krasinky", amount: 67, date: "2023-08-20" },
    { customer: "Shawn Mendes", amount: 173, date: "2023-09-26" },
    { customer: "Emma Watson", amount: 147, date: "2023-09-01" },
    { customer: "Matthew Perry", amount: 75, date: "2023-08-06" },
    { customer: "John Krasinky", amount: 90, date: "2023-10-12" },
    { customer: "Priyanka Chopra", amount: 71, date: "2023-09-02" },
    { customer: "Shawn Mendes", amount: 51, date: "2023-09-19" },
    { customer: "Emma Watson", amount: 67, date: "2023-09-08" },
    { customer: "Priyanka Chopra", amount: 75, date: "2023-06-26" },
    { customer: "Matthew Perry", amount: 112, date: "2023-10-05" },
    { customer: "John Krasinky", amount: 66, date: "2023-08-22" },
    { customer: "Shawn Mendes", amount: 145, date: "2023-10-06" },
    { customer: "Emma Watson", amount: 55, date: "2023-08-13" },
    { customer: "Priyanka Chopra", amount: 185, date: "2023-09-12" },
    { customer: "Matthew Perry", amount: 199, date: "2023-10-26" },
  ]