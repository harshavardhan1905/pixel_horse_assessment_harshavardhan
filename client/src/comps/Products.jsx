import { useState } from 'react';
import { useEffect } from 'react';

export default function Products({search}) {
    const[products, setProducts] = useState([]);
    const[searchProdcuts, setsearchProducts] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:8000/api/products")
        .then((result)=> result.json())
        .then((result)=> setProducts(result))
        .then((err)=> console.log(err))
    },[])
    console.log(typeof search);
    
    
    
    
  return (
    <>
        <div className='products-container'>
            <div name="title" className='product-titles'>
                <span>All products</span>
            </div>
            <div name="product-view" className='product-view'>
                <div className='products-nav'>
                    {products.map((item, id)=>(

                   
                    <div className='card-p'>
                        <div className='img-con'>
                            <img src={item.product_image} alt="" />
                            <span>{item.product_name}</span>
                            <span>Rs.{item.product_price}</span>
                        </div>
                        <div className='btns'>
                            <button className='btn-buy bt'>Buy</button>
                            <button className='btn-add'>Add to cart</button>
                        </div>
                    </div>
                     ))}
                    
                </div>
            </div>
        </div>
    </>
  )
}
