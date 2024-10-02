import React from 'react'
import Container from 'react-bootstrap/Container'
import { Button } from 'react-bootstrap';
import WithTrack from './WithTrack';


function ContactForm({ formData, handleChange, handleSubmit}) {

  return (
    <Container>
        <div className='service'>
            
            <form id="contact" action="" className='form' onSubmit={handleSubmit}>
            <label htmlFor="name">Customer Name :</label>
                <input onChange={handleChange} type="text" name='name' required />
                <label htmlFor="contact">Contact Number :</label>
                <input onChange={handleChange} type="tel" id="contact" name="contact"  pattern="[0-9]{10}" required/>
                <label htmlFor="address">Address :</label> <textarea onChange={handleChange} id="address" name="address"  rows="2" cols="40" ></textarea>
                <Button className='btn' type='submit'>Submit</Button>
            </form>
            
        </div>
    </Container>
  )
}

export default ContactForm

export const ContactWithTrack = WithTrack(ContactForm);