import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Swal from 'sweetalert2';

function Dashboard() {
    const [Product, setProductData] = useState({
        product_name: '',
        product_price: '',
        product_detail: '',
        product_picture: null
    });

    const handleChange = (e) => {
        if (e.target.name === 'product_picture') {
            setProductData({ ...Product, [e.target.name]: e.target.files[0] });
          } else {
            setProductData({ ...Product, [e.target.name]: e.target.value });
          }    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(Product);
        try {
            const formData = new FormData();
            formData.append('product_name', Product.product_name);
            formData.append('product_price', Product.product_price);
            formData.append('product_detail', Product.product_detail);
            formData.append('product_picture', Product.product_picture);
            const response = await axios.post('http://localhost:4000/create_product', formData);
            console.log('Data sent successfully:', response.data);
            Swal.fire({
                icon: 'success',
                title: 'Success!',
                text: 'Your Product add successfully!',
              });
            setProductData({
                product_name: '',
                product_price: '',
                product_detail: '',
                product_picture: '',
            })
          } catch (error) {
            console.error('Error sending data to server:', error);
          }
    };
      
 
   
  return (
    <div>
        <div className="container-fluid">
            <div className="row">
                <div className='text-center text-success'><h1>Product Dashboard</h1></div>
                <div className="col-sm-4 border border-1 text-center">
                    <ul>
                        <li className='text-light bg-primary mt-2'>Home</li>
                        <li className='text-light bg-primary mt-2'>About</li>
                        <li className='text-light bg-primary mt-2'>Product</li>
                        <li className='text-light bg-primary mt-2'>Servicer</li>
                    </ul>
                </div>
                <div className="col-sm-8">
                    <form onSubmit={handleSubmit}>
                        <input type="text" className='form-control mt-2' name='product_name' value={Product.product_name} placeholder='Enter the Product Name'  onChange={handleChange} />

                        <input type="file"className="form-control mt-2" name="product_picture"onChange={handleChange}/>{Product.product_picture && (<p>Selected file: {Product.product_picture.name}</p>
              )}
                        <input type="Number" className='form-control mt-2' name='product_price' value={Product.product_price} placeholder='Enter the Product Price' onChange={handleChange} />

                        <input type="text" className='form-control mt-2' name='product_detail' value={Product.product_detail} placeholder='Enter the Product Detail' onChange={handleChange} />

                       <button className='btn btn-danger mt-2' name='submit'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Dashboard