import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ServiceForm from './Components/ServiceForm'
import ContactForm from './Components/ContactForm';
import {ContactWithTrack} from './Components/ContactForm';
import {ServiceWithTrack} from './Components/ServiceForm';


function App() {
  return (
    <div>
      {/* <ContactForm/> */}
      <ContactWithTrack/>
      {/* <ServiceForm/> */}
      <ServiceWithTrack/>
      
    </div>
  )
}

export default App
