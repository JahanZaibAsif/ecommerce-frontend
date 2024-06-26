import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'jquery-ui/ui/widgets/datepicker';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';
import Sidebar from './sidebar';
import Navbar from './navbar';
import DashboardContent from './DashboardContent';

function mainDashboard() {
  // useEffect (() => {
  //   const spinner = () => {
  //     setTimeout(() => {
  //         if ($('#spinner').length > 0) {
  //             $('#spinner').removeClass('show');
  //         }
  //     }, 1);
  // };
  // spinner();

  // // Back to top button
  // $(window).on('scroll', () => {
  //     if ($(window).scrollTop() > 300) {
  //         $('.back-to-top').fadeIn('slow');
  //     } else {
  //         $('.back-to-top').fadeOut('slow');
  //     }
  // });

  // $('.back-to-top').on('click', () => {
  //     $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
  //     return false;
  // });

  // // Sidebar Toggler
  // $('.sidebar-toggler').on('click', () => {
  //     $('.sidebar, .content').toggleClass('open');
  //     return false;
  // });
  // })
  return (
    <>
     <div className="container-fluid position-relative bg-white d-flex p-0">
      {/* Spinner Start */}
      {/* <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
        <div className="spinner-border text-primary" style={{ width: '3rem', height: '3rem' }} role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div> */}
      {/* Spinner End */}
      <Sidebar/>
      <DashboardContent/>
     

     
        </div>
    </>
  )
}

export default mainDashboard