import React from "react";
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";
import BalanceDisplay from "./BalanceDisplay";
import './components_css/Home.css';
import './components_css/BalanceDisplay.css';
import './components_css/Income.css';
import './components_css/Expense.css';
import './components_css/Modal.css';
import './components_css/Knowledge.css';


function Home() {
    return (
      <div className="page">
        <div className="grid-container">
            <aside>
              <Sidebar/>
            </aside>
             <section className="grid-main">
             <BalanceDisplay />
                <Dashboard />
              </section>
        </div>
      </div>
        
    );
}
  export default Home;
  