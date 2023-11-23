import { Route ,Routes } from 'react-router-dom'
import React from 'react';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Services from './Components/Services';
import BookingForm from './Components/BookingForm';

function App() {
 return (
    <div>
      < NavBar />
      <Routes>
        <Route path='/'element={<Home/>}></Route>
        <Route path="/home" element={<Home />}></Route>
      <Route path="/services"element={<Services/>}  ></Route>
      <Route path= "/boking form"element={<BookingForm/>}></Route>
           </Routes>
           
           
    </div>
  )
}

export default App;