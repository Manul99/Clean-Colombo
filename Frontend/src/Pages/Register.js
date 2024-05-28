import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import '../components/pages.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import axios from 'axios';
export default function Register() {
  const[fname, setFname] = useState('');
  const[lname, setLname] = useState('');
  const[mobile, setMobile] = useState('');
  const[username, setUsername] = useState('');
  const[email, setEmail] = useState('');
  const[password, setPassword] = useState('');
  const[confirmPassword, setConfirmPassword] = useState('');
  const[successMessage , setSuccessMessage] = useState('');
  const[passwordsMatch, setPasswordMatch] = useState('');


  const handleRegister = (event) => {
      event.preventDefault();

      if(password !== confirmPassword){
        setPasswordMatch(false);
        return;
      }

      setPasswordMatch(true);

      const memberData = {
         fname:fname,
         lname:lname,
         mobile:mobile,
         username:username,
         email:email,
         password:password,
      };
      registerMember(memberData);
  }

  const registerMember = async(memberData) =>{
     try {
      const response = await axios.post('http://localhost:3001/api/members',memberData);
      console.log('Data insterted succeffully',response.data);
      setSuccessMessage('Thank you for register with us!');
      setFname('');
      setLname('');
      setMobile('');
      setUsername('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
     } catch (error) {
      console.log('Failed to insert data',error);
     }
  }

  return (
    <div>
      <Navbar/>
        <div className='register-content'>
            <div className='register'>
                <h1 className='register-heading1'>Become a member</h1>
                <form>
                  <div className='stage1'>
                        <h5 className='fname'>First Name</h5>
                        <h5 className='stage-mail'>Email</h5>
                        <input type="text" class="ffname form-control w-75 bg-secondary" id="exampleFormControlInput1" placeholder="First Name" value={fname}  onChange={(e) => setFname(e.target.value)}/>
                        <input type="email" class="ffmail form-control w-75 bg-secondary" id="exampleFormControlInput1" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)}/>
                  </div>
                  <div className='stage2'>
                        <h5 className='fname'>Last Name</h5>
                        <h5 className='stage-mail'>Password</h5>
                        <input type="text" class="ffname form-control w-75 bg-secondary" id="exampleFormControlInput1" placeholder="Last Name" value={lname} onChange={(e) => setLname(e.target.value)}/>
                        <input type="password" class="ffmail form-control w-75 bg-secondary" id="exampleFormControlInput1" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                  </div>
                  <div className='stage3'>
                        <h5 className='fname'>Mobile Number</h5>
                        <h5 className='stage-mail'>Confirm Password</h5>
                        <input type="text" class="ffname form-control w-75 bg-secondary" id="exampleFormControlInput1" placeholder="+94*********" value={mobile} onChange={(e) => setMobile(e.target.value)}/>
                        <input type="password" class="ffmail form-control w-75 bg-secondary" id="exampleFormControlInput1" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
                      
                  </div>
                  {!passwordsMatch && (
                <small className="confirm text-danger">Passwords do not match.</small> 
              )}
                  <div className='stage4'>
                        <h5 className='fname'>Username</h5>
                        <input type="username" class="uname form-control  bg-secondary" id="exampleFormControlInput1" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
                  </div>
                  
                  
                  <div class="register-submit d-grid ">
                    <button class="sub btn btn-success" type="submit" onClick={handleRegister}>Register</button>
                    <button class="cancel btn btn-danger" type="reset">Cancel</button>
                  </div>
                </form>
                
          
                {successMessage && 
                            <div class="alert alert-success alert-dismissible fade show" role="alert">
                             {successMessage}
                             <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>}
            </div>
        </div>
    </div>
  )
}
