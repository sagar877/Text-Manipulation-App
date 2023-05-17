import React,{useState} from 'react'

export default function Text(props) {

 
    const handleUpClick =() =>{
        //console.log("Upper Case Clicked");
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Text converted to upper case","Success");
    }
    const handleLoClick =() =>{
        //console.log("Lower Case Clicked");
        let new1Text=text.toLowerCase();
        setText(new1Text);
        props.showAlert("Text converted to lower case","Success");
    }

     const handleClearClick =() =>{
        let newText2="";
        setText(newText2);
        props.showAlert("Text cleared","Success");
    }

      const handleReClick =() =>{
        let newText3=text
        .split('').reverse().join('');
        setText(newText3);
        props.showAlert("Text reversed","Success");
        }

      const handleCoClick =() =>{
        var copyText = document.getElementById("my-box");
        // Select the text field
        copyText.select();  
        navigator.clipboard.writeText(copyText.value);
        props.showAlert("Text copied","Success");
        }

      const handleOnChange=(e) =>{
        
       setText(e.target.value);
       }



  const [text, setText] = useState("");
  return (
    <>
    <div className='container my-4' style={{color: props.mode==='dark'?'white':'black' }} >
        <h1>{props.heading}</h1>
      <div className='mb-3'>
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'? 'grey':'white' , color: props.mode==="dark"? 'white':'black'}} id="my-box" rows="8"></textarea>
        </div>
        <button className='btn-btn-primary mx-2' onClick={handleUpClick}>Change To Upper Case</button>
        <button className='btn-btn-primary mx-2' onClick={handleLoClick}>Change To Lower Case</button>
        <button className='btn-btn-primary mx-2' onClick={handleClearClick}> Clear text </button>
        <button className='btn-btn-primary mx-2' onClick={handleReClick}> Reverse text </button>
        <button className='btn-btn-primary mx-2' onClick={handleCoClick}> Copy text </button>
       

    </div>
    <div className='container my-3' style={{color: props.mode==='dark'?'white':'black' }}>
    <h2>Your code summary</h2>
   <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
    <p>{0.008 *  text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes read</p>
    <h2>Preview</h2>
   <p>{text}</p>
    </div>
    </>
  )
}
