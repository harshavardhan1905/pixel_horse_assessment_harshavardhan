import React, { useState } from "react";
import axios from "axios";
const now = new Date().toISOString();
export default function AddProductForm() {
  const handleSubmit = (e)=>{
    e.preventDefault();
    const id = e.target.product_id.value;
    const name = e.target.product_name.value;
    const price = e.target.product_price.value;
    const category = e.target.product_category.value;
    const image = e.target.product_image.value;
    const added_date = e.target.added_date.value || now;
    console.log(id, name, price,category, image, added_date)
    axios.post("http://127.0.0.1:8000/api/add/product",{
        product_id: id,
        product_name: name,
        product_price: price,
        product_category: category,
        product_image:image,
        added_date : added_date
    })
  
  };
  return (
    <form onSubmit={handleSubmit}  className="p-4 border rounded" style={{ width: "400px" }}>
      <h3 className="mb-3">Add Product</h3>

      <input
        type="number"
        name="product_id"
        placeholder="Product ID"
        className="form-control mb-2"
        required
      />

      <input
        type="text"
        name="product_name"
        placeholder="Product Name"
        className="form-control mb-2"
        required
      />

      <input
        type="number"
        name="product_price"
        placeholder="Product Price"
        className="form-control mb-2"
        required
      />

      <input
        type="text"
        name="product_category"
        placeholder="Product Category"
        className="form-control mb-2"
        required
      />

      <input
        type="text"
        name="product_image"
        placeholder="Product Image URL"
        className="form-control mb-2"
      />

      <input
        type="date"
        name="added_date"
        className="form-control mb-2"
      />

      <button className="btn btn-primary w-100">Add Product</button>
    </form>
  );
}
