import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import '../components/pages.css'
import Footer from '../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import { useInView } from 'react-intersection-observer'
import axios from 'axios'
export default function Contact() {

    const[ref ,inview ] = useInView({
        triggerOnce:true,
        threshold:0.2,
    });

    const[name, setName] = useState('');
    const[email,setEmail] = useState('');
    const[subject, setSubject] = useState('');
    const[message,setMessage] = useState('');
    const[successMessage, setSuccessmessage] = useState('');

    const handleSubmit = (event) =>{
        event.preventDefault();

        const contactusData = {
            name:name,
            email:email,
            subject:subject,
            message:message,
        }

        insertData(contactusData);
    }

    const insertData = async(contactusData) =>{
        try {
            const response = await axios.post('http://localhost:3001/api/contactus',contactusData);
            console.log('Data inserted successfully', response.data);
            setSuccessmessage('Thank you! We will give the answer to your question as soon as possible');
            setName('');
            setEmail('');
            setSubject('');
            setMessage('');
        } catch (error) {
            console.log('Failed to insert data');
        }
    }


  return (
    <div>
      <Navbar/>
      <div className='question'>
            <h1 className='got'>Got a question?</h1>
            <h1 className='share'>Share your challenge, and together, let's discover the perfect solution for you!</h1>
      </div>
        <div className='contact'>
                <h1 className='contact-heading'>Contact Us</h1>
                <div className='line'></div>
                <table className='contact-table'>
                    
                    <tr>
                        <th><FontAwesomeIcon icon={faEnvelope} size='lg' color='red'/></th>
                        <th><FontAwesomeIcon icon={faMapMarkerAlt} size='lg' color='green'/></th>
                        <th><FontAwesomeIcon icon={faPhone} size='lg'/></th>
                    </tr>
                 
                   
                </table>
                <h3 className='email'>cmc@ac.lk</h3>
                <h3 className='location'>Town hall</h3>
                <h3 className='location1'> Colombo 07</h3>
                <h3 className='phone'>0112323232</h3>

                <div className='information'>
                    <form>
                        <div className='name'>
                            <h4 className='info-head'>Name<input type='text' size={5} className='inputs'value={name} onChange={(e) => setName(e.target.value)}></input></h4>
                            
                        </div>
                        <div className='info-email'>
                            <h4 className='info-head'>Email<input type='email' size={5} className='inputs' value={email} onChange={(e) => setEmail(e.target.value)}></input></h4>
                            
                        </div>
                        <div className='subject'>
                            <h4 className='info-head'>Subject<input type='text' size={5} className='inputs' value={subject} onChange={(e) => setSubject(e.target.value)}></input></h4>
                            
                        </div>
                        <div className='message'>
                            <h4 className='info-head'>Message<textarea rows="5" cols="30" className='inputs' value={message} onChange={(e) => setMessage(e.target.value)}></textarea></h4>
                            
                        </div>
                        <div className='next'>
                                <button type="submit" class="btn btn-success btn-lg" onClick={handleSubmit}>Send</button>
                            
                        </div>

                    </form>
                    {successMessage && 
                            <div class="alert alert-success alert-dismissible fade show" role="alert">
                             {successMessage}
                             <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>}
                </div>
               


        </div>
        
        <h1 ref={ref} className={inview ?'other slideUp':'other'}>Other Departments</h1>
        <div ref={ref }className={inview ?'departments slideUp':'departments'}>
        <div class="d-flex justify-content-center">
        <div class="card text-white bg-success mb-3" style={{width:300}}>
            <div class="card-header">Front Desk</div>
                <div class="card-body">
                   <FontAwesomeIcon icon={faPhone}/> <h5 class="number">011-2811475</h5>
                    <FontAwesomeIcon icon={faEnvelope}/><h5 class="mail">frontcmc@ac.lk</h5>
                    
                 </div>
        </div>
        <div class="card text-white bg-success mb-3" style={{width:300}}>
            <div class="card-header">Administration</div>
                <div class="card-body">
                <FontAwesomeIcon icon={faPhone}/> <h5 class="number">011-2851545</h5>
                <FontAwesomeIcon icon={faEnvelope}/><h5 class="mail">administrationcmc@ac.lk</h5>
                 </div>
        </div>
        <div class="card text-white bg-success mb-3" style={{width:300}}>
            <div class="card-header">Central Accounts & IT</div>
                <div class="card-body">
                <FontAwesomeIcon icon={faPhone}/> <h5 class="number">011-4874205</h5>
                <FontAwesomeIcon icon={faEnvelope}/><h5 class="mail">accountITcmc@ac.lk</h5>
                 </div>
        </div>
        </div>
        </div>
        <Footer/>
    </div>
  )
}
