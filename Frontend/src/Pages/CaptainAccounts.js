import React, { useState } from 'react'
import Adminnav from '../components/Adminnav'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../components/pages.css'
import axios from 'axios';
export default function CaptainAccounts() {

    const[captainID, setcaptainID]= useState('');
    const[captainName, setcaptainName] = useState('');
    const[nic, setnic] = useState('');
    const[address,setAddress] = useState('');
    const[email, setEmail] = useState('');
    const[dob,setdob] = useState('');
    const[mobile, setmobile] = useState('');
    const[successMessage, setSuccessMessage] = useState('');

    const handleSubmit =(event) =>{
        event.preventDefault();

        const captainData ={
            captainID: captainID,
            captainName: captainName,
            nic: nic,
            address: address,
            email: email,
            dob: dob,
            mobile:mobile,
        };

        insertCaptain(captainData);
    }
        //Insert data to database
       const insertCaptain =async(captainData) =>{
           try {
            const response = await axios.post('http://localhost:3001/api/captain',captainData);
            console.log('captain data inserted:',response.data);
            setSuccessMessage('Data inserted successfully!');
            setcaptainID('');
            setcaptainName('');
            setnic('');
            setAddress('');
            setEmail('');
            setdob('');
            setmobile('');

           } catch (error) {
              console.log('Failed to send data:',error);
           }
        }
    
    const handleUpdate = async(event) =>{
        event.preventDefault();
        const captainData ={captainName,nic,address,email,dob,mobile};

        try {
            const response = await axios.put(`http://localhost:3001/api/captain/${captainID}`,captainData);
            console.log('captain data updated succesfully',response.data);
            setSuccessMessage('Data updated successfully');
            setcaptainName('');
            setnic('');
            setAddress('');
            setEmail('');
            setdob('');
            setmobile('');
        } catch (error) {
            console.log('Failed to update data',error);
        }
    }

    const handleDelete = async(event) =>{
        event.preventDefault();
        
        try {
            const response = await axios.delete(`http://localhost:3001/api/captain/${captainID}`);
            console.log('Captains data deleted succesfullt!',response.data);
            successMessage('Captains data deleted succesfully!');
            setcaptainName('');
            setnic('');
            setAddress('');
            setEmail('');
            setdob('');
            setmobile('');
        } catch (error) {
            console.error('Failed to delete to captains data');
        }
    }
    

    return (
        <div>
            <Adminnav />
            <div className='captain-account'>
                <h1 className='ca-heading1'>Captain account handling</h1>
                <div className='ca-content'><br></br>
                    <div className='ca-info'>
                        <ul>
                            <li className='ca-li1'>When you inserting data including an ID is mandatory.</li>
                            <li className='ca-li2'>If you are updateing make sure to give the ID of the person and do the update part.</li>
                            <li className='ca-li3'>When you want to delete ,give the ID number and click delete button.</li>
                        </ul>
                    </div>
                    <br></br><br></br><br></br>
                    <div className='ca-insertdata'>
                        <form>
                            <h2 className='ca-heading2'>Captain form</h2> <br></br>
                            <div className='ca-stage1'>
                                <h5 style={{ position: 'relative', left: '2%' }}>Captain ID</h5>
                                <input type="text" class="ffname form-control w-25" id="exampleFormControlInput1" placeholder="CA-001" value={captainID} onChange={(e) => setcaptainID(e.target.value)}/>
                            </div>
                            <div className='ca-stage2'>
                                <h5 style={{ position: 'relative', left: '2%' }}>Captain Name</h5>
                                <input type="text" class="ffname form-control w-25" id="exampleFormControlInput1" placeholder="James Athur" value={captainName} onChange={(e) => setcaptainName(e.target.value)} />
                            </div>
                            <div className='ca-stage1'>
                                <h5 style={{ position: 'relative', left: '2%' }}>NIC</h5>
                                <input type="text" class="ffname form-control w-25" id="exampleFormControlInput1" placeholder="990658745V" value={nic} onChange={(e) => setnic(e.target.value)}/>
                            </div>
                            <div className='ca-stage2'>
                                <h5 style={{ position: 'relative', left: '2%' }}>Address</h5>
                                <input type="text" class="ffname form-control w-25" id="exampleFormControlInput1" placeholder="65/2 dutugamunu street, dehiwala" value={address} onChange={(e) => setAddress(e.target.value)}/>
                            </div>
                            <div className='ca-stage1'>
                                <h5 style={{ position: 'relative', left: '2%' }}>Email</h5>
                                <input type="text" class="ffname form-control w-25" id="exampleFormControlInput1" placeholder="aaa@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)}/>
                            </div>
                            <div className='ca-stage2'>
                                <h5 style={{ position: 'relative', left: '2%' }}>Date Of birth</h5>
                                <input type="date" class="ffname form-control w-25" id="exampleFormControlInput1" placeholder="dd/mm/yy" value={dob} onChange={(e) => setdob(e.target.value)}/>
                            </div>
                            <div className='ca-stage3'>
                                <h5 style={{ position: 'relative', left: '2%' }}>Mobile Number</h5>
                                <input type="text" class="ffname form-control w-25" id="exampleFormControlInput1" placeholder="+94-*********" value={mobile} onChange={(e) => setmobile(e.target.value)}/>
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
