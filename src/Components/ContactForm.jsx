import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import { Button } from 'react-bootstrap'


function ContactForm() {

  return (
    <Container>
        <div className='service'>
            
            <form action="" className='form' onClick={handleSubmit}>
            <label for="name">Customer Name :</label>
                <input onChange={handleChange} type="text" name='name' />
                <label for="contact">Contact Number :</label>
                <input onChange={handleChange} type="tel" id="contact" name="contact" pattern="[0-9]{10}" required/>
                <label>Address :</label> <textarea onChange={handleChange} id="address" name="address" rows="2" cols="40" ></textarea>
                <Button className='btn' type='submit'>Submit</Button>
            </form>
            
        </div>
    </Container>
  )
}

export default ContactForm