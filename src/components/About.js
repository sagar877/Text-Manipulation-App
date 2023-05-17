import React from 'react'
import "./style.css"



export default function About(props) {
  return (
    <div className='about' style={{color: props.mode==='dark'?'white':'black' }}>
      <h1>About Us</h1>
      <h2>Welcome To Text Manipulating Web App</h2>
      <p>Free software utility which allows you to manipulate text and do different operation on text
         like change text to uppercase,change text to uppercase,to reverse text etc.
         It also counts number of words, characters also shows how much time to read text and
         also shows the preview of the text.
      </p>
    </div>
  )
}
