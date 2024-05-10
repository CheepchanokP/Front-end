import React from 'react';
import { useNavigate } from 'react-router-dom';
import './components_css/Sidebar.css';



function Sidebar()  {

    const navigate = useNavigate();

    const handleIncomeClick = () => {
        navigate('/Income'); 
      };

      const handleExpenseClick = () => {
        navigate('/Expense'); 
      };
      const handleDashboardClick = () => {
        navigate('/'); 
      };
      const handleKnowledgeClick = () => {
        navigate('/Knowledge'); 
      };


    return (
      <div className="sidebar">
        <ul >
        <li>
        <button ><img src="https://department.utcc.ac.th/oei/wp-content/uploads/sites/34/2023/08/cropped-UTCC_SubMain-5-1.png" alt="UTCC_SubMain"
            style={{ width: '100px', height: '100px' }}/>
</button>
            </li>
          <li>
            <button onClick={handleDashboardClick}>Dashboard</button>
            </li>
          <li>
            <button onClick={handleIncomeClick}>Income</button>
            </li>
          <li>
            <button onClick={handleExpenseClick}>Expense</button>
            </li>
            <li>
            <button onClick={handleKnowledgeClick}>Knowledge</button>
            </li>
        </ul>
      </div>
    );
  }
  export default Sidebar;
