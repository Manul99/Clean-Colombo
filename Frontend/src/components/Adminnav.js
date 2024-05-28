import React from 'react'
import logo from '../Images/logo.png'
import './navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function Adminnav() {
    return (
        <div>
            <div>
                <br></br>

                <div className='container'>
                    <h1 className='heading1'>COLOMBO</h1>
                    <img src={logo} className='logo' alt='' />
                    <h1 className='heading2'>MUNICIPAL</h1>
                    <h1 className='heading3'>COUNCIL</h1>
                </div>

                <nav class='navbar navbar-expand-lg '>
                    <div class="collapse navbar-collapse position-absolute top-50 start-50 translate-middle">
                        <div class="container-fluid">
                            <center> <ul class="navbar-nav me-5 mb-2 mb-lg-0">
                                <li class="nav-item1">
                                    <a class="nav-link active link-light" aria-current="page" href="/captainaccount">Captain accounts</a>
                                </li>
                                <li class="nav-item2">
                                    <a class="nav-link active link-light" aria-current="page" href="/staffaccount">Staff accounts</a>
                                </li>
                                <li class="nav-item3">
                                    <a class="nav-link active link-light" aria-current="page" href="/uploadposter">Upload Poster</a>
                                </li>
                                <li class="nav-item5">
                                    <a class="nav-link active link-light" aria-current="page" href="/uploadGCS">Garbage collecting spot</a>
                                </li>
                                <li class="nav-item6">
                                    <a class="nav-link active link-light" aria-current="page" href="/">Log out</a>
                                </li>


                            </ul>
                            </center>
                        </div>
                    </div>
                </nav>
            </div>

        </div>
    )
}
