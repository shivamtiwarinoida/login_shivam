import React from 'react';

export default function InputText({title,val,setVal,hint="setText",error=""}) {
  return (
    <div className='form-input'>
      <label htmlFor={title}>{title.toUpperCase()}</label>
      <div className='input-error'>
        <input type='text' placeholder={hint} name={title} id={title} onChange={setVal} value={val}/>
        <p className='form-error'>{error=="" ?".":error}</p>  
      </div>
    </div>
  )
}
