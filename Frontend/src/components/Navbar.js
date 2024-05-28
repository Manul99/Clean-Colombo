import React from 'react'
import logo from '../Images/logo.png'
import './navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
export default function Navbar() {
  return (
    <div>
      <br></br>
     
      <div className='container'>
        <h1 className='heading1'>COLOMBO</h1>
        <img src={logo} className='logo' alt=''/>
        <h1 className='heading2'>MUNICIPAL</h1>
        <h1 className='heading3'>COUNCIL</h1> 
        </div>
        
    <nav class='navbar navbar-expand-lg '>
    <div class="collapse navbar-collapse position-absolute top-50 start-50 translate-middle">
    <div class="container-fluid">
       <center> <ul class="navbar-nav me-5 mb-2 mb-lg-0">
        <li class="nav-item1">
          <a class="nav-link active link-light" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item2">
          <a class="nav-link active link-light" aria-current="page" href="/contact">Contact Us</a>
        </li>
        <li class="nav-item3">
          <a class="nav-link active link-light" aria-current="page" href="/about">About Us</a>
        </li>
        <li class="nav-item5">
          <a class="nav-link active link-light" aria-current="page" href="/collectingspot">Garbage Collecting Spot</a>
        </li>
        <li class="nav-item6 dropdown float-end">
          <a class="nav-link dropdown-toggle link-light" href="www" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Login/Register
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="/login">GTF Member</a></li>
            <li><a class="dropdown-item" href="/stafflogin">Staff</a></li>
            
          </ul>
        </li>
       
        </ul>
        </center>
    </div>
    </div>
    </nav>
    </div>
    


  )
}