import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./login.css";
import InputText from './InputText';
import InputPasword from './InputPasword';
import InputNum from './InputNum';
import {useFormik} from "formik";
import { signUpSchema } from '../assets/schemas';
import img0 from "./../assets/img.png";
import img1 from "./../assets/img2.png";
import img2 from "./../assets/img3.png";
import img3 from "./../assets/img4.png";
import img4 from "./../assets/img5.png";

const initialValues = {
    name:"",
    referral_id:"",
    college:"",
    phone:"",
    email:"",
    password:"",
    confirm_password:"",
}

const SignIn = () => {
    const [show,setShow]=useState(false);
    
    const imgArr=[img0,img1,img2,img3,img4];
    const [num, setNum] = useState(Math.floor(Math.random()*5)%5);
    
    const {values,errors,handleBlur,handleChange,handleSubmit}=useFormik({
        initialValues:initialValues,
        validationSchema:signUpSchema,
        onSubmit : (values)=>{
            console.log(values);
        }
    });

    
    const handleShow=()=>{
        setShow(!show);
    }

    return (
        <>
            <div className='container' style={{backgroundImage:`url(${imgArr[num]})`}}>
                <div className='contain'>
                    <div className='switch-btw'>
                        <Link to="/login" className='link '>Login</Link>
                        <span>/</span>
                        <Link to="/signin" className='link active'>Sign in</Link>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <InputText title={"name"} val={values.name} setVal={handleChange} hint={"UserName"} error={errors.name}/>
                        <InputText title={"referral_id"} val={values.ref} setVal={handleChange} hint={"(Optional)"} error={errors.referral_id}/>
                        <InputText title={"college"} val={values.college} setVal={handleChange} hint={"College Name"} error={errors.college}/>
                        <InputNum title={"phone"} val={values.phone} setVal={handleChange}  error={errors.phone}/>
                        <InputText title={"email"} val={values.email} setVal={handleChange} hint={"Email"} error={errors.email}/>
                        <InputPasword title={"password"} val={values.password}  error={errors.password}
                        setVal={handleChange} hint={"Password"} type={show?"text":"password"}/>
                        <InputPasword title={"confirm_password"} val={values.confirm_password} error={errors.confirm_password}
                        setVal={handleChange} hint={"Confirm Password"} type={show?"text":"password"}/>
                        <div className='check-box'>    
                            <input type="checkbox" name='show' id='show' value={show} onClick={handleShow}/>
                            <label htmlFor='show'>show Password</label>
                        </div>
                        <div className='btn-contain'>    
                            <button type='submit' className='btn'>Submit</button>    
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default SignIn;