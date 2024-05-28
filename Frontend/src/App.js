import './App.css';
import About from './Pages/About';
import Collectingspot from './Pages/Collectingspot';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Stafflogin from './Pages/Stafflogin';
import GTFwelcome from './Pages/GTFwelcome';
import Reportincident from './Pages/Reportincident';
import ForgotPassword from './Pages/ForgotPassword';
import Captain from './Pages/Captain';
import CaptainAccounts from './Pages/CaptainAccounts';
import StaffAccount from './Pages/StaffAccount';
import UploadPoster from './Pages/UploadPoster';
import UploadGCS from './Pages/UploadGCS';
import GarbageCollectors from './Pages/GarbageCollectors';

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/collectingspot' element={<Collectingspot />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/stafflogin' element={<Stafflogin />} />
        <Route path='/gtfwelcome' element={<GTFwelcome />} />
        <Route path='/reportincident' element={<Reportincident />} />
        <Route path='/forgotpassword' element={<ForgotPassword />} />
        <Route path='/captain' element={<Captain />} />
        <Route path='/captainaccount' element={<CaptainAccounts />} />
        <Route path='/staffaccount' element={<StaffAccount />} />
        <Route path='/uploadposter' element={<UploadPoster />} />
        <Route path='/uploadGCS' element={<UploadGCS />} />
        <Route path='/collectors' element={<GarbageCollectors />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
