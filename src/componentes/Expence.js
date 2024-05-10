import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import ExpenseForm from './ExpenseForm'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';


function Expence() {
  return (
    <div className="grid-container">
    <aside>
      <Sidebar/>
    </aside>
     <section className="grid-main">
     <TotalExpence />
     <div className="expenseform"><ExpenseForm/></div>
     <div className="tableexpense-history"><HistoryExpence/></div>

      </section>
      </div>
 
)
}
function TotalExpence() {

  const [totalExpense, settotalExpense] = useState();

    useEffect(() => {
      getTotal();
  }, []);

    const getTotal = () => {
      axios.get('http://localhost:8080/api/stats')
          .then(response => {
            settotalExpense(response.data.expense);
          });
    }
    
    
    return (
      <div className="balance-display">
        <ul>
        <li3>Total Expense: THB {totalExpense}</li3>
        </ul>
      </div>
    );
  }

  function HistoryExpence() {

    const [expenceList, setexpenceList] = useState([]);
    const [editExpenseId, setEditExpenseId] = useState(null);


    const handleDelete = (id) => {
      axios.delete(`http://localhost:8080/api/expense/${id}`)
      .then(() => {
        getExpence(); // Refresh the list after deletion
      });
    };
  
      useEffect(() => {
        getExpence();
    }, []);
  
      const getExpence = () => {
        axios.get('http://localhost:8080/api/expense/all')
            .then(response => {
              setexpenceList(response.data);
            });
      }
      
      const handleEdit = (expense) => {
        setEditExpenseId(expense.id);
      };
      
      return (
        <>
        
      <table className="table table-striped table-hover"> {/* Updated classNames */}
        <thead>
          <tr>
            <th>ID</th>
            <th>หัวข้อ</th> {/* Title in Thai */}
            <th>จำนวนเงิน</th> {/* Amount in Thai */}
            <th>วันที่</th> {/* Date in Thai */}
            <th>หมวดหมู่</th> {/* Category in Thai */}
            <th>คำอธิบาย</th> {/* Description in Thai */}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {expenceList.map((val, key) => (
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
      
      {editExpenseId && <EditExpenseModal expenseId={editExpenseId} onClose={() => setEditExpenseId(null)} />}
    </>
      );
}
function EditExpenseModal({ expenseId, onClose }) {
  const [expenseData, setExpenseData] = useState({
    title: '',
    amount: '',
    date: '',
    category: '',
    description: ''
  });

  useEffect(() => {
    axios.get(`http://localhost:8080/api/expense/${expenseId}`)
      .then(response => {
        setExpenseData(response.data); // Ensure we are setting the state correctly
      });
  }, [expenseId]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setExpenseData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.put(`http://localhost:8080/api/expense/${expenseId}`, expenseData)
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
            <button onClick={onClose} className="close" >&times;</button>
         
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Title</label>
                <input type="text" className="form-control" name="title" value={expenseData.title} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label>Amount</label>
                <input type="number" className="form-control" name="amount" value={expenseData.amount} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label>Date</label>
                <input type="date" className="form-control" name="date" value={expenseData.date} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label>Category</label>
                <input type="text" className="form-control" name="category" value={expenseData.category} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label>Description</label>
                <textarea className="form-control" name="description" value={expenseData.description} onChange={handleChange}></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Save Changes</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Expence