import * as Yup from "yup";


export const loginSchema=Yup.object({
    email:Yup.string().email().required("Please enter your Email"),
    password:Yup.string().min(6).required("Please Enter your password"),
});