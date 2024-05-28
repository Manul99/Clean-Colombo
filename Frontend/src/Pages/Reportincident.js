
import Navbarnew from '../components/Navbarnew'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../components/pages.css'
import { useState } from 'react';
import axios from 'axios';
//import Imageupload from '../components/Imageupload';
export default function Reportincident() {

  const [reportid, setReportid] = useState('');
  const [image, setImage] = useState('');
  const [impact, setImpact] = useState('');
  const [location, setLocation] = useState('');
  const [successMessage, setSuccessMessage] = useState('');



  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('reportid', reportid);
    formData.append('image', image); // Append the image file
    formData.append('impact', impact);
    formData.append('location', location);
  
    insertReport(formData);
    
  };

  const insertReport = async (reportData) =>{
     try {
      const response = await axios.post('http://localhost:3001/api/reports',reportData,{
        headers:{
          'Content-Type': 'multipart/form-data',
        }
      });
    
      console.log('Data inserted succefully',response.data);
      setSuccessMessage('Thank you for submitting');
      setReportid('');
      setImpact('');
      setLocation('');
      setImage('');
     } catch (error) {
       console.log('Failed to insert data',error);
       
     }
  }

  

    //Update Data

    const handleUpdate = async(event) =>{
      event.preventDefault();

      const  reportData ={image,impact,location};

      try {
        const response = await axios.put(`http://localhost:3001/api/reports/${reportid}`,reportData);
        console.log('Data updated successfully',response.data);
        setSuccessMessage('Your report updated!');
        setReportid('');
        setImage('');
        setImpact('');
        setLocation('');
      } catch (error) {
         console.log('Failed to update your data')
      }
    }

    //Delete data
    const handleDelete = async(event) =>{
       event.preventDefault();

       const reportData ={image,impact,location};

       try {
        const response = await axios.delete(`http://localhost:3001/api/reports/${reportid}`,reportData);
        console.log('Data deleted succefully',response.data);
        setSuccessMessage('Your report deleted!');
        setReportid('');
        setImage('');
        setImpact('');
        setLocation('');
       } catch (error) {
         console.log('Failed to delete data');
       }
    }

  return (
    <div>
      <Navbarnew/>
      <div className='report-content'>
            <div className='incident'>
                <h4 className='incident-heading'>Submit your report</h4>
                <br></br><br></br>
                <form>
                  <h6 className='imageID'>
                     Report ID:
                  <input
      type="text"
      class="image form-control w-25"
      id="exampleFormControlInput1"
      placeholder="RP01"
      value={reportid}
      onChange={(e) => setReportid(e.target.value)} // Use onChange instead of onClick
    />
  </h6>

  <div className='imageupload'>
    <h6>Insert the image of the incident:</h6>
   <input type='file' accept='image/*' onChange={(e) => setImage(e.target.files[0])}></input>
  </div> <br></br>
 
  
  <h6 className='impact'>Explain the impact:</h6>
  <textarea
    cols='60'
    rows='5'
    className='explain'
    id='explain'
    value={impact}
    onChange={(e) => setImpact(e.target.value)} // Use onChange instead of onClick
  ></textarea><br></br><br></br>

  <h6 className='setLocation'>Set the location:</h6>
  <input
    type="text"
    class="report-location form-control w-50"
    id="exampleFormControlInput1"
    placeholder="65/dutugamunu street, dehiwala"
    value={location}
    onChange={(e) => setLocation(e.target.value)} // Use onChange instead of onClick
  /><br></br><br></br>



 
  <div className='buttons'>
    <button type="submit" class="submit btn btn-success" onClick={handleSubmit}>Submit</button>
    <button type="submit" class="update btn btn-success" onClick={handleUpdate}>Update</button>
    <button type="submit" class="delete btn btn-success" onClick={handleDelete}>Delete</button>
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
