import * as Yup from "yup";

export const paymentValidation = Yup.object({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    email: Yup.string().email("Invalid email address!").required("Email is required"),
    mobile: Yup.string()
    .required("Mobile number is required!")
    .matches(/^(07\d{8,14})$/,"Mobile number must start with 07 and be between 8-14 digits long!"),
})