import React from 'react';
import './App.css';
import Builder from './components/Builder';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Receipt from './components/Receipt';



function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Builder />} />
          <Route exact path="/receipt" element={<Receipt />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App;