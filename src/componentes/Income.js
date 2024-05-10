import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import IncomeFrom from "./IncomeFrom";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';




function Income() {
  return (
    <div className="page">
    <div className="grid-container">
    <aside>
      <Sidebar/>
    </aside>
     <section className="grid-main">
     <TotalIncome />
      <div className="incomeform"><IncomeFrom/></div>
      <div className="tableincome-history"><HistoryIncome/></div>
      </section>
      </div>
      </div>
)
}

function TotalIncome() {

  const [totalIncome, settotalIncome] = useState();


    useEffect(() => {
      getTotal();
  }, []);

    const getTotal = () => {
      axios.get('http://localhost:8080/api/stats')
          .then(response => {
            settotalIncome(response.data.income);
          });
    }
    
    
    return (
      <div className="balance-display">
        <ul>
        <li2>Total Income: THB {totalIncome}</li2>
        </ul>
      </div>
    );
  }
  function HistoryIncome() {

    const [incomeList, setincomeList] = useState([]);
    const [editIncomeId, setEditIncomeId] = useState(null);

    

    const handleDelete = (id) => {
      axios.delete(`http://localhost:8080/api/income/${id}`)
      .then(() => {
        getincome(); // Refresh the list after deletion
      });
    };
  

      useEffect(() => {
        getincome();
    }, []);
  
      const getincome = () => {
        axios.get('http://localhost:8080/api/income/all')
            .then(response => {
              setincomeList(response.data);
            });
      }
      const handleEdit = (income) => {
        setEditIncomeId(income.id);
      };
      
      
      return (
        <>
        
      <table className="table table-striped table-hover"> 
      
        <thead>
         <tr>
          <th>ID</th>
           <th>หัวข้อ</th> 
           <th>จำนวนเงิน</th> 
          <th>วันที่</th> 
          <th>หมวดหมู่</th> 
           <th>คำอธิบาย</th> 
           <th>Actions</th>
            
          </tr>
          
        </thead>
      
        <tbody>
          {incomeList.map((val, key) => (
            <tr key={key}>
              <td>{val.id}</td>
              <td>{val.title}</td>
              <td>{val.amount}</td>
              <td>{val.date}</td>
              <td>{val.category}</td>
              <td>{val.description}</td>

             
              <td>
              <button onClick={() => handleEdit(val)} className="btn btn-primary">Edit</button>
               <button onClick={() => handleDelete(val.id)} className="btn btn-danger">Delete</button>
              </td>
              
            </tr>
          ))}
        </tbody>
      </table>
      
      {editIncomeId && <EditIncomeModal incomeId={editIncomeId} onClose={() => setEditIncomeId(null)} />}

    </>
      );
}
function EditIncomeModal({ incomeId, onClose }) {
  const [incomeData, setIncomeData] = useState({
    title: '',
    amount: '',
    date: '',
    category: '',
    description: ''
  });

  useEffect(() => {
    axios.get(`http://localhost:8080/api/income/${incomeId}`)
      .then(response => {
        setIncomeData(response.data); // Ensure we are setting the state correctly
      });
  }, [incomeId]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setIncomeData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.put(`http://localhost:8080/api/income/${incomeId}`, incomeData)
      .then(() => {
        onClose(); // Close modal after successful update
      });
  };

  return (
    <div className="modal" style={{ display: 'block' }}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Edit Expense</h5>
            <button onClick={onClose} className="close">&times;</button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Title</label>
                <input type="text" className="form-control" name="title" value={incomeData.title} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label>Amount</label>
                <input type="number" className="form-control" name="amount" value={incomeData.amount} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label>Date</label>
                <input type="date" className="form-control" name="date" value={incomeData.date} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label>Category</label>
                <input type="text" className="form-control" name="category" value={incomeData.category} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label>Description</label>
                <textarea className="form-control" name="description" value={incomeData.description} onChange={handleChange}></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Save Changes</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
  export default Income;