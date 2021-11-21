import {useFormik} from  "formik";
import * as yup from 'yup';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


const formValidationSchema = yup.object({
    email: yup.string()
                .min(5,"Minimum length of email should be 5 chars")
                .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, "Invalid Email Address")
                .required("Mandatory field"),
    password : yup.string()
                    .min(8,"Minimum length of password should be 5 chars")
                    .max(12,"Max length of password should be 12 chars")
                    .required("Mandatory field"),
})

export function BasicForm() {
    const {handleSubmit,values,handleBlur,handleChange,errors,touched} = useFormik({
        initialValues : {email: "",password:""},
        validationSchema:formValidationSchema,
        onSubmit :(values) => {
            console.log("onSubmit", values);
        },
    });

    return(
        <form onSubmit ={handleSubmit}>
            <div className="basic-form">
                <div className="login-headers">
                    < img className={"guvi-logo"} alt={"GUVI Logo"} src={"http://surl.li/asyxu"} />  
                    <h3>Login </h3>
                </div>

                <TextField
                    
                    id="email"
                    label="Email ID"
                    variant="outlined"
                    value={values.email}
                    onChange={handleChange}
                    onBlur = {handleBlur}
                    type="email"
                    placeholder="Please enter your email"
                    helperText = {errors.email && touched.email ? errors.email : ""}
                />
                
                <TextField
                    id="password"
                    label="Password"
                    variant="outlined"
                    value={values.password}
                    onChange={handleChange}
                    onBlur = {handleBlur}
                    type="password"
                    placeholder="Please enter your password"
                    helperText = {errors.password && touched.password ? errors.password : ""}
                />
                
                <Button variant="contained" color="success" type="submit">Submit</Button>
            </div>
        </form>
    )
}

