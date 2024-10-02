import React from 'react'
import Container from 'react-bootstrap/Container'
import { Button } from 'react-bootstrap';
import { useState } from 'react';

function ServiceForm() {
    const[formData,setFormData]=useState({
        name:'',
        empid:'',
        message:''
    });

// function to handle changes.
    const handleChange=(e)=>{
        const{name, value} = e.target;
        setFormData((prevData)=>({
            ...prevData, [name]: value,
        }));
    }

    // function to handle from submission.
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log('formData:',formData);
    }

  return (
    <Container>
        <div className='service'>
            
            <form action="" className='form' onSubmit={handleSubmit}>
            <label for="name">Service Emp Name:</label>
                <input onChange={handleChange} name='name' type="text" />
                <label>Emp Id :</label> 
                <input onChange={handleChange} type="tel" id="empid" name="empid" pattern="[0-9]{3}" required/>
                <label>Feedback :</label>
                 <textarea onChange={handleChange} id="message" name="message" rows="2" cols="40" placeholder="Enter your Feedback here..."></textarea>
                <Button className='btn' type='submit'>Submit</Button>
            </form>
            
        </div>
    </Container>
  )
}

export default ServiceForm