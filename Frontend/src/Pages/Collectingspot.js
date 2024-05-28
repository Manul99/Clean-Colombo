import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
//import homa from '../Images/homagama.jpg'
import Footer from '../components/Footer';
import axios from 'axios';
export default function Collectingspot() {

  const[garbage, setGarbage] = useState([]);

  useEffect(() => {
    // Fetch reports data from your backend API
    axios.get('http://localhost:3001/api/garbage')
      .then((response) => {
        setGarbage(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <Navbar/>
          <div>
            <h1 className='garbage-heading1'>Check garbage collecting spot from here and kindly</h1>
            <h1 className='garbage-heading2'> dispose of your garbage there</h1>

            {garbage.length > 0 ? (
              garbage.map((garbage) => (
                <div class="garbage card" style={{width:300}}>
                 <img src={garbage.image} class="card-img-top" alt="..."/>
             <div class="card-body">
                 <h5 class="card-title">{garbage.title}</h5>
                 <p class="card-text">{garbage.location}</p>
                 
             </div>
             </div>
              ))
            ) : (
              <p>No reports found.</p>
            )}
          </div> 

           
      <Footer/>
    </div>
  )
}
