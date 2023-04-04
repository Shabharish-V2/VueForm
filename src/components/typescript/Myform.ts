import * as yup from "yup";



export const schema: yup.Schema<unknown> = yup.object({
username: yup.string()
.required("Name is required")
.min(2, "Name should be at least 2 characters")
.matches(/^[A-Za-z]+$/, "Name should only contain letters"),
email: yup.string().required("Email is required").email("Please enter a valid email address"),
password: yup.string().min(6, 'Password must be at least 6 characters').required('password is required')
});
