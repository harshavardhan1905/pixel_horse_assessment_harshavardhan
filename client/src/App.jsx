import { useEffect, useState } from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './comps/Home'
import Admin from './admin/Admin';
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path='/admin' element={<Admin/>} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
