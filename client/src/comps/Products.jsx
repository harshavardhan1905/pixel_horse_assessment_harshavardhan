import { useState } from 'react';
import { useEffect } from 'react';

export default function Products({ search }) {
    const [products, setProducts] = useState([]);
    const [buyProduct, setbuyProduct] = useState([]);
    const [selectedProduct, setselectedProduct] = useState([]);
    const [page, setPage] = useState(null);
    // const [Cart, setCart] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8000/api/products")
            .then((result) => result.json())
            .then((result) => {setProducts(result); setselectedProduct(result)})
            .then((err) => console.log(err))
    }, [])

    ///filtered data
    useEffect(()=>{
        if(!search){
            setselectedProduct(products);
        }else{
            const match = products.filter((item)=>
            (item.product_name ?? "").toLowerCase().includes(search.toLowerCase()));
            setselectedProduct(match);
        }
    },[search, products])

    const buyHandler = (id) => {
        const product = selectedProduct.find((item) => item.product_id == id);
        setbuyProduct(product);

    }
    
    const cartHandler = (id) =>{
        
        let cart = JSON.parse(localStorage.getItem("cartProducts")) || [];
        const product = products.find((item) => item.product_id == id);
        cart.push(product)
        localStorage.setItem("cartProducts", JSON.stringify(cart));
        console.log(cart)
    }

    console.log(selectedProduct, page)
    

    return (
        <>
            <div className='products-container'>
                <div name="title" className='product-titles'>
                    <span>All products</span>
                </div>
                <div name="product-view" className='product-view'>
                    <div className='products-nav'>
                        {selectedProduct.map((item, id) => (


                            <div className='card-p' key={id}>
                                <div className='img-con' >
                                    <img src={item.product_image} alt="" />
                                    <span>{item.product_name}</span>
                                    <span>Rs.{item.product_price}</span>
                                </div>
                                <div className='btns'>
                                    <button className='btn-buy bt' onClick={() => { buyHandler(item.product_id); setPage("buy") }}>Buy</button>
                                    <button className='btn-add' onClick={() => { cartHandler(item.product_id) }} >Add to cart</button>
                                </div>
                            </div>
                        ))}





                    </div>
                </div>
                <div>
                    {page == "buy" && (
                        <div className="overlay">
                            <div className="popup">
                                <button className="close-btn" onClick={() => setPage(null)}>X</button>

                                <div className="product-details">
                                    <h2>{buyProduct.product_name}</h2>
                                    <p>Price: ₹{buyProduct.product_price}</p>
                                    <img src={buyProduct.product_image} alt={buyProduct.product_name} />

                                    <button className="pay-btn">Proceed to Payment</button>
                                </div>
                            </div>
                        </div>
                    )}
                    {page == 'cart' && (
                        <div name="product-view" className='product-view'>
                            <div className='products-nav'>
                                {products.map((item, id) => (


                                    <div className='card-p' key={id}>
                                        <div className='img-con'>
                                            <img src={item.product_image} alt="" />
                                            <span>{item.product_name}</span>
                                            <span>Rs.{item.product_price}</span>
                                        </div>
                                        <div className='btns'>
                                            <button className='btn-buy bt' onClick={() => { buyHandler(item.product_id); setPage("buy") }}>Buy</button>
                                            <button className='btn-add' onClick={() => { cartHandler(item.product_id) }} >Add to cart</button>
                                        </div>
                                    </div>
                                ))}





                            </div>
                        </div>
                    )}



                </div>
            </div>
        </>
    )
}
