import React from 'react'
import Container from 'react-bootstrap/Container'
import { Button } from 'react-bootstrap'

function ServiceForm() {
  return (
    <Container>
        <div className='service'>
            
            <form action="" className='form'>
                Service Name : <input type="text" />
                Contact Number : <input type="text" />
                Feedback : <input type="textarea" />
                <Button className='btn' type='submit'>Submit</Button>
            </form>
            
        </div>
    </Container>
  )
}

export default ServiceForm