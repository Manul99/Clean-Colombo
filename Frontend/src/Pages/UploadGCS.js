import React, { useState } from 'react'
import Adminnav from '../components/Adminnav'
//import Imageupload from '../components/Imageupload'
import '../components/pages.css'
import axios from 'axios';
export default function UploadGCS() {
    const [titleid, setTiltid] = useState('');
    const [title, setTitle] = useState('');
    const[image, setImage] = useState('');
    const[location, setLocation] = useState('');
    const[successMessage, setSuccessMessage] = useState('');

    const handleSubmit = async(event) =>{
        event.preventDefault();

        const formData = new FormData();
        formData.append('titleid',titleid);
        formData.append('title',title);
        formData.append('image',image);
        formData.append('location',location);

        insertGarbage(formData);
    }

    const insertGarbage = async(garbageData) =>{
        try {
            const response = await axios.post('http://localhost:3001/api/garbage',garbageData,{
                headers:{
                    'Content-Type':'multipart/form-data',
                }
            });
            console.log('Data insert succesfully',response.data);
            setSuccessMessage('Data inserted succefully');
            setTiltid('');
            setTitle('');
            setImage('');
            setLocation('');

        } catch (error) {
            console.log('Fail to insert data');
        }
    } 

    const handleUpdate = async(event) =>{
        event.preventDefault();

        const garbageData = {title,image,location}
        try {
          const response = await axios.put(`http://localhost:3001/api/garbage/${titleid}`,garbageData);
          console.log('Data update succefully',response.data);
          setSuccessMessage('Data update!');
          setTiltid('');
          setTitle('');
          setImage('');
          setLocation('');
        } catch (error) {
            console.log('Fail to update to data');
        }
    }

    const handleDelete = async(event) =>{
        event.preventDefault();

        const garbageData = {title,image,location}

        try {
            const response = await axios.delete(`http://localhost:3001/api/garbage/${titleid}`,garbageData)
            console.log('Data delete successfully',response.data);
            setSuccessMessage('Data delete successfully');
            setTiltid('');
            setTitle('');
            setImage('');
            setLocation('');
        } catch (error) {
            
        }
    }
    return (
        <div>
            <Adminnav />
            <div className='captain-account'>
                <h1 className='gc-heading1'>Upoload garbage collecting spot</h1>
                <div className='ca-content'><br></br>
                    <div className='ca-info'>
                        <ul>
                            <li className='ca-li1'>When you inserting data including an ID is mandatory.</li>
                            <li className='ca-li2'>If you are updateing make sure to give the ID of the person and do the update part.</li>
                            <li className='ca-li3'>When you want to delete ,give the ID number and click delete button.</li>
                        </ul>
                    </div>
                    <br></br><br></br><br></br>
                    <div className='gc-insertdata'>
                        <form>
                            <h2 className='gc-heading2'>Garbage collecting spot form</h2> <br></br>
                            <div className='ca-stage1'>
                                <h5 style={{ position: 'relative', left: '2%' }}>Title ID</h5>
                                <input type="text" class="ffname form-control w-25" id="exampleFormControlInput1" placeholder="CA-001" value={titleid} onChange={(e) => setTiltid(e.target.value)}/>
                            </div>
                            <div className='ca-stage2'>
                                <h5 style={{ position: 'relative', left: '2%' }}>Title</h5>
                                <input type="text" class="ffname form-control w-25" id="exampleFormControlInput1" placeholder="Near homagama" value={title} onChange={(e) => setTitle(e.target.value)}/>
                            </div>
                            <div className='ca-stage1'>
                               <input type='file' accept='image/' onChange={(e) => setImage(e.target.files[0])}></input>
                            </div>
                            <div className='ca-stage2'>
                                <h5 style={{ position: 'relative', left: '2%' }}>Location</h5>
                                <input type="text" class="ffname form-control w-25" id="exampleFormControlInput1" placeholder="65/2 dutugamunu street, dehiwala" value={location} onChange={(e) => setLocation(e.target.value)} />
                            </div>

                            <br></br>
                            <div className='ca-buttons'>
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
