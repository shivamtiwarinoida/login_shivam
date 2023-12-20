import * as Yup from "yup";


export const signUpSchema=Yup.object({
    name:Yup.string().min(2).max(25).required("Please Enter your Name"),
    referral_id:Yup.string().min(4).max(30),
    college:Yup.string().min(3).max(100).required("Please Enter your College Name"),
    phone:Yup.number().lessThan(100000000000).required("Please enter your Phone Number"),
    email:Yup.string().email().required("Please enter your Email"),
    password:Yup.string().min(6).required("Please Enter your password"),
    confirm_password:Yup.string().required("Password must Match").oneOf([Yup.ref('password')],null)
});