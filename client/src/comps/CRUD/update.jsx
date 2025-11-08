import React from 'react'
const now = new Date().toISOString();
import axios from 'axios';

export default function Update({ product }) {
    const handleSubmit = (e)=>{
        e.preventDefault();
        const id = e.target.product_id.value;
        const name = e.target.product_name.value;
        const price = e.target.product_price.value;
        const category = e.target.product_category.value;
        const image = e.target.product_image.value;
        const added_date = e.target.added_date.value || now;
        const updated_date = now;
        console.log(id, name, price,category, image, added_date , updated_date)
        axios.patch(`http://127.0.0.1:8000/api/update/product/${id}`,{
            product_id: id,
            product_name: name,
            product_price: price,
            product_category: category,
            product_image:image,
            added_date : added_date,
            updated_date: updated_date
        }).then((res)=> {
        if(res.status==201){
            alert("Updated product")
        }
        })
  
    }
  return (
    <div>
    <form onSubmit={handleSubmit}  className="p-4 border rounded" style={{ width: "400px" }}>
      <h3 className="mb-3">Update Product</h3>

      <input
        type="number"
        name="product_id"
        placeholder="Product ID"
        defaultValue={product.product_id}
        className="form-control mb-2"
        required
      />

      <input
        type="text"
        name="product_name"
        placeholder="Product Name"
        defaultValue={product.product_name}
        className="form-control mb-2"
        required
      />

      <input
        type="number"
        name="product_price"
        placeholder="Product Price"
        defaultValue={product.product_price}
        className="form-control mb-2"
        required
      />

      <input
        type="text"
        name="product_category"
        placeholder="Product Category"
        defaultValue={product.product_category}
        className="form-control mb-2"
        required
      />

      <input
        type="text"
        name="product_image"
        placeholder="Product Image URL"
        defaultValue={product.product_image}
        className="form-control mb-2"
      />

      <input
        type="text"
        name="added_date"
        defaultValue={product.added_date}
        className="form-control mb-2"
      />

      <button className="btn btn-primary w-100">Submit</button>
    </form>
    </div>
  )
}
