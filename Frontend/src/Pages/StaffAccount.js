import React, { useState } from 'react'
import Adminnav from '../components/Adminnav'
import '../components/pages.css'
import axios from 'axios';
export default function StaffAccount() {

    const[empID, setEmpID] = useState('');
    const[empName, setEmpname] = useState('');
    const[nic , setNic] = useState('');
    const[address, setAddress] = useState('');
    const[email , setEmail] = useState('');
    const[dob, setDob] = useState('');
    const[mobile, setMobile] = useState('');
    const[successMessage, setSuccessMessage] = useState('');

    const handleSubmit = (event) =>{
        event.preventDefault();

        const staffData = {
            empID:empID,
            empName:empName,
            nic:nic,
            address:address,
            email:email,
            dob:dob,
            mobile:mobile,

        }
        insertStaff(staffData);
    }

    const insertStaff = async(staffData) =>{
        try {
            const response = await axios.post('http://localhost:3001/api/staff',staffData);
            console.log('Data inserted succefully',response.data);
            setSuccessMessage('Data added succefully!');
            setEmpID('');
            setEmpname('');
            setNic('');
            setAddress('');
            setEmail('');
            setDob('');
            setMobile('');
        } catch (error) {
            console.log('Failed to insert data',error);
        }
    }

    const handleUpdate = async(event) =>{
        event.preventDefault();
        const staffData ={empName,nic,address,email,dob,mobile};

        try {
            const response = await axios.put(`http://localhost:3001/api/staff/${empID}`,staffData);
            console.log('Data updated successfully',response.data);
            setSuccessMessage('Data updated successfully');
            setEmpID('');
            setEmpname('');
            setNic('');
            setAddress('');
            setEmail('');
            setDob('');
            setMobile('');
        } catch (error) {
            console.log('Failed to update data');
        }
    }

    const handleDelete = async(event) =>{
        event.preventDefault();

        try {
            const response = await axios.delete(`http://localhost:3001/api/staff/${empID}`);
            console.log('Data deleted successfully',response.data);
            setSuccessMessage('Data deleted successfully');
            setEmpID('');
            setEmpname('');
            setNic('');
            setAddress('');
            setEmail('');
            setDob('');
            setMobile(''); 
        } catch (error) {
            console.log('Failed to delete data');
        }
    }


    return (
        <div>
            <Adminnav />
            <div className='captain-account'>
                <h1 className='ca-heading1'>Staff account handling</h1>
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
                            <h2 className='ep-heading2'>Staff form</h2> <br></br>
                            <div className='ca-stage1'>
                                <h5 style={{ position: 'relative', left: '2%' }}>Employee ID</h5>
                                <input type="text" class="ffname form-control w-25" id="exampleFormControlInput1" placeholder="EP-001" value={empID} onChange={(e) => setEmpID(e.target.value)} />
                            </div>
                            <div className='ca-stage2'>
                                <h5 style={{ position: 'relative', left: '2%' }}>Employee Name</h5>
                                <input type="text" class="ffname form-control w-25" id="exampleFormControlInput1" placeholder="James Athur" value={empName} onChange={(e) => setEmpname(e.target.value)}/>
                            </div>
                            <div className='ca-stage1'>
                                <h5 style={{ position: 'relative', left: '2%' }}>NIC</h5>
                                <input type="text" class="ffname form-control w-25" id="exampleFormControlInput1" placeholder="990658745V" value={nic} onChange={(e) => setNic(e.target.value)}/>
                            </div>
                            <div className='ca-stage2'>
                                <h5 style={{ position: 'relative', left: '2%' }}>Address</h5>
                                <input type="text" class="ffname form-control w-25" id="exampleFormControlInput1" placeholder="65/2 dutugamunu street, dehiwala"value={address} onChange={(e) => setAddress(e.target.value)} />
                            </div>
                            <div className='ca-stage1'>
                                <h5 style={{ position: 'relative', left: '2%' }}>Email</h5>
                                <input type="text" class="ffname form-control w-25" id="exampleFormControlInput1" placeholder="aaa@gmail.com"value={email} onChange={(e) => setEmail(e.target.value)}/>
                            </div>
                            <div className='ca-stage2'>
                                <h5 style={{ position: 'relative', left: '2%' }}>Date Of birth</h5>
                                <input type="date" class="ffname form-control w-25" id="exampleFormControlInput1" placeholder="" value={dob} onChange={(e) => setDob(e.target.value)}/>
                            </div>
                            <div className='ca-stage3'>
                                <h5 style={{ position: 'relative', left: '2%' }}>Mobile Number</h5>
                                <input type="text" class="ffname form-control w-25" id="exampleFormControlInput1" placeholder="+94-*********"value={mobile} onChange={(e) => setMobile(e.target.value)} />
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
