import React, { useState } from 'react'

export default function TextForm(props) {
  function handlechanging(event) {
    settext(event.target.value)
  }
  function handleup() {
    let newtext = text.toUpperCase()
    settext(newtext)
    props.showAlert("convert to Uppercase","success")
  }
  function handlelo() {
    let newtext = text.toLowerCase()
    settext(newtext)
    props.showAlert("convert to LowerCase","success")

  }
  function cleear() {
    let newtext = " "
    settext(newtext)
    props.showAlert("Clear","success")

  }
  function handlecopy() {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied","success")

  }
   

  const [text, settext] = useState(" ")
  return (
            <>
      <div className='container my-3' style={{color: props.mode==='dark'?'white':'#042743'}}>

        <div className="mb-3">
          <label className="form-label">{props.heading}</label>
          <textarea className="form-control" style=
          {{backgroundColor: props.mode==='light'?'white':'grey',
          color: props.mode==='dark'?'white':'#042743'}
        } value={text} onChange={handlechanging} id="exampleFormControlTextarea1" rows="6"></textarea>
        </div>
        <button className='btn btn-primary mx-1' onClick={handleup}>convert to uppercase</button>
        <button className='btn btn-primary mx-1' onClick={handlelo}>convert to lowercase</button>
        <button className='btn btn-primary mx-1' onClick={cleear}>clear</button>
        <button className='btn btn-primary mx-1' onClick={handlecopy}>Copy text</button>

      </div>


      <div className='container my-3'  style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} words and {text.length} character</p>
        <p>{0.008*(text.split(" ").length)} Minutes</p>
        <h2>Preview</h2>
        <p>{text}</p>
        </div>
      </>
      )
}
