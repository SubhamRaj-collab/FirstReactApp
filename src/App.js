import './App.css';
import {useState} from 'react'
// import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm'

function App() {

  const [mode, setMode] = useState("light")

  const toggleMode = () =>{
    if(mode === "dark")
    {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black"
    }
    else
    {
      setMode("dark");
      document.body.style.backgroundColor = "#3a4b5f";
      document.body.style.color = "white"
    }
  }

  return (
    <>
      <Navbar title = "TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode}/>

      <div className="container my-3">
        <TextForm heading="Enter the text below to analyze"/>
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
