// import { Router } from 'react-router-dom';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import React, { useState } from 'react';




function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000)
  }

  const toggleMode = () => {
    if (mode == 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enable", "success")
      document.title = "textutles-dark mode"
      // setInterval(()=>{
      //   document.title=" install textutles"

      // },2000)
      // setInterval(()=>{
      //   document.title="textutles is amazing"

      // },1500)
      // document.body.style.color ='white';    // by using this we can change text color
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white ';
      showAlert("Light mode has been enable", "success")
      document.title = "textutles-light mode"

      // document.body.style.color ='black';
    }
  }
  return (
    <>
        <Navbar tittle="Textutiles" aboutText="About" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className='container my-3'>

              <TextForm showAlert={showAlert} heading="Enter Text" mode={mode} />
        </div>

    </>


  );
}

export default App;
