import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import VendingMachine from './VendingMachine';
import Snack1 from './Snack1';

function App() {
  return (
    <div className="App">
      <h1>test</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<VendingMachine />} />
          <Route path="/snack1" element={<Snack1 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
