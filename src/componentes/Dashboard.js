import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';


function Dashboard() {

  const [incomeList, setincomeList] = useState([]);
  const [expenseList, setexpenseList] = useState([]);
  const [latestIncome, setlatestIncome] = useState([]);
  const [latestExpense, setlatestExpense] = useState([]);




  useEffect(() => {
    getData();
    getlatestData();
}, []);


const getData = () => {
    axios.get('http://localhost:8080/api/stats/chart')
        .then(response => {
          setincomeList(response.data.incomeList);
          setexpenseList(response.data.expenseList);
        });
}

const getlatestData = () => {
  axios.get('http://localhost:8080/api/stats')
      .then(response => {
        setlatestIncome(response.data.latestIncome);
        setlatestExpense(response.data.latestExpense);
      });
}

    // const incomeStats = { min: 200, max: 3000 };
    // const expenseStats = { min: 25, max: 100 };
  
    return (
      <div className='content'>
      <div className="dashboard">
        <section  >
          <div className="incomechart">      
            <IncomeChart data={incomeList} />
          </div>
          <div className="expencechart" >  
          <ExpenseChart data={expenseList} />
        </div>
        </section>
        <aside  >
        <TransactionList transaction={latestIncome} title="Latest Income" />
        <TransactionList transaction={latestExpense} title="Latest Expense" />
        {/* <StatisticsDisplay stats={{ income: incomeStats, expense: expenseStats }} /> */}
        </aside>
      </div>
      </div>
    );
  }

  
    function IncomeChart({ data }) {
      return (
        <div className='income'>
          <ul><h2>Income Chart</h2></ul>
        <LineChart width={1200} height={500} data={data} title="Income Chart">
          <Line type="monotone" dataKey="amount" stroke="green" />
          <CartesianGrid stroke="#ccc" />
          <Tooltip />
          <XAxis dataKey="date" />
          <YAxis />
        </LineChart>
         </div>
      );
    }
    function ExpenseChart({ data }) {
      return (
        <div className='expence'>
          <ul><h2>Expense Chart</h2></ul>
          <LineChart width={1200} height={500} data={data}>
            <Line type="monotone" dataKey="amount" stroke="red" />
            <CartesianGrid stroke="#ccc" />
            <Tooltip />
            <XAxis dataKey="date" />
            <YAxis />
          </LineChart>
        </div>
      );
    }
    
    function TransactionList({ transaction, title }) {
      return (
        <div className="transaction-list">
          <h3>{title}</h3>
          {transaction && (
            <div key={transaction.id}
            >{transaction.title} :  THB {transaction.amount}</div>
          )}
        </div>
      );
    }
    

    // function StatisticsDisplay({ stats }) {
    //   return (
    //     <div className="statistics-display">
    //       <div>Income: Min ${stats.income.min} | Max ${stats.income.max}</div>
    //       <div>Expense: Min ${stats.expense.min} | Max ${stats.expense.max}</div>
    //     </div>
    //   );
    // }
    
    export default Dashboard;