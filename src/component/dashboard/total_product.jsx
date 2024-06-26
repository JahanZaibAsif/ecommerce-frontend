import React from 'react'
import Sidebar from './sidebar'
import Navbar from './navbar'
import { useApi } from '../fetch_api/data'

function TotalProduct() {
    const { Product } = useApi();

  return (
    <>
<Sidebar/>
     <div className="content">

<Navbar/>  

     {/* Recent Sales Start */}
     <div className="container-fluid pt-4 px-4">
         <div className="bg-light text-center rounded p-4">
             <div className="d-flex align-items-center justify-content-between mb-4">
                 <h6 className="mb-0">Recent Sales</h6>
                 <a href="#">Show All</a>
             </div>
             <div className="table-responsive">
                 <table className="table text-start align-middle table-bordered table-hover mb-0">
                     <thead>
                         <tr className="text-dark">
                             <th scope="col">ID</th>
                             <th scope="col">Product Name</th>
                             <th scope="col">Product Price</th>
                             <th scope="col">Product Picture</th>
                             <th scope="col">Action</th>
                         </tr>
                     </thead>
                     <tbody>
                         {Product && Product.map(value => (
                             <tr >
                                 <td>{value._id}</td>
                                 <td>{value.product_name}</td>
                                 <td>{value.product_price}</td>
                                 <td><img src={value.product_picture} height={100} width={100} alt="" /></td>
                                 <td>
                                   <button className='btn btn-primary m-2'>Edit</button>
                                   <button
                                  className="btn btn-danger m-2">
                                  Delete
                                </button>

                                 </td>
                             </tr>
                         ))}
                     </tbody>
                 </table>
             </div>
         </div>
     </div>
     {/* Recent Sales End */}
     </div>
    </>
  )
}

export default TotalProduct