
import './App.css';
import React,{useState} from 'react';
import Alert from './components/Alert';
import Navbar from './components/Navbar'
import Text from './components/Text'

function App() {
  const[mode,setMode]=useState('light');
  const[alert,setAlert]=useState(null);
 

  const showAlert=(message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    },1500);
  }

  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor="#042743";
      showAlert("Dark mode enabled","Success")
      }

    else{
      setMode('light');
      document.body.style.backgroundColor="white";
      showAlert("Light mode enabled","Success")
    }
    }

    

      
  return (
    <>
<Navbar title="FApp" Home="Home" mode={mode}  toggleMode={toggleMode}  showAlert={showAlert}/>
<Alert alert={alert} />
<div className='container my-3'>
<Text showAlert={showAlert} heading="Enter Text To Convert Upper Case And Lower Case" mode={mode}  />
</div>

    </>
  );
}

export default App;
