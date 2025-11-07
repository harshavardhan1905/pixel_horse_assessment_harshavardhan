import React, { useEffect, useState } from 'react'
import AddProductForm from '../comps/CRUD/addProduct';

export default function Admin() {
    const [page, setPage] = new useState('Admin');
    console.log(page);
    const [data, setData] = new useState([])
    useEffect(() => {
        fetch("http://localhost:8000/api/products")
            .then((res) => res.json())
            .then((result) => setData(result))
            .catch((err) => console.log(err))
    }, [])
    console.log(data)
    return (
        <>
            <section className='navbar-expand-lg w-100'>
                <nav name='top-admin' className="top-admin bg-dark navbar navbar-expand-lg fixed-top">
                    <a href="">Admin Portal</a>
                </nav>
                <div name='middle-admin' className='middle-admin  justify-content-between container-fluid'>
                    <button className='btn btn-primary btn-admin' onClick={()=> setPage('Admin')}>Dashboard</button>

                    <button className='btn btn-primary btn-admin' onClick={()=> setPage('add')}>Add</button>
                    <button className='btn btn-warning btn-admin' onClick={()=> setPage('update')}>Update</button>
                    <button className='btn btn-danger btn-admin' onClick={()=> setPage('delete')}>Delete</button>
                </div>
                {page==='Admin' && <div name='buttom'>
                    <table className='table-admin'>
                        <thead className='tr-head-admin'>
                            <th className='th-admin'>product_id</th>
                            <th className='th-admin'>Product_name</th>
                            <th className='th-admin'>Product_price</th>
                            <th className='th-admin'>Product_category</th>
                            <th className='th-admin'>Product_image</th>
                            <th className='th-admin'>Added_date</th>
                            <th className='th-admin'>Updated_date</th>
                            <th className='th-admin'>...</th>
                        </thead>
                        {data.map((item, id) => (
                            <tbody key={id}>

                                <td className='th-admin'>{item.product_id}</td>
                                <td className='th-admin'>{item.product_name}</td>
                                <td className='th-admin'>{item.product_price}</td>
                                <td className='th-admin'>{item.product_category}</td>
                                <td className='th-admin'>{item.product_image}:?</td>
                                <td className='th-admin'>{item.product_added_date}:?</td>
                                <td className='th-admin'>{item.product_updated_date}:?</td>
                                <td className='th-admin'>{item.product_category}:? </td>


                            </tbody>
                        ))}
                    </table>
                </div>  
                    }

                    {page=='add' && <AddProductForm/>}
            </section>
         
        </>
    )
}
