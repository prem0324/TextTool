import React from "react";
import {useState} from 'react'
export default function TextForm(props) {
  const [text,setText]=useState('');

  //Count Words

  function countWords(str) {
    const arr = str.split(' ');
  
    return arr.filter(word => word !== '').length;
  }
  

  // Upper Case
  const handleUpClick = () =>{
    if(text===""){
      props.showAlert("Enter Text For Upper Case !","warning");
    }
    else{
          let newText=text.toUpperCase();
          setText(newText);
          props.showAlert("Changes To Upper Case","success");
        }
    }
      
  //  For Enter TExt  
  const handleOnChange=(Event)=>{
    setText(Event.target.value)

  }    

  // Lower Case  
  const handleLowClick = () =>{
    if(text===""){
      props.showAlert("Enter Text For Lower Case !","warning");
    }
    else{
    let newText=text.toLowerCase();
    setText(newText);
    props.showAlert("Changes To Lower Case !","success");
    }
  } 
//  Clear TExt 
  const handleClearClick = ()=>{
  
    let newText="";
    setText(newText);
    props.showAlert("Cleared !","success");

  }
  // Copy TExt ]
  const handleCopy=()=>{
    if(text===""){
      props.showAlert("Enter Text To Copy!","warning");
    }
    else{
    var text1 =document.getElementById('myform');
    text1.select();
    navigator.clipboard.writeText(text1.value);
    props.showAlert("Copied Text !","success");
    }

  }

  // Extra Spaces 
  const handleExrtaSpaces=()=>{
    if(text===""){
      props.showAlert("Enter Text For Removing Spaces","warning")
    }
    else {
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Removed Extra Spaces","success");
    }
  }



  return (
    <>
    <div className="container my-3">
    <div >
    <div className="container"  >
      <div className=" mb-3">
        <label htmlFor="myform" className="form-label">
        <h1 style={{color:props.mode==='dark'?'white':'black'}}> {props.heading} </h1>
        </label>
        <textarea
        value={text}
        onChange={handleOnChange}
          className="form-control"
          id="myform"
          rows="8"
          style={{backgroundColor:props.mode==='dark'?'#4f72be':'white',color:props.mode==='dark'?'white':'black'}}
        ></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert To Upper Case</button>
      <button className="btn btn-info mx-2" onClick={handleLowClick}>Convert To Lower Case</button>
      <button className="btn btn-success mx-2" onClick={handleExrtaSpaces}>Remove Extra Spaces</button>
      <button className="btn btn-success mx-2" onClick={handleCopy}>Copy Text</button>
      <button className="btn btn-danger mx-2" onClick={handleClearClick}>Clear Text</button>
    </div>
    <div className="container my-5" style={{color:props.mode==='dark'?'white':'black'}}>
      <h1>Your Text Contain</h1>
      <p>{countWords(text)}  Words and {text.length  } Charecters including spaces</p>
      <p>{countWords(text) *  0.008} Minutes In Read</p>
    <h2> Preview</h2>
    <p>{text.length>0?`${text}`:'Enter Text To Privew'}</p>
    </div>
    </div>
    </div>
    </>
  );
}
