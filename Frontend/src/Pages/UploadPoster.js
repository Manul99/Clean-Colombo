import React ,{useState}from 'react'
import Adminnav from '../components/Adminnav'
import '../components/pages.css'
//import Imageupload from '../components/Imageupload'
import axios from 'axios';

export default function UploadPoster() {

  const [posterID, setPosterID] = useState('');
  const [image, setImage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  
  const handleSubmit = async(event) =>{
    event.preventDefault();


    const formData = new FormData();
    formData.append('posterID',posterID);
    formData.append('image',image); // Append the image file

    insertPoster(formData);
  };

  const insertPoster =async(posterData) =>{
    try {
     const response = await axios.post('http://localhost:3001/api/posters',posterData,{
      headers:{
        'Content-Type':'multipart/form-data',
      }
     });
     console.log('Poster data inserted:',response.data);
     setSuccessMessage('Poster uploaded succefully');
     setPosterID('');
     setImage('');
     

    } catch (error) {
       console.log('Failed to send data:',error);
    }
 }

 const handleUpdate = async(event)=>{
    event.preventDefault();

    const posterData = {image};
    
    try {
      const response = await axios.put(`http://localhost:3001/api/posters/${posterID}`,posterData);
      console.log('Data updated successuflly',response.data);
      setSuccessMessage('Poster updated!');
      setPosterID('');
      setImage('');
    } catch (error) {
       console.log('Failed to update data');
    }
 }

 const handleDelete = async(event) =>{
    event.preventDefault();

    const posterData = {image};

    try {
        const response = await axios.delete(`http://localhost:3001/api/posters/${posterID}`,posterData);
        console.log('Data delete succefully',response.data);
        setSuccessMessage('Poster data delete successfully');
        setPosterID('');
        setImage('');
    } catch (error) {
        console.log('Failed to delete data');
    }
 }
  


    return (
        <div>
            <Adminnav />
            <div className='captain-account'>
                <h1 className='po-heading1'>Upload Poster</h1>
                <div className='ca-content'><br></br>
                    <div className='ca-info'>
                        <ul>
                            <li className='ca-li1'>When you inserting data including an ID is mandatory.</li>
                            <li className='ca-li2'>If you are updateing make sure to give the ID of the person and do the update part.</li>
                            <li className='ca-li3'>When you want to delete ,give the ID number and click delete button.</li>
                        </ul>
                    </div>
                    <br></br><br></br><br></br>
                    <div className='po-insertdata'>
                        <form>
                            <h2 className='po-heading2'>Poster</h2> <br></br>
                            <div className='ca-stage1'>
                                <h5 style={{ position: 'relative', left: '2%' }}>Poster ID</h5>
                                <input type="text" class="ffname form-control w-25" id="exampleFormControlInput1" placeholder="PO-001" onChange={(e) => setPosterID(e.target.value)} />
                            </div>
                            <div className='po-upload'>
                              <input type='file' accept='image/' onChange={(e) => setImage(e.target.files[0])}/>
                            </div>
                            <br></br>
                            <div className='po-buttons'>
                                <button type="submit" class="ca-submit btn btn-success" onClick={handleSubmit}>Submit</button>
                                <button type="submit" class="ca-update btn btn-success" onClick={handleUpdate}>Update</button>
                                <button type="submit" class="ca-delete btn btn-success" onClick={handleDelete}>Delete</button>
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
        </div>

    )
}
