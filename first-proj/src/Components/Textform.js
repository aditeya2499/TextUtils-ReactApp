import React, {useState} from 'react'
import PropTypes from 'prop-types'




export default function Textform(props) {
    // To jaha jaha pe bi text use hogi react use update kar dega
    // yaha pe text hamara variable hai aur setText se ham uski value change kar rahe hai
    // useState uski default value de raha hai jo ki Enter Text Here' useState hamari text ki default avastha ya value hai
    const [text, setText] = useState('');
    // text = "new text" -- Wrong way to change text state
    // setText("new text") -- Correct way

    const handleUpClick = ()=> {
        console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Words are changed to Upper Case.','success')
        // To props se ham koi bi propery apne component me de sakte hai main app me aur fir use aake yaha pe use kar sakte hai.
    }
    const handleOnChange = (event) => {
        console.log("Text was changed")
        setText(event.target.value);
    }
    const handleLowClick = ()=> {
        let newText = text.toLocaleLowerCase();
        setText(newText);
        props.showAlert('Words are changed to Lower Case.','success')
    }
    const handleClear = ()=> {
        setText("");
    }
    const handleCopy = ()=> {
        document.getElementById("myBox").select();
        navigator.clipboard.writeText(text);
    }
    const handleSummary = () => {
        let str = "";
        str +=
        `<div className="my-3">
            <h2>Total no. of words are ${text.split(" ").length} and Total no. of characters are ${text.length}</h2>
            <h2>Preview</h2>
            <p>${text}</p>
        </div>`;
        document.getElementById("summary").innerHTML = str;
    }
    return (
        <>
        <div>
            <h1 style ={{color:props.mode==='light'?'black':'white'}}>{props.heading}</h1>
            <div className="text" id="textBox">
                {/* Hame yaha pe onchange event bi banan padega kyuki value ko ham ek state event ki tarah use kar rahe hai */}
                <textarea className="textForm" value={text} onChange={handleOnChange} id="myBox" style ={{backgroundColor:props.mode==='light'?'white':'grey'}}>
                </textarea>
            </div>
            <button className='btn btn-primary mx-2 my-2' onClick={handleUpClick}>UpperCase</button>
            <button className='btn btn-primary mx-2 my-2' onClick={handleLowClick}>LowerCase</button>
            <button className='btn btn-primary mx-2 my-2' onClick={handleClear}>Clear Text</button>
            <button className='btn btn-primary mx-2 my-2' onClick={handleCopy}>Copy Text</button>
            <button className='btn btn-primary mx-2 my-2' onClick={handleSummary}>Text Summary</button>
            <div className="my-2" id="summary"></div>
        </div>
        
        </>
    )
}
