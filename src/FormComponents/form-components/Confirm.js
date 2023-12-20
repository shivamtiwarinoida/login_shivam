import React from 'react';
import "./confirm.css";
import img from "./../assets/img6.png";
import success from "./../assets/success.png";
import { Link } from 'react-router-dom';

export default function Confirm() {
  return (
    <div className='container' style={{backgroundImage:`url(${img})`}}>
        <div className='contain-confirm' >
            <h2>Registration Done</h2>
            <div className='success'>
                <img src={success} alt="successful"/>
                <p className='success'>Successful</p>
            </div>
            <div className='ending'>
                <p>You have successfully completed the registration for Blitzschlag 2024.</p>
                <Link  to="/" className='btn'>Home</Link>
            </div>
        </div>
    </div>
  )
}
