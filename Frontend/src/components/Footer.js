import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './footer.css'
export default function Footer() {
    return (

        <footer className='footer'>

            <table>
                <tr>
                    <th className='th1'>News and Media</th>
                    <th className='th2'>Follows us on
                        <FontAwesomeIcon icon={faFacebook} size='lg' className='icon' />
                        <FontAwesomeIcon icon={faInstagram} size='lg' className='icon' />
                        <FontAwesomeIcon icon={faTwitter} size='lg' className='icon' />
                    </th>
                    <th className='th3'>Feedback<input type='text' /></th>
                </tr>
                <tr>
                    <td>Sign up to get latest version</td>
                </tr>
            </table>
            <small>Copyright &copy; 2023 Garbage Collectio | Sitemap | Terms Of User | Pricing Policy | Enviromental Surcharges</small>
        </footer>

    )
}
