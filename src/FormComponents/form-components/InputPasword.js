import React from 'react'

export default function InputPasword({title,val,setVal,hint="set",type="password",error=""}) {
  return (
    <div className='form-input'>
      <label htmlFor={title}>{title.toUpperCase()}</label>
      <div className='input-error'>
        <input type={type} placeholder={hint} name={title} id={title} onChange={setVal} value={val}/>
        <p>{ error=="" ? ".":error}</p>
      </div>
    </div>
  )
}
