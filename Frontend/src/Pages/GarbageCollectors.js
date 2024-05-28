import React from 'react'
import Navbarnew from '../components/Navbarnew'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import garbage from '../Images/garbage.jpg'
export default function GarbageCollectors() {
    return (
        <div>
            <Navbarnew />
            <div className='collectors-content'>
                <h1 className='collectors-heading'>Approved Reports</h1>
                <div className='collectors-spot'>
                    <div class="collectors-cards card" style={{ width: '18rem' }}>
                        <img src={garbage} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">65/1 dutugamunu street,kohuwala</h5>
                            <p class="card-text">Bad smell ,not good</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
