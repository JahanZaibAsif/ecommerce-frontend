import React, { useEffect, useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { useApi } from '../fetch_api/data';
import axios from 'axios';
import swal from 'sweetalert2';
import Navbar from './navbar';

function DashboardContent() {
  const [products, setProducts] = useState([]);

  const { Product } = useApi();

  useEffect(() => {
    setProducts(Product);
  }, [Product]);

  const deleteProduct = async (id) => {
    try {
      await axios.delete(`https://localhost:3000/delete_product/${id}`);
      swal.fire({
        title: 'Success!',
        text: 'Your product was deleted successfully!',
        icon: 'success',
        confirmButtonText: 'OK'
      });
      setProducts(products.filter(product => product._id !== id));
    } catch (error) {
      console.error('Error deleting product:', error);
      swal.fire({
        title: 'Error!',
        text: 'There was an error deleting the product.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    }
  };
  return (
    <>
        <div className="content">

       <Navbar/>
          {/* Sale & Revenue Start */}

      <div className="container-fluid pt-4 px-4">
        <div className="row g-4">
          <div className="col-sm-6 col-xl-3">
            <div className="bg-light rounded d-flex align-items-center justify-content-between p-4">
              <i className="fa fa-chart-line fa-3x text-primary"></i>
              <div className="ms-3">
                <p className="mb-2">Today Sale</p>
                <h6 className="mb-0">$1234</h6>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-xl-3">
            <div className="bg-light rounded d-flex align-items-center justify-content-between p-4">
              <i className="fa fa-chart-bar fa-3x text-primary"></i>
              <div className="ms-3">
                <p className="mb-2">Total Product</p>
                <h6 className="mb-0">{Product && Product.length}</h6>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-xl-3">
            <div className="bg-light rounded d-flex align-items-center justify-content-between p-4">
              <i className="fa fa-chart-area fa-3x text-primary"></i>
              <div className="ms-3">
                <p className="mb-2">Today Revenue</p>
                <h6 className="mb-0">$1234</h6>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-xl-3">
            <div className="bg-light rounded d-flex align-items-center justify-content-between p-4">
              <i className="fa fa-chart-pie fa-3x text-primary"></i>
              <div className="ms-3">
                <p className="mb-2">Total Revenue</p>
                <h6 className="mb-0">$1234</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Sale & Revenue End */}
       {/* Sale & Revenue Start */}
       <div className="container-fluid pt-4 px-4">
                <div className="row g-4">
                    {['Today Sale', 'Total Sale', 'Today Revenue', 'Total Revenue'].map((item, index) => (
                        <div key={index} className="col-sm-6 col-xl-3">
                            <div className="bg-light rounded d-flex align-items-center justify-content-between p-4">
                                <i className={`fa fa-${['chart-line', 'chart-bar', 'chart-area', 'chart-pie'][index]} fa-3x text-primary`}></i>
                                <div className="ms-3">
                                    <p className="mb-2">{item}</p>
                                    <h6 className="mb-0">$1234</h6>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* Sale & Revenue End */}           

           
            </div>
        </>
  )
}

export default DashboardContent