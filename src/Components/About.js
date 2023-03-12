import React from 'react'

export default function About(props) {

    // const [myStyle, setMyStyle] = useState({
    //     color: "black",
    //     backgroundColor: "white"
    // })

    let myStyle = {
        color: props.mode === "light" ? "black" : "white",
        backgroundColor: props.mode === "light" ? "white" : "#1c2939",
    }

    let borderStyle = {
        border: "2px solid",
        borderColor: props.mode === "light" ? "black" : "white",
    }

    let style2 = {
        color: props.mode === "light" ? "black" : "white",
        backgroundColor: props.mode === "light" ? "white" : "#214674",
    }

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
        <h2 className='mb-4'>About Us</h2>
        <div className="accordion" id="accordionExample" style = {myStyle}>
            <div className="accordion-item" style = {borderStyle}>
                <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" type="button" style = {style2} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <strong>Analyze your text</strong>
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body" style = {myStyle}>
                    <strong>This is the first item's accordion body.</strong> TextUtils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or any other operation. 
                </div>
                </div>
            </div>
            <div className="accordion-item" style = {borderStyle}>
                <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" type="button" style = {style2} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <strong>Free to Use</strong>
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body" style = {myStyle}>
                    <strong>This is the second item's accordion body.</strong> Text Utils is free character counting tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit. 
                </div>
                </div>
            </div>
            <div className="accordion-item" style = {borderStyle}>
                <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" type="button" style = {style2} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    <strong>Browser Compatible</strong>
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
