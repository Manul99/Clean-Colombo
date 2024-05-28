import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import axios from 'axios';

export default function ForgotPassword() {

  const [gtfID, setGtfID] = useState('');
  const [password,setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async(event) => {
      event.preventDefault();

      if(password !== confirmPassword){
        setConfirmPassword(false);
        return
      }

      setConfirmPassword(true);

      const forgotData = {
        password:password,
      };

      
        try {
          const response = await axios.put(`http://localhost:3001/api/members/${gtfID}`,forgotData);
          console.log('Password changed',response.data);
          setSuccessMessage('Password Changed!')
          setGtfID('');
          setPassword('');
          setConfirmPassword('');
        } catch (error) {
          console.log('Failed to change password');
          
        }
    
  }

  

  
  return (
    <div>
      <Navbar/>
      <div className='forgot-content'>
         <div className='password-content'>
            <h1 className='forgot-heading'>Forgot your password!</h1>
            <br></br><br></br>
            <form>
            <div class="forgot-ID form mb-3">
                   <label for="exampleFormControlInput1" class="form-label fw-bold">Enter your email</label>
                   <input type="text" class="forgot-input form-control w-25 bg-secondary" id="exampleFormControlInput1" placeholder="Email" value={gtfID} onChange={(e) =>setGtfID(e.target.value)} />
            </div>
            <div class="forgot-new form mb-3">
                   <label for="exampleFormControlInput1" class="form-label fw-bold">Enter new password</label>
                   <input type="text" class="forgot-input form-control w-25 bg-secondary" id="exampleFormControlInput1" placeholder="New password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <div class="forgot-confirm form mb-3">
                   <label for="exampleFormControlInput1" class="form-label fw-bold">Confirm password</label>
                   <input type="text" class="forgot-input form-control w-25 bg-secondary" id="exampleFormControlInput1" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
            </div>

            <button type="submit" class="forgot-submit btn btn-success" onClick={handleSubmit}>Submit</button>
            <button type="reset" class="forgot-cancel btn btn-danger">Cancel</button>
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
