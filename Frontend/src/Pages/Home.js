import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import image2 from '../Images/poster1.jpg';
import image3 from '../Images/colo.jpg';
import image4 from '../Images/cmc2.jpg'
import green from '../Images/green.jpg'
import { InView, useInView } from 'react-intersection-observer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import '../components/pages.css'

export default function Home() {
  const[ref,inView] = useInView({
    triggerOnce:true,
    threshold:0.2,
  });
  return (
    <div>
    <Navbar/>
      
    <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img src={image4} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src={image2} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={image3} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
      
     <div ref={ref} className={inView ?'container1 slideUp':'container1'}>
        <h1 className='heading'>Make Colombo Beautiful</h1>

        <table>
          <tr>
            <th>
            <div class="card">
            <img src={image2}class="card-img-top" alt="..."/>
        
             </div>
            </th>
            <th>
            <div class="card">
            <img src={image3}class="card-img-top" alt="..."/>
        
            </div>
            </th>
          </tr>
        </table>
    
      
        </div>

        <br></br>
      
        <div ref={ref} className={InView ?'green slideup':'green'}>
          <h1 className='green-heading'>Join Green Task Force and make our city wonderful</h1><br></br>
        <div class="card mb-3 bg-$green-light" style={{width:800}}>
    <div class="row g-0">
    <div class="col-md-4">
      <img src={green} class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        
        <p class="card-text">If you don’t want to get sick again and again, keep your environment clean.So let's start to clean our city</p>
        <p>Still not a member of  Green task force.<p style={{color:'darkgreen'}}>Go ahead register now !</p></p>
      </div>
    </div>
  </div>
</div>
    
</div>  

    <Footer/>
   </div>
  )
}
