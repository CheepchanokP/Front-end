import React, { useEffect, useState } from "react";
import './components_css/BalanceDisplay.css';
import axios from "axios";

function BalanceDisplay() {

  const [totalIncome, settotalIncome] = useState();
  const [totalExpense, settotalExpense] = useState();
    const balance = totalIncome-totalExpense;

    useEffect(() => {
      getTotal();
  }, []);

    const getTotal = () => {
      axios.get('http://localhost:8080/api/stats')
          .then(response => {
            settotalIncome(response.data.income);
            settotalExpense(response.data.expense);
          });
    }
    
    
    return (
      <div className="balance-display">
        <ul>
        <li1>Balance: THB {balance}</li1>
        <li2>Total Income: THB {totalIncome}</li2>
        <li3>Total Expense: THB {totalExpense}</li3>
        </ul>
      </div>
    );
  }
  export default BalanceDisplay;