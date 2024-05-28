import React from 'react'
import Navbarnew from '../components/Navbarnew'
import vector from '../Images/vector.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
export default function GTFwelcome() {
  return (
    <div>
      <Navbarnew/>
      <div className='welcome'>
            <div className='gtf-content1'>
                <h1 className='gtf-heading1'>WELCOME TO OUR GTF FAMILY</h1>
            </div>
            <div className='gtf-content2'>
                <img src={vector} className='gtf-image' alt=''/>
                <h4 className='gtf-heading2'>You now have the ability to take action against garbage left on the street (thrown away) or dumped anywhere. </h4>
            </div>
            <div className='gtf-content3'>
                <h4 className='gtf-heading3'>This is one of your efforts to save the environment. So, contribute as much as you can.</h4>
            </div>
            <br></br>
            <div className='instructions'>
                <h4 className='gtf-heading4'>FOLLOW THESE INSTRUCTIONS:</h4>
                <ul className='gtf-list'>
                    <li><h6>You can take picture(s) of thrown away garbage</h6></li>
                    <li><h6>Explain impact such as attracting wildlife, terrible smell etc.....</h6></li>
                    <li><h6>Set the location</h6></li>
                    <li><h6>Report the incident</h6></li>
                    <li><h6>You can input data (including images)</h6></li>
                    <li><h6>Also, you can delete & update your own incident</h6></li>
                </ul>
                <a href="/reportincident" class="inst btn btn-primary btn-success" tabindex="-1" role="button" aria-disabled="true">Next</a>
            </div>
      </div>
    </div>
  )
}




  