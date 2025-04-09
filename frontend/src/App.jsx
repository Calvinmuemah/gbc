import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'

import Home from './Components/Home'
import AllTeachings from './Components/AllTeachings';
import Give from './Components/Give';
import PrayerMeeting from './Components/Services/PrayerMeeting'
import BibleStudy from './Components/Services/BibleStudy';
import DoctrinalStudies from './Components/Services/DoctrinalStudies';
import BooksClub from './Components/Services/BooksClub'
import SundayService from './Components/Services/SundayService';
import SundaySchool from './Components/Ministries/SundaySchool';
import CheckYourEmail from './Components/Registrations/CheckYourEmail';
import ForgotPassword from './Components/Registrations/ForgotPassword';
import Login from './Components/Registrations/Login';
import Signup from './Components/Registrations/Signup';
import ResetPassword from './Components/Registrations/ResetPassword';
import LandingPage from './Components/LandingPage';
import About from './Components/About';
import Contact from './Components/Contact';
import LearnMore from './Components/LearnMore';

function App() {
  return ( 
    <BrowserRouter>
      <Routes>
        <Route path='/Home' element={<Home />}></Route>
        <Route path='/AllTeachings' element={<AllTeachings />}></Route>
        <Route path='/Give' element={<Give />}></Route>
        <Route path='/PrayerMeeting' element={<PrayerMeeting />}></Route>
        <Route path='/BibleStudy' element={<BibleStudy />}></Route>
        <Route path='/DoctrinalStudies' element={<DoctrinalStudies />}></Route>
        <Route path='/BooksClub' element={<BooksClub />}></Route>
        <Route path='/SundayService' element={<SundayService />}></Route>
        <Route path='/SundaySchool' element={<SundaySchool />}></Route>
        <Route path='/CheckYourEmail' element={<CheckYourEmail />}></Route>
        <Route path='/ForgotPassword' element={<ForgotPassword />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Signup />}></Route>
        <Route path='/reset-password/:token' element={<ResetPassword />}></Route>
        <Route path='/' element={<LandingPage />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/learnMore' element={<LearnMore />}></Route>
      </Routes>
    </BrowserRouter> 
  );

}

export default App
