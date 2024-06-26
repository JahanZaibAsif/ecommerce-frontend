import React from 'react'
import Sidebar from './sidebar'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Navbar from './navbar'

function AddProduct() {
  return (
    <>
    <Sidebar/>
    <Navbar/>
    <div className="container">
          <div className="row">
          <form>
  <div className="row">
    <div className="col">
      <input type="text" className="form-control" placeholder="First name"/>
    </div>
    <div class="col">
      <input type="text" className="form-control" placeholder="Last name"/>
    </div>
  </div>
</form>
          </div>
        </div>
    </>
  )
}

export default AddProduct