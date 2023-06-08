import React, {useState} from 'react'

export default function TextForm(props) {
    const [text,setText]=useState('');// by default value is in round bracket
    const HandleUpClick =()=>{
        console.log('Upper Case got clicked '+text);
        setText('You have clicked on handle up click');
        let newtext=text.toUpperCase();
        setText(newtext);
        props.ShowAlert("Converted to Upper Case","success");
    }
    const HandeOnChange=(event)=>{
        console.log('on change');
        setText(event.target.value);
    }
    const HandleLowClick =()=>{
        let newtext=text.toLowerCase();
        setText(newtext);
        props.ShowAlert("Converted to Lower Case","success");
    }
    const HandleClearText=()=>{
      
        setText('');
    }

    const handleExtraSpaces =()=>{
        let newtext=text.split(/[ ]+/);
        setText(newtext.join(" "));
    }
    const handleCopy =()=>{
        console.log("copy clicked")
        var text=document.getElementById("myBox");
        var slection=text.select();
        console.log("slection",slection);
        text.select();
        console.log("text.value",text.value);
        navigator.clipboard.writeText(text.value);
    }
    //text="new text"  // wrong way to change state
   // setText("New text"); // correct way to change  state
   
    return (
        <>
        <div className='container' style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control"
                 value={text} onChange={HandeOnChange} 
                 style={{backgroundColor:props.mode === 'dark' ? 'grey' : 'white',color: props.mode === 'dark' ? 'white' : 'black'}}
                 id="myBox"
                  rows="8">
                
                </textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={HandleUpClick}>Convert to Upper Case</button>
            <button className="btn btn-primary mx-2" onClick={HandleLowClick}>Convert to Lower Case</button>
            
            <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-2" onClick={HandleClearText}>Clear Text</button>
        </div>
        <div className="container"  style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
            <h1> Your Text Summary</h1>
            <p>
                {text.split(" ").length} words , {text.length} Characters 
            </p>
            <p>
                {0.008 * (text.split(" ").length)} minutes read
            </p>
            <h1>Preview</h1>
            <p>{text.length>0?text:"Enter Something To Preview It Here !"}</p>
        </div>

        </>
        
    )
}
