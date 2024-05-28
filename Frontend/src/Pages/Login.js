import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import '../components/pages.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import { Navigate } from 'react-router-dom';
import axios from 'axios';

export default function Login() {
  const[username, setUsername] = useState('');
  const[password, setPassword] = useState('');
  const[loggedIn, setLoggedIn] = useState(false);

  const handleLogin = async (event) =>{
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/api/members/login',{
        username,
        password,
      });

      if(response.data.token){
        setLoggedIn(true);
      }else{
        alert('Invalid username or password');
      }
    } catch (error) {
      console.log('Login error',error);
    }
  };

  if(loggedIn){
    return <Navigate to='/gtfwelcome'/>;
  }
  return (
    <div>
      <Navbar/>
      <div className='login-content'>
            <div className='login'>
                    <h1 className='heading'>Login</h1>
                    <h3 className='login-heading2'>Welcome to GTF. Please put your login credentials below to start using the app  </h3>
                    <br></br><br></br><br></br>
                <form>
                 <div class=" form mb-3">
                   <label for="exampleFormControlInput1" class="form-label fw-bold">Username</label>
                   <input type="text" class="form-control w-75 bg-secondary" id="exampleFormControlInput1" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
                </div>
                 <div class=" form mb-3">
                    <label for="exampleFormControlInput1" class="pass form-label fw-bold">Password</label>
                    <input type="password" class="form-control w-75 bg-secondary" id="exampleFormControlInput1" placeholder="........." value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <a class="nav-link active link-primary" aria-current="page" href="/forgotpassword">Forgot Password</a>
                <br></br><br></br>
                <button type="submit" class="btn btn-success" onClick={handleLogin}>Login</button>
               
                </form>
                <p className='account'>Don't have an account ? <a class="nav-link1 active link-primary" aria-current="page" href="/register">Register</a></p>
            </div>

      </div>
    </div>
  )
}
