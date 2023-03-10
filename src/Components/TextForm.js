import React, {useState} from 'react'

export default function TextForm(props) {

    const handleUpClick = ()=>{
        // console.log("UpperCase was clicked"+text)
        let newText = text.toUpperCase();
        setText(newText)
    } 

    const handleLoClick = ()=>{
        // console.log("UpperCase was clicked"+text)
        let newText = text.toLowerCase();
        setText(newText)
    } 

    const handleOnChange = (event)=>{
        // console.log("OnChange")
        setText(event.target.value)
    }

    const handleClearClick = ()=>{
        setText("")
    }

    const handleCopy = ()=>{
        let thisText = document.getElementById("textBox");
        thisText.select();
        navigator.clipboard.writeText(thisText.value);
    }

    const handleCaseChangeClick = ()=>{
        let sent = ""
        for(let i in text)
        {
            let ch = text.charAt(i)
            if(ch === ch.toLowerCase())
            {
                sent += ch.toUpperCase()
            }
            else if(ch === ch.toUpperCase())
            {
                sent += ch.toLowerCase()
            }
            
        }
        setText(sent)
    }

    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }

    const[text, setText] = useState("")

    const texts = text.split(" ")
    let wordlength = texts.length
    if(text.charAt(text.length-1) === ' ' || text === "")
    {
        wordlength--;
    }

    // text = "new Text";  //Wrong way to change state
    // setText("new Text"); //Correct way to change state

  return (
    <>
        <div className = "container">
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="textBox" 
            onChange={handleOnChange} value={text} rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear</button>
            <button className="btn btn-primary mx-1" onClick={handleCaseChangeClick}>ChangeCase</button>
            <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className="container my-3">
            <h3>Your Text Summary</h3>
            <p>{wordlength} words, {text.length} characters</p>
            <p>{0.008*wordlength} minutes read</p>
            <h4>Preview:</h4>
            <p>{text.length>0?text:"Enter text above to preview here"}</p>
        </div>
    </>
  )
}
