import { useEffect, useState } from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './comps/Home'
import Admin from './admin/Admin';
import Delete from './comps/CRUD/delete';
import Products from './comps/Products'
import './App.css'
import Login from './comps/Logins/SignIn';
import Register from './comps/Logins/SignUp'
import AdminLogin from './admin/admin-login'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path='/admin' element={<Admin/>} />
            <Route path='/products' element={<Products/>} />
            <Route path='/delete' element={<Delete/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/register' element={<Register/>} />
          <Route path='/admin-login' element={<AdminLogin/>} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
