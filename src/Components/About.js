import React, {useState} from 'react'

export default function About() {

    const [myStyle, setMyStyle] = useState({
        color: "black",
        backgroundColor: "white"
    })

    // const [btnText, setBtnText] = useState("Enable Dark mode")

    // const toggleStyle = ()=>{
    //     if(myStyle.color === "black")
    //     {
    //         setMyStyle({
    //             color: "white",
    //             backgroundColor: "black",
    //             border: "1px solid white"
    //         })
    //         setBtnText("Enable light mode");
    //     }   
    //     else
    //     {
    //         setMyStyle({
    //             color: "black",
    //             backgroundColor: "white"
    //         })
    //         setBtnText("Enable dark mode");
    //     }
    // }

  return (
    <div className='container' style = {myStyle}>
        <h2 className='my-5'>About Us</h2>
        <div className="accordion" id="accordionExample" style = {myStyle}>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" type="button" style = {myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Analyze your text
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body" style = {myStyle}>
                    <strong>This is the first item's accordion body.</strong> TextUtils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or any other operation. 
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" type="button" style = {myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Free to Use
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body" style = {myStyle}>
                    <strong>This is the second item's accordion body.</strong> Text Utils is free character counting tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit. 
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" type="button" style = {myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Browser Compatible
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body" style = {myStyle}>
                    <strong>This is the third item's accordion body.</strong> This word counter software works in any browser such as chrome, firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf, essays, etc.
                </div>
                </div>
            </div>
        </div>

        {/* <div className="container">
            <button className='my-3 btn btn-primary' type="button" onClick={toggleStyle}>{btnText}</button>
        </div> */}

    </div>
  )
}
