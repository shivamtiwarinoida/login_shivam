import React from 'react'

export default function InputNum({title,val,setVal,error=""}) {
  return (
    <div className='form-input'>
      <label htmlFor={title}>{title.toUpperCase()}</label>
      <div className='input-error'>  
        <input type='number' name={title} id={title} onChange={setVal} value={val}/>
        <p>{error==""?".":error}</p>
      </div>
    </div>
  )
}
