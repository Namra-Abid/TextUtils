import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
//import About from './components/About';
import Alert from './components/Alert';
import React, { useState } from 'react';
//import { Routes ,Route } from 'react-router-dom';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';





function App() {

  const [mode, setMode] = useState('light');
  const togglemode = () => {
    if (mode == 'light') {
      //mode='dark'  // wrong way
      setMode('dark')  //right way
      document.body.style.backgroundColor = 'grey';
      console.log('clicked dark')
      ShowAlert('Dark mode enable', 'success')
      document.title = "Text Utils - Dark Mode"
      //To change title dynamically ---start
      setInterval(() => { document.title = 'Text Utils - Amazing ' }, 2000)
      setInterval(() => { document.title = 'Text Utils - Cool ' }, 1500)
      //To change title dynamically ---end

    }
    else {
      //  mode='light' //wrong way
      setMode('light')//right way
      console.log('clicked light')
      document.body.style.backgroundColor = 'white';
      ShowAlert('Light mode enable', 'success');
      document.title = "Text Utils - Light Mode"


    }
  }
  /////////////////////////////////////////////
  const [alert, setAlert] = useState(null);
  const ShowAlert = (message, type) => {
    setAlert({
      msg: message,
      typ: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 3000);
  }


  return (
    <div>
      <Router>
        <Navbar title="Text Utils Namra" aboutText="About Text Utils" mode={mode} togglemodefunc={togglemode} />
        <Alert alert={alert} />
        <div className='container my-3'>

            <TextForm ShowAlert={ShowAlert} heading='Enter Text To Analyze' mode={mode} />
            
          {/* <About/> */}
        </div>
      </Router>
    </div>

  );
}

export default App;
