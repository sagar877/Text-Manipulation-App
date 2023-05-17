import React from 'react'
import "./style.css"


export default function Contact(props) {
  return (
    <div className='contact' style={{color: props.mode==='dark'?'white':'black'}}>
      <h1 className='contact-heading'><b>Contact Us</b></h1>
        <form  className="contact-form">
            <label for="nam"><b>Name:</b></label>
            <input type="text" id="nam" />
            <br/><br/>
            <label htmlfor="email"><b>Email:</b></label>
            <input type="text" id="email" />
            <br/><br/>
           <label><b>Any Queries:</b></label>
           <textarea type="textarea"  id="text1" placeholder="Type Here"></textarea>
           <br/><br/>
           <button id="btn" type="button" value="Submit">Submit</button>
           </form>
    </div>
  )
}
