import React from "react";
import { Route, Routes } from 'react-router-dom';
import SignIn from "./FormComponents/form-components/Signup";
import Login from "./FormComponents/form-components/Login";
import Menu from "./FormComponents/form-components/Menu";
import Confirm from "./FormComponents/form-components/Confirm";
import EventPage from "./FormComponents/form-components/EventPage";
import SideBar from "./FormComponents/form-components/SideBar";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<EventPage/>} />
        <Route path='/event' element={<EventPage/>} />
        <Route path='/login' element={<Login />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path="/confirm" element={<Confirm/>}/>
      </Routes>
    </>
  );
}

export default App;
