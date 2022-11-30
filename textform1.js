import React,{useState} from 'react'


function Textform1(props) {
  const handleUpClick=()=>{
    // console.log("Uppercase was clicked" + text);
    let newText=text.toUpperCase();
    // setText("You have clicked on handleUpclick");
    setText(newText);
  }

  const handleLoClick=()=>{
    // console.log("Uppercase was clicked" + text);
    let newText=text.toLowerCase();
    // setText("You have clicked on handleUpclick");
    setText(newText);
  }

  const handleClearClick=()=>{
    // console.log("Uppercase was clicked" + text);
    let newText=" ";
    // setText("You have clicked on handleUpclick");
    setText(newText);
  }

  // const handleClearVowels=()=>{
    
  // }
 const handleExtraSpaces=()=>{
  let newText=text.split(/[ ]+/);
  setText(newText.join(" "));
 }

  const handleOnChange=(event)=>{
    // console.log("On Change");
    setText(event.target.value);
  }
  

  const[text,setText]=useState(' ');
  // setText('abcdefgh');
  // text="new text";  //wrong way to change the state 
  //setText("new text"); //correct way to change the state
  
  return (
    <>
    <div className="container">
    <h1>{props.heading}</h1>
    <div className="mb-3">
    <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="8"></textarea>
    </div>
    <button className="btn1 mx-3" onClick={handleUpClick}>Convert to upercase</button>
    <button className="btn2 mx-3" onClick={handleLoClick}>Convert to lowercase</button>
    <button className="btn3 mx-3" onClick={handleClearClick}>Clear text</button>
    {/* <button className="btn2 mx-3" onClick={handleClearVowels}>Remove Vowels</button>
    <button className="btn2 mx-3" onClick={handleClearConsonants}>Remove Consonants</button> */}
    <button className="btn4 mx-3" onClick={handleExtraSpaces}>Remove ExtraSpace </button>
    </div>
    <div className="container my-4">
    <h2>Your text summary</h2>
    <p>{text.split(" ").length} words and {text.length}characters</p>
    <p>{0.008*text.split(" ").length} Minutes take to read</p>
    <h2>Preview</h2>
    <p>{text}</p>
    </div>
    </>
  );
}

export default Textform1;
