import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function DeleteProduct() {
  const [data, setData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = e.target.search_id.value;

    axios.delete(`http://localhost:8000/api/delete/product/${id}`)
      .then((res) => {
        console.log(res.data);
        if (res.data.deleted) {
          setData([res.data.deleted]); // put deleted record into table
        } else {
          setData([]); // if not found, clear table
          alert(res.data.message);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="center-wrapper">
      <section className="text-align-center">
        <div>
          <form
            action=""
            onSubmit={handleSubmit}
            className="p-4 border rounded bg-light"
            style={{ width: '400px' }}
          >
            <input
              type="text"
              placeholder="Enter the product_id"
              name="search_id"
              className="form-control mt-1"
            />
            <button className="btn btn-primary mt-2 w-100">Submit</button>
          </form>
        </div>

        {data.length > 0 && (
          <div className="mt-4">
            <table>
              <thead>
                <tr>
                  <th>product_id</th>
                  <th>product_name</th>
                  <th>product_price</th>
                  <th>product_category</th>
                  <th>product_image</th>
                  <th>added_date</th>
                  <th>updated_date</th>
                </tr>
              </thead>

              <tbody>
                {data.map((item, id) => (
                  <tr key={id}>
                    <td>{item.product_id}</td>
                    <td>{item.product_name}</td>
                    <td>{item.product_price}</td>
                    <td>{item.product_category}</td>
                    <td>{item.product_image}</td>
                    <td>{item.product_added_date}</td>
                    <td>{item.product_updated_date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </div>
  );
}
