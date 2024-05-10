import React, { Component } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './componentes/Home';
import Income from './componentes/Income';
import Expence from './componentes/Expence';
import User from './componentes/User';
import Knowledge from './componentes/Knowledge';


class App extends Component {
  render(){
    return (
      <div>
        <div>
        <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Income" element={<Income />} />
        <Route path="/Expense" element={<Expence />} />
        <Route path="/User" element={<User />} />
        <Route path="/Knowledge" element={<Knowledge />} />
        </Routes>
        </div>
      </div>
    )
  }
}

export default App;