import React from 'react';
import { Link } from 'react-router-dom';

export default function Menu() {
  return (
    <div>
        <>
        <Link to="/login">Login</Link>
        <Link to="/signin">Sign in</Link>
        </>
    </div>
  )
}
