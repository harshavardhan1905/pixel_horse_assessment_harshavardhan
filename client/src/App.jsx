import { useEffect, useState } from 'react';
import './App.css'

function App() {
  const [data, setData] = new useState([]);
 useEffect( ()=>{
  fetch('http://localhost:8000/api/products')
 .then(res => res.json())
 .then(data => setData(data))
 .then(err => console.log(err))
 }, [])
 console.log(data)
  return (
    <>
      <h1>Hello</h1>
    </>
  )
}

export default App
