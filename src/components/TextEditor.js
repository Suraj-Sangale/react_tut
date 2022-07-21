import React from 'react'

function TextEditor() {
  return (
    <>
    <div className="form-group">
  <label htmlFor="exampleFormControlTextarea1">Example textarea</label>
  <textarea
    className="form-control" id="exampleFormControlTextarea1" rows={3} defaultValue={""}
  />
</div>

    
    </>
  )
}

export default TextEditor