// higher order component(HOC)
//  it is a pattern used to reuse component logic. An HOC is a function that takes a component as an argument and returns a new component with additional props or functionality

import React from 'react'
import { useState } from 'react';

    // here we take a component as an argument we can give any name to it. indefault we give "WrappedComponent"
function WithTrack(WrappedComponent) {
    // in an HOC there is 2 return statements.
  return ()=>{
    // here we return the additional functionalities that the original component wants.we give it in the first return.
    const[formData, setFormData] = useState({
        name: '',
        contact: '',
        address: ''
    })

    const handleChange = (e)=>{
        const {name, value} = e.target;
        setFormData((prevData)=>
            ({...prevData, [name]: value}
        ))
    }

    const handleSubmit =(e)=>{
        e,preventDefault();
        console.log('formData:', formData);
    }
    // here we return the component
    return (
    <div >
        <WrappedComponent
        // formData={formData} we dont use this in the other component so we dont need to pass it.
        handleChange={handleChange}
        handleSubmit={handleSubmit}/>
    </div>
    );
  }
}

export default WithTrack