import React from 'react'
import Container from 'react-bootstrap/Container'
import { Button } from 'react-bootstrap'

function ServiceForm() {
  return (
    <Container>
        <div className='service'>
            
            <form action="" className='form'>
            <label for="name">Service Emp Name:</label>
                <input type="text" />
                <label>Emp Id :</label> 
                <input type="tel" id="contact" name="contact" pattern="[0-9]{5}" required/>
                <label>Feedback :</label> <textarea id="message" name="message" rows="2" cols="40" placeholder="Enter your Feedback here..."></textarea>
                <Button className='btn' type='submit'>Submit</Button>
            </form>
            
        </div>
    </Container>
  )
}

export default ServiceForm