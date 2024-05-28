import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../components/pages.css'
import { Navigate } from 'react-router-dom';
export default function Stafflogin() {

  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');
  const [error, seterror] = useState('');
  const [captainloggIn, setcaptainloggedin] = useState('');
  const [adminloggIn, setadminloggedin] = useState('');
  const [collectorsloggIn, setcollectorsloggedin] = useState('');

  //Checking username and password are correct or not
  const handleLogin = () => {
    if (username === 'captain' && password === 'captain123') {
      setcaptainloggedin(true);
    }

    else if (username === 'admin' && password === 'admin123') {
      setadminloggedin(true);
    }

    else if (username === 'collectors' && password === 'collectors123') {
      setcollectorsloggedin(true);
    }

    else {
      seterror('Invalid username or password');
    }
  }
  
//If the username and passwords are correct user will navigate to pages
  if (captainloggIn) {
    return <Navigate to='/captain' />
  }

  else if (adminloggIn) {
    return <Navigate to='/captainaccount' />
  }

  else if (collectorsloggIn) {
    return <Navigate to='/collectors' />
  }

  return (
    <div>
      <Navbar />
      <div className='login-content'>
        <div className='login'>
          <br></br>
          <h1 className='staff-heading'> Staff Login</h1>

          <br></br><br></br>
          <form>
            <div class=" form mb-3">
              <label for="exampleFormControlInput1" class="form-label fw-bold">Username</label>
              <input type="text" class="form-control w-75 bg-secondary" id="exampleFormControlInput1" placeholder="Username" value={username} onChange={(e) => setusername(e.target.value)} />
            </div>
            <div class=" form mb-3">
              <label for="exampleFormControlInput1" class="pass form-label fw-bold">Password</label>
              <input type="password" class="form-control w-75 bg-secondary" id="exampleFormControlInput1" placeholder="........." value={password} onChange={(e) => setpassword(e.target.value)} />
            </div>

            <br></br><br></br>
            <button type="submit" class="btn btn-success" onClick={handleLogin}>Login</button>
            {error && <p>{error}</p>}
          </form>


        </div>

      </div>
    </div>
  )
}
