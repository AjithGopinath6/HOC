import React from 'react'
import Container from 'react-bootstrap/Container'
import { Button } from 'react-bootstrap'

function ContactForm() {
  return (
    <Container>
        <div className='service'>
            
            <form action="" className='form'>
            <label for="name">Customer Name :</label>
                <input type="text" />
                <label for="contact">Contact Number :</label>
                <input type="tel" id="contact" name="contact" pattern="[0-9]{10}" required/>
                <label>Address :</label> <textarea id="address" name="address" rows="2" cols="40" ></textarea>
                <Button className='btn' type='submit'>Submit</Button>
            </form>
            
        </div>
    </Container>
  )
}

export default ContactForm