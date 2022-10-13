import React,{useState} from 'react'

export default function TextForm(props) {
    const [Text, setText] = useState('Enter Text here');
    const handleUpClick=()=>
    {
        const t=Text.toUpperCase();
        setText(t);
        props.showAlert("The text has has been converted to Upper case","Success");
    }
    const handleLoClick=()=>
    {
        const t=Text.toLowerCase();
        setText(t);
        props.showAlert("The text has has been converted to Lower case","Success");
    }
    const handleOnChange=(event)=>
    {
        setText(event.target.value);
    }
    const handleclClick=()=>
    {
        const a='';
        setText(a);
        props.showAlert("The textbox has has been cleared","Success");
    }
  return (
    <>
    <div>
      <div className="mb-3" style={{color: props.mode==='dark'? 'white': 'black'}}>
        <label htmlFor="exampleFormControlTextarea1" className="form-label"><h1>Enter the text to manipulate.</h1></label>
        <textarea className="form-control" value={Text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'? 'grey': 'white',color: props.mode==='light'? 'black': 'white'}} id="exampleFormControlTextarea1" rows="7"></textarea>
      </div>
      <button className="btn btn-primary"onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-3" onClick={handleLoClick}>Convert to Lowerrcase</button>
      <button className="btn btn-primary mx" onClick={handleclClick}>Clear Text</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='light'? 'black': 'white'}}>
      <h1>Your Text Summary</h1>
      <p> {Text.split(" ").length} words and {Text.length} characters.</p>
      <h2>Preview</h2>
      <p>{Text}</p>
    </div>
    
    </>
  )
}
