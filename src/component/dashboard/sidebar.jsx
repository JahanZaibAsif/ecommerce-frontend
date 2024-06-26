import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
function Sidebar() {
  return (
    <>
          {/* Sidebar Start */}
      <div className="sidebar pe-4 pb-3">
        <nav className="navbar bg-light navbar-light">
          <a href="index.html" className="navbar-brand mx-4 mb-3">
            <h3 className="text-primary"><i className="fa fa-hashtag me-2"></i>DASHMIN</h3>
          </a>
          <div className="d-flex align-items-center ms-4 mb-4">
            <div className="position-relative">
              <img className="rounded-circle" src="img/user.jpg" alt="" style={{ width: '40px', height: '40px' }} />
              <div className="bg-success rounded-circle border border-2 border-white position-absolute end-0 bottom-0 p-1"></div>
            </div>
            <div className="ms-3">
              <h6 className="mb-0">Jhon Doe</h6>
              <span>Admin</span>
            </div>
          </div>
          <div className="navbar-nav w-100">
            <a href="index.html" className="nav-item nav-link active"><i className="fa fa-tachometer-alt me-2"></i>Dashboard</a>
      
            <a href="form.html" className="nav-item nav-link"><i className="fa fa-keyboard me-2"></i>Total Product</a>
            <a href="table.html" className="nav-item nav-link"><i className="fa fa-table me-2"></i>Total Sale</a>
            <div className="nav-item dropdown">
              <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown"><i className="far fa-file-alt me-2"></i>Pages</a>
              <div className="dropdown-menu bg-transparent border-0">
                <a href="signin.html" className="dropdown-item">Sign In</a>
                <a href="signup.html" className="dropdown-item">Sign Up</a>
                <a href="404.html" className="dropdown-item">404 Error</a>
                <a href="blank.html" className="dropdown-item">Blank Page</a>
              </div>
            </div>
          </div>
        </nav>
      </div>
      {/* Sidebar End */}
      </>
  )
}

export default Sidebar