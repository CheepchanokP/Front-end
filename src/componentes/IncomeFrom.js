import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';


function IncomeFrom({ addIncome }) {
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');

    const handleSubmit = () => {
        axios.post('http://localhost:8080/api/income',{
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
                    <option value="เงินเดือน">เงินเดือน</option>
                    <option value="ธุรกิจส่วนตัว">ธุรกิจส่วนตัว</option>
                    <option value="การลงทุน">การลงทุน</option>
                    <option value="ของขวัญ">ของขวัญ</option>
                    <option value="รายได้อื่นๆ">รายได้อื่นๆ</option>
                </select>
            </div>
            <div className='btn-incomepost'>
            <button type="submit" className="btn btn-primary">Post Income</button>
            </div>
        </form>

    );
}

export default IncomeFrom;