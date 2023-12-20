import React from "react";
import { Route, Routes } from 'react-router-dom';
import SignIn from "./FormComponents/form-components/Signup";
import Login from "./FormComponents/form-components/Login";
import Menu from "./FormComponents/form-components/Menu";
import Confirm from "./FormComponents/form-components/Confirm";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Confirm />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path="/confirm" element={<Confirm/>}/>
      </Routes>
    </>
  );
}

export default App;
