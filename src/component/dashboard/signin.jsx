import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const SignIn = () => {
  return (
    <div className="container-fluid position-relative bg-white d-flex p-0">
      {/* Spinner Start */}
      {/* <div
        id="spinner"
        className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
      >
        <div
          className="spinner-border text-primary"
          style={{ width: '3rem', height: '3rem' }}
          role="status"
        >
          <span className="sr-only">Loading...</span>
        </div>
      </div> */}
      {/* Spinner End */}

      {/* Sign In Start */}
      <div className="container-fluid">
        <div
          className="row h-100 align-items-center justify-content-center"
          style={{ minHeight: '100vh' }}
        >
          <div className="col-12 col-sm-8 col-md-6 col-lg-5 col-xl-4">
            <div className="bg-light rounded p-4 p-sm-5 my-4 mx-3">
              <div className="d-flex align-items-center justify-content-between mb-3">
                <a href="index.html" className="">
                  <h3 className="text-primary">
                    <i className="fa fa-hashtag me-2"></i>DASHMIN
                  </h3>
                </a>
                <h3>Sign In</h3>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <label htmlFor="floatingInput">Email address</label>
              </div>
              <div className="form-floating mb-4">
                <input
                  type="password"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                />
                <label htmlFor="floatingPassword">Password</label>
              </div>
              <div className="d-flex align-items-center justify-content-between mb-4">
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label className="form-check-label" htmlFor="exampleCheck1">
                    Check me out
                  </label>
                </div>
                <a href="">Forgot Password</a>
              </div>
              <button type="submit" className="btn btn-primary py-3 w-100 mb-4">
                Sign In
              </button>
              <p className="text-center mb-0">
                Don't have an Account? <a href="">Sign Up</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Sign In End */}
    </div>
  );
};

export default SignIn;
