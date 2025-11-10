import React from 'react'
import { useState, useEffect } from 'react';
import AfricanBoy from '../assets/african-boy.png'
import Racaco from '../assets/racao-papagaio.png'
import DairyProducts from '../assets/dairy-products.png'
import VegandFrts from '../assets/veg-and-fruits.png'
import Spices from '../assets/spice-masala.png'
import Honey from '../assets/honey.png'
import Flour from '../assets/flour.png'
import Products from './Products';
import { FaTrash } from "react-icons/fa";
import FAQs from '../comps/homenavs/FAQs'
import About from '../comps/homenavs/About'
import { FaShoppingCart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";



export default function Home() {
    const navigate = useNavigate();
    const [search, setSearch] = useState("");
    const [page, setPage] = useState(null);
    let cart = JSON.parse(localStorage.getItem("cartProducts"));
    // cart.map((item)=>{
    //     console.log(item.product_id)
    // })
    const deleteHandler = (id) =>{
          cart = cart.filter(item => item.product_id != id);
          localStorage.setItem("cartProducts", JSON.stringify(cart));
          alert("Deleted item from the cart")
          cart = JSON.parse(localStorage.getItem("cartProducts"));
    }



    return (
        <>
            <div className="">
                <nav name='top' className="navbar navbar-expand-lg fixed-top" style={{"background-color":"whitesmoke"}}>
                    <div className="container-fluid">

                        {/* Logo / Brand */}
                        <a className="navbar-brand text-warning px-3 py-1 rounded" href="#">
                            NutritionMart
                        </a>

                        {/* Toggle button for mobile */}
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarContent"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        {/* Collapsible content */}
                        <div className="collapse navbar-collapse" id="navbarContent">

                            {/* Left Side Menu */}
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-3">
                                <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
                                <li className="nav-item"><a className="nav-link" href="#products">Categories</a></li>
                                <li className="nav-item"><a className="nav-link" href="#">Sales</a></li>
                                <li className="nav-item"><a className="nav-link" href="#faq">FAQ</a></li>
                                <li className="nav-item"><a className="nav-link" href="#contact">About</a></li>
                                <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
                                <li className="nav-item"><a className="nav-link" href="#" style={{ "color": "red", "fontSize": "20px", "fontWeight": "bold" }} onClick={() => navigate("/admin")}>Admin</a></li>
                            </ul>

                            {/* Right Side Buttons */}
                            <div className="d-flex gap-2">
                                <button className="btn btn-outline-primary" onClick={() => { setPage("cart") }}>
                                    <FaShoppingCart size={18} style={{ marginRight: "6px" }} />
                                </button>
                                <button className="btn btn-outline-success" onClick={() => { navigate("/login") }}>Sign In</button>
                                <button className="btn btn-primary" onClick={() => { navigate("/register") }}>Sign Up</button>
                            </div>
                            {/* cart products */}

                            {page == 'cart' && (
                                <div className="overlay">
                                    <div className="popup">
                                        <button className="close-btn" onClick={() => { setPage(null) }}>X</button>

                                        <div className="product-details">
                                            <ol>
                                                {cart.map((item) => (
                                                    <li style={{ "display": "flex" }}>
                                                        <div className="left-section">
                                                            <img src={item.product_image} alt="Product" />
                                                        </div>

                                                        <div className="right-section">
                                                            <h2 style={{"fontWeight": "bold"}}>{item.product_name}</h2>
                                                            <p>Price: ₹{item.product_price}</p>
                                                           
                                                        </div>
                                                         <div className='del-sec' onClick={()=>{deleteHandler(item.product_id)}}>
                                                            <FaTrash
                                                                className="text-danger"
                                                                style={{ cursor: "pointer" }}
                                                                
                                                            />
                                                         </div>

                                                    </li>
                                                ))}
                                                <button className="pay-btn">Proceed to Payment</button>
                                            </ol>

                                        </div>

                                    </div>
                                </div>
                            )}



                        </div>
                    </div>
                </nav>

                <section name="middle" className='navbar navbar-expand-lg ' style={{"margin-top": "21px"}}>
                    <div className='middle-left'>
                        <h1>Let your <p style={{ "color": "red", }}>Health</p> come to you</h1>
                        <p>Find your foundation. NUTRABALANCE is the subtle harmony that transforms good health into a beautiful, vibrant life.</p>

                        <div name="search">

                            <div className='search-div'>
                                <input type="text" placeholder='Search here..' className='search-bar' onChange={(e) => setSearch(e.target.value)} />
                                <a><FaSearch size={22} color="black" /></a>
                            </div>
                            <div className='d-flex'>
                                <ul>
                                    <li>Nutritional food</li>
                                    <li>Cash on Delivery</li>
                                </ul>
                                <ul>
                                    <li>100% Guarantee</li>
                                    <li>Fast Delivery</li>
                                </ul>
                            </div>

                        </div>
                    </div>
                    <div>
                        <img src={AfricanBoy} alt="African boyyyyy" />
                    </div>
                    <div name='right-sec'>
                        <div>
                            <div className='food-card'>
                                <div className='food-card-con'>
                                    <img src={Racaco} alt="racaco" className='food-img' />
                                    <span>papagaio-arere</span>
                                    <span>Rs.1200.00</span>
                                </div>
                            </div>
                            <div className='food-card'>
                                <div className='food-card-con'>
                                    <img src={Racaco} alt="racaco" className='food-img' />
                                    <span>papagaio-arere</span>
                                    <span>Rs.1200.00</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

                <section name="bottom">
                    <div className='d-flex justify-content-between'>
                        <div className='category'>
                            <img src={DairyProducts} alt="imsgr" className='cat-img' />
                            <div>
                                <span style={{ "fontWeight": "bold" }} className='product-cat'>Dairy Products</span> <br />
                                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
                            </div>

                        </div>
                        <div className='category'>
                            <img src={VegandFrts} alt="imsgr" className='cat-img' />
                            <div>
                                <span style={{ "font-weight": "bold" }} className='product-cat'>Vegetable and Fruits</span> <br />
                                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
                            </div>

                        </div>
                        <div className='category'>
                            <img src={Spices} alt="imsgr" className='cat-img' />
                            <div>
                                <span style={{ "font-weight": "bold" }} className='product-cat'>Spices & Seasonings</span> <br />
                                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
                            </div>

                        </div>
                        <div className='category'>
                            <img src={Honey} alt="imsgr" className='cat-img' />
                            <div>
                                <span style={{ "font-weight": "bold" }} className='product-cat'>Honey</span> <br />
                                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
                            </div>

                        </div>
                        <div className='category'>
                            <img src={Flour} alt="imsgr" className='cat-img' />
                            <div>
                                <span style={{ "font-weight": "bold" }} className='product-cat'>Flour</span> <br />
                                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
                            </div>

                        </div>

                    </div>
                </section>

                <section name='products' id='products'>
                    <Products search={search} />
                </section>

                <FAQs />
                <About />
            </div>

        </>
    )
}

