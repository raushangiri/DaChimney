import React from 'react';
import { Link } from 'react-router-dom';
// import '../../App.css';
import logo from '../img/chimanyLogo-removebg-preview.png';

const Navbar = () => {
  return (
    <>
      <header className="header">
        <div className="header_content d-flex flex-row align-items-center justify-content-start">
          <div className="main_nav">
            <Link to="/" className="navbar-brand p-0">
              <h1 className="text-primary m-0"><i /></h1>
              <img className="img-fluid" src={logo} alt="" style={{ width: "100px", height: "100px" }} />
            </Link>
          </div>
          <div className="ml-auto d-flex flex-row align-items-center justify-content-start">
            <nav className="main_nav">
              <ul className="d-flex flex-row align-items-start justify-content-start">
                <li className="active"><a href="/">Home</a></li>
                <li><a href="/about">About us</a></li>
                {/* <li><Link to="/rooms">Rooms</Link></li> */}
                <li className=" dropdown">
    <a href="#" className=" dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
      Bookings
    </a>
    <ul className="dropdown-menu" style={{backgroundColor:"transparent", border:"none"}} aria-labelledby="navbarDropdown">
      <li><Link to="/restaurants" className="dropdown-item">Book Rooms</Link></li>
      <li><a href="/home_delivery" className="dropdown-item">Book Table</a></li>
      <li><Link to="/home_delivery" className="dropdown-item">Book Conferece Room</Link></li>
      <li><Link to="/home_delivery" className="dropdown-item">Book Meeting Room</Link></li>
    </ul>
  </li>
                <li className=" dropdown">
    <a href="#" className=" dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
      Service
    </a>
    <ul className="dropdown-menu" style={{backgroundColor:"transparent", border:"none"}} aria-labelledby="navbarDropdown">
      <li><Link to="/restaurants" className="dropdown-item">Restaurants</Link></li>
      <li><a href="/homedelivery" className="dropdown-item">Home Delivery</a></li>
      <li><Link to="/home_delivery" className="dropdown-item">Catering Service</Link></li>
      <li><Link to="/home_delivery" className="dropdown-item">Event Management</Link></li>
    </ul>
  </li>
                <li><a href="/gallery">Gallery</a></li>
                <li><a href="/contactus">Contact</a></li>
              </ul>
            </nav>
            <div className="book_button"><Link to="/booking">Book Online</Link></div>
            <div className="header_phone d-flex flex-row align-items-center justify-content-center">
              <img src="images/phone.png" alt="phone" />
              <span>0183-12345678</span>
            </div>

            {/* Hamburger Menu */}
            <div className="hamburger"><i className="fa fa-bars" aria-hidden="true"></i></div>
          </div>
        </div>
      </header>
      <div className="menu trans_400 d-flex flex-column align-items-end justify-content-start">
        <div className="menu_close"><i className="fa fa-times" aria-hidden="true"></i></div>
        <div className="menu_content">
          <nav className="menu_nav text-right">
            <ul>
            <li className="active"><a href="/">Home</a></li>
                <li><Link to="/about">About us</Link></li>
                <li><Link to="/rooms">Rooms</Link></li>
                <li><a href="/gallery">Gallery</a></li>
                <li className="nav-item dropdown">
    <a href="#" className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
      Service
    </a>
    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
      <li><Link to="/restaurants" className="dropdown-item">Restaurants</Link></li>
      <li><Link to="/home_delivery" className="dropdown-item">Home delivery</Link></li>
    </ul>
  </li>
                <li><a href="/contactus">Contact</a></li>
            </ul>
          </nav>
        </div>
        <div className="menu_extra">
          <div className="menu_book text-right"><Link to="/booking">Book online</Link></div>
          <div className="menu_phone d-flex flex-row align-items-center justify-content-center">
            <img src="images/phone-2.png" alt="" />
            <span>0183-12345678</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
