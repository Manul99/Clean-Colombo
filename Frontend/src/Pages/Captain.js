import React, { useEffect, useState } from 'react';
import Navbarnew from '../components/Navbarnew';
import { useInView } from 'react-intersection-observer';
import axios from 'axios';
export default function Captain() {
  const [reports, setReports] = useState([]);
  const [image, setimage] = useState(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  /*
  useEffect(() => {
    // Fetch reports data from your backend API
    axios.get('http://localhost:3001/api/reports')
      .then((response) => {
        setReports(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  */
  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/reports');
      const data = await response.json();
      const updatedData = data.map((report) => ({
        ...report,
        image: extractFileIDFromURL(report.image), // Extract file ID from the URL
      }));
      setimage(updatedData);
      
    } catch (error) {
      console.error('Error while fetching plants:', error);
      
    }
  };

  const extractFileIDFromURL = (url) => {
    const regex = /file\/d\/(.+?)\/view/;
    const match = url.match(regex);
    return match ? match[1] : null;
  };

  useEffect(() => {
    fetchData(); // Call the async function to fetch data
  }, []);

  return (
    <div>
      <Navbarnew />
      <div className='captain-content'>
        <h1
          ref={ref}
          className={inView ? 'captain-heading slideUp' : 'captain-heading'}
        >
          Hello !! Green Captain
        </h1>
        <div className='captain-reportincident'>
          <h1
            ref={ref}
            className={
              inView ? 'captain-heading2 slideup' : 'captain-heading2'
            }
            style={{ position: 'absolute', top: '4%', left: '25%', color: 'rgb(130, 212, 7)' }}
          >
            Check new reported incident
          </h1>
          <br /><br /><br />
          <div
            ref={ref}
            className={inView ? 'captain-container slideup' : 'captain-container'}
          >
           
             {reports.map((report) =>{
              <div key={report._id} className='card-columns' id='dataContainer'>
              <div className='captain-cards card' style={{ width: '18rem' }}>
                <img
                  src={{uri: `https://drive.google.com/uc?export=view&id=${report.image}`}}
                  className='card-img-top'
                  alt={report.name}
                />
                <div className='card-body'>
                  <h5 className='card-title'>{report.location}</h5>
                  <p className='card-text'>{report.impact}</p>
                  <div className='captain-btn btn-group' role='group'>
                    <button className='btn btn-success'>Approve</button>
                    <button className='btn btn-warning'>Reject</button>
                    <button className='btn btn-danger'>Emergency</button>
                  </div>
                </div>
              </div>
            </div>
             })}
          </div>
        </div>
      </div>
    </div>
  );
}
/*
{reports.length > 0 ? (
              reports.map((report) => (
                <div key={report._id} className='card-columns' id='dataContainer'>
                  <div className='captain-cards card' style={{ width: '18rem' }}>
                    <img
                      src={report.image}
                      className='card-img-top'
                      alt={report.name}
                    />
                    <div className='card-body'>
                      <h5 className='card-title'>{report.location}</h5>
                      <p className='card-text'>{report.impact}</p>
                      <div className='captain-btn btn-group' role='group'>
                        <button className='btn btn-success'>Approve</button>
                        <button className='btn btn-warning'>Reject</button>
                        <button className='btn btn-danger'>Emergency</button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>No reports found.</p>
            )}
*/ 