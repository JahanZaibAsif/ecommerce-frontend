
import React from 'react'
import { useEffect } from 'react'
import $ from 'jquery';
import 'owl.carousel';
import 'slick-carousel';
function Header() {
useEffect(() => {
    const setup = () => {
                "use strict";
      
        $(function () {
          $("#tabs").tabs();
        });
      
        $("#preloader").animate({
          'opacity': '0'
        }, 600, function () {
          setTimeout(function () {
            $("#preloader").css("visibility", "hidden").fadeOut();
          }, 300);
        });
      
        $(window).scroll(function () {
          var scroll = $(window).scrollTop();
          var box = $('.header-text').height();
          var header = $('header').height();
      
          if (scroll >= box - header) {
            $("header").addClass("background-header");
          } else {
            $("header").removeClass("background-header");
          }
        });
      
        if ($('.owl-clients').length) {
          $('.owl-clients').owlCarousel({
            loop: true,
            nav: false,
            dots: true,
            items: 1,
            margin: 30,
            autoplay: false,
            smartSpeed: 700,
            autoplayTimeout: 6000,
            responsive: {
              0: {
                items: 1,
                margin: 0
              },
              460: {
                items: 1,
                margin: 0
              },
              576: {
                items: 3,
                margin: 20
              },
              992: {
                items: 5,
                margin: 30
              }
            }
          });
        }
      
        if ($('.owl-testimonials').length) {
          $('.owl-testimonials').owlCarousel({
            loop: true,
            nav: false,
            dots: true,
            items: 1,
            margin: 30,
            autoplay: false,
            smartSpeed: 700,
            autoplayTimeout: 6000,
            responsive: {
              0: {
                items: 1,
                margin: 0
              },
              460: {
                items: 1,
                margin: 0
              },
              576: {
                items: 2,
                margin: 20
              },
              992: {
                items: 2,
                margin: 30
              }
            }
          });
        }
      
        if ($('.owl-banner').length) {
          $('.owl-banner').owlCarousel({
            loop: true,
            nav: false,
            dots: true,
            items: 1,
            margin: 0,
            autoplay: false,
            smartSpeed: 700,
            autoplayTimeout: 6000,
            responsive: {
              0: {
                items: 1,
                margin: 0
              },
              460: {
                items: 1,
                margin: 0
              },
              576: {
                items: 1,
                margin: 20
              },
              992: {
                items: 1,
                margin: 30
              }
            }
          });
        }
      
        $(".Modern-Slider").slick({
          autoplay: true,
          autoplaySpeed: 10000,
          speed: 600,
          slidesToShow: 1,
          slidesToScroll: 1,
          pauseOnHover: false,
          dots: true,
          pauseOnDotsHover: true,
          cssEase: 'linear',
          draggable: false,
          prevArrow: '<button class="PrevArrow"></button>',
          nextArrow: '<button class="NextArrow"></button>',
        });
      
        $('.filters ul li').click(function () {
          $('.filters ul li').removeClass('active');
          $(this).addClass('active');
      
          var data = $(this).attr('data-filter');
          $grid.isotope({
            filter: data
          });
        });
      
        var $grid = $(".grid").isotope({
          itemSelector: ".all",
          percentPosition: true,
          masonry: {
            columnWidth: ".all"
          }
        });
      
        $('.accordion > li:eq(0) a').addClass('active').next().slideDown();
      
        $('.accordion a').click(function (j) {
          var dropDown = $(this).closest('li').find('.content');
      
          $(this).closest('.accordion').find('.content').not(dropDown).slideUp();
      
          if ($(this).hasClass('active')) {
            $(this).removeClass('active');
          } else {
            $(this).closest('.accordion').find('a.active').removeClass('active');
            $(this).addClass('active');
          }
      
          dropDown.stop(false, true).slideToggle();
      
          j.preventDefault();
        });
       
      };
    
}, [])

  return (
    <div>
  
    <div id="preloader">
        <div className="jumper">
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>  
    {/* <!-- ***** Preloader End ***** --> */}

    {/* <!-- Header --> */}
    <header className="">
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand" href="index.html"><h2>Sixteen <em>Clothing</em></h2></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link" href="index.html">Home
                  <span className="sr-only">(current)</span>
                </a>
              </li> 
              <li className="nav-item">
                <a className="nav-link" href="products.html">Our Products</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="about.html">About Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="contact.html">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
</div>
  )
}

export default Header