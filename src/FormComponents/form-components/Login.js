import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./login.css";
import InputText from './InputText';
import InputPass from "./InputPasword";
import { useFormik } from "formik";
import img0 from "./../assets/img.png";
import img1 from "./../assets/img2.png";
import img2 from "./../assets/img3.png";
import img3 from "./../assets/img4.png";
import img4 from "./../assets/img5.png";
import apple from "./../assets/apple.png";
import facebook from "./../assets/facebook.png";
import google from "./../assets/search.png";
import { loginSchema } from '../assets/schemas/index2';


const initialValues = {
    email: "",
    password: "",
}

const Login = () => {

    const { values, errors, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: initialValues,
        validationSchema: loginSchema,
        onSubmit: (values) => {
            console.log(values);
        }
    });

    const imgArr = [img0, img1, img2, img3, img4];
    const [show, setShow] = useState(false);
    const [num, setNum] = useState(Math.floor(Math.random() * 5) % 5);



    const handleShow = () => {
        setShow(!show);
    }

    return (
        <>
            <div className='container' style={{ backgroundImage: `url(${imgArr[num]})` }}>
                <div className='contain'>
                    <div className='switch-btw'>
                        <Link to="/login" className='link active'>Login</Link>
                        <span className='link'>/</span>
                        <Link to="/signin" className='link'>Sign in</Link>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <InputText title={"email"} val={values.email} setVal={handleChange}
                            hint={"User Email"} error={errors.email} />
                        <InputPass title={"password"} val={values.password} error={errors.password}
                            setVal={handleChange} hint={"Password"} type={show ? "text" : "password"} />
                        <div className='check-box'>
                            <input type="checkbox" name='show' id='show' value={show} onClick={handleShow} />
                            <label htmlFor='show'>show Password</label>
                        </div>
                        <div className='btn-contain'>
                            <button type='submit' className='btn' >Submit</button>
                        </div>
                    </form>
                    <hr />
                    <div className='msg-contain'>
                        <p className='msg'>you can Continue with ...</p>
                    </div>
                    <div className='acc-container'>
                        <button className='icons-btn'><img src={google} className='img'/><span>Google</span></button>
                        <button><img src={facebook} className='img'/><span>Facebook</span></button>
                        <button><img src={apple} className='img'/><span>Apple</span></button>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Login;