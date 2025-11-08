import React, { useEffect, useState } from 'react'
import AddProductForm from '../comps/CRUD/addProduct';
import DeletePage from '../comps/CRUD/delete';
import UpdatePage from '../comps/CRUD/update'
import { FaTrash, FaEdit } from "react-icons/fa";
import axios from "axios";


export default function Admin() {
    const [page, setPage] =  useState('Admin');
    console.log(page);
    const [data, setData] =  useState([])

    useEffect(() => {
        fetch("http://localhost:8000/api/products")
            .then((res) => res.json())
            .then((result) => setData(result))
            .catch((err) => console.log(err))
    }, [])
    
    const fetchProducts = () =>{
        fetch("http://localhost:8000/api/products")
            .then((res) => res.json())
            .then((result) => setData(result))
            .catch((err) => console.log(err))
    }

    const  deleteProduct=(id)=>{
        if (!window.confirm("Are you sure you want to delete this product?")) return;
        axios.delete(`http://localhost:8000/api/delete/product/${id}`)
         .then((res) => {
            alert(res.data.message)
            fetchProducts();
         })
        .catch((err) => console.log(err));
    }
    console.log(data)

    //update the product
   const [selectedProduct, setselectedProduct] = useState(null);
    return (
        <>
            <div className='w-100'>
                <div name='top-admin' className="top-admin bg-dark navbar navbar-expand-lg ">
                    <a href="" className='ms-3 text-white'>Admin Portal</a>
                </div>
                <div name='middle-admin' className='middle-admin  justify-content-between   p-3'>
                    <button className='btn btn-primary btn-admin' onClick={() => {setPage('Admin');  fetchProducts(); }}>Dashboard</button>

                    <button className='btn btn-primary btn-admin' onClick={() => setPage('add')}>Add</button>
                    {/* <button className='btn btn-warning btn-admin' onClick={() =>{setselectedProduct(item); setPage('update')} }>Update</button> */}
                    <button className='btn btn-danger btn-admin' onClick={() => setPage('delete')}>Delete</button>
                </div>
                {page === 'Admin' && <div name='buttom' className='p-3'>
                    <table className='table-admin'>
                        <thead className='tr-head-admin'>
                            <tr>
                                <th className='th-admin'>product_id</th>
                                <th className='th-admin'>Product_name</th>
                                <th className='th-admin'>Product_price</th>
                                <th className='th-admin'>Product_category</th>
                                <th className='th-admin'>Product_image</th>
                                <th className='th-admin'>Added_date</th>
                                <th className='th-admin'>Updated_date</th>
                                <th className='th-admin'>Tools</th>
                            </tr>
                        </thead>
                        {data.map((item, id) => (
                            <tbody key={id}>
                                <tr>
                                    <td className='th-admin'>{item.product_id}</td>
                                    <td className='th-admin'>{item.product_name}</td>
                                    <td className='th-admin'>{item.product_price}</td>
                                    <td className='th-admin'>{item.product_category}</td>
                                    <td className='th-admin'>{item.product_image}:?</td>
                                    <td className='th-admin'>{item.added_date}:?</td>
                                    <td className='th-admin'>{item.updated_date}:?</td>
                                    <td className='th-admin'>
                                        <FaEdit
                                            className="text-primary me-3"
                                            style={{ cursor: "pointer" }}
                                            onClick={() =>{ setselectedProduct(item); setPage("update")
                                            }}
                                        />

                                        <FaTrash
                                            className="text-danger"
                                            style={{ cursor: "pointer" }}
                                            onClick={() => deleteProduct(item.product_id)}
                                        />
                                    </td>
                                </tr>

                            </tbody>
                        ))}
                    </table>
                </div>
                }

                {page == 'add' && <AddProductForm />}
                {page == 'delete' && <DeletePage />}
                {page == 'update' && <UpdatePage product={selectedProduct}/>}
            </div>

        </>
    )
}
