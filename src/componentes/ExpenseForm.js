import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';



function ExpenseForm({ addExpense }) {
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');

    const handleSubmit = () => {
        axios.post('http://localhost:8080/api/expense',{
            title: title,
            amount: amount,
            date: date,
            description: description,
            category: category,


        })
    }

    return (
<form onSubmit={handleSubmit} className="container mt-4">
            <div className="mb-3">
                <input
                    type="text"
                    className="form-control"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    placeholder="Enter title"
                />
            </div>
            <div className="mb-3">
                <input
                    type="number"
                    className="form-control"
                    value={amount}
                    onChange={e => setAmount(e.target.value)}
                    placeholder="Enter amount"
                />
            </div>
            <div className="mb-3">
                <input
                    type="date"
                    className="form-control"
                    value={date}
                    onChange={e => setDate(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <input
                    type="text"
                    className="form-control"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                    placeholder="Enter description"
                />
            </div>
            <div className="mb-3">
                <select
                    className="form-select"
                    value={category}
                    onChange={e => setCategory(e.target.value)}
                >
                    <option value="">Select the category</option>
                    <option value="ค่าเช่า/ผ่อน">ค่าเช่า/ผ่อน</option>
                    <option value="ค่าน้ำค่าไฟ">ค่าน้ำค่าไฟ</option>
                    <option value="ภาษี">ภาษี</option>
                    <option value="ค่าลงทุน">ค่าลงทุน</option>
                    <option value="ค่าอาหาร">ค่าอาหาร</option>
                    <option value="ค่าเดินทาง">ค่าเดินทาง</option>
                    <option value="ค่าเที่ยว">ค่าเที่ยว</option>
                    <option value="ค่าชอปปิ้ง">ค่าชอปปิ้ง</option>
                    <option value="ค่าใช้จ่ายจิปาถะ">ค่าใช้จ่ายจิปาถะ</option>
                </select>
            </div>
            <div className='btn-incomepost'>
            <button type="submit" className="btn btn-primary">Post Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;