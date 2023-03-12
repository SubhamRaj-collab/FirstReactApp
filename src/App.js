import './App.css';
import React, {useState} from 'react'
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm'
import Alert from './Components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";

function App() {

  const [mode, setMode] = useState("light")

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const blueToggleMode = () =>{
    if(mode === "dark")
    {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light Mode Enabled", "success");
      document.title = "TextUtils App => Light Mode Enabled";

      // setInterval(() => {
      //   document.title = "TextUtils App is Amazing!!!!";
      // }, 2000);

      // setInterval(() => {
      //   document.title = "Install TextUtils App Now";
      // }, 1500);
      // Title changes in the given intervals.
    }
    else
    {
      setMode("dark");
      document.body.style.backgroundColor = "#1c2939";
      document.body.style.color = "white";
      showAlert("Dark Mode Enabled", "success");
      document.title = "TextUtils App => Dark Mode Enabled";
    }
  }

  const greenToggleMode = () =>{
    if(mode === "dark")
    {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light Mode Enabled", "success")
    }
    else
    {
      setMode("dark");
      document.body.style.backgroundColor = "#172f14";
      document.body.style.color = "white";
      showAlert("Dark Mode Enabled", "success")
    }
  }

  const redToggleMode = () =>{
    if(mode === "dark")
    {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light Mode Enabled", "success")
    }
    else
    {
      setMode("dark");
      document.body.style.backgroundColor = "#240b0b";
      document.body.style.color = "white";
      showAlert("Dark Mode Enabled", "success")
    }
  }

  return (
    <>
    <Router>
      <Navbar title = "TextUtils" aboutText="About Us" mode={mode} blueToggleMode={blueToggleMode} greenToggleMode={greenToggleMode} redToggleMode={redToggleMode}/>
      <Alert alert = {alert}/>
      <div className="container my-3">

        {/*
        
          /users -> component1
          /users/home -> -> Component1

          if we do not use exact path below
        
         */}
        <Routes>
          <Route exact path="/about" element={<About />} />
            
          <Route exact path="/" element={
            <TextForm heading="Enter the text below to analyze" mode={mode} showAlert={showAlert} blueToggleMode={blueToggleMode} greenToggleMode={greenToggleMode} redToggleMode={redToggleMode}/>
          } />
            
            {/* <TextForm heading="Enter the text below to analyze" mode={mode} showAlert={showAlert} blueToggleMode={blueToggleMode} greenToggleMode={greenToggleMode} redToggleMode={redToggleMode}/> */}

        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
