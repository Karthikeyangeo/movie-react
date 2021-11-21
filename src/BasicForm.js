import {useFormik} from  "formik";

const formValidation = (values)=>{
    const errors ={};
    console.log("formValidation",values);
    if(values.email.length < 5){
        errors.email ="Please enter min 5 characters"
    }
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
      }
    if(values.password.length < 8){
        errors.password = "Please enter min 8 characters"
    }
    console.log(errors)
    return errors;
}


export function BasicForm() {
    const formik = useFormik({
        initialValues : {email: "guvi",password:""},
        validate:formValidation,
        onSubmit :(values) => {
            console.log("onSubmit", values);
        },
    });

    return(
        <form onSubmit ={formik.handleSubmit}>
            <input
                id="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                type="email"
                placeholder="Please enter your email"
            />

            <input
                id="password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                type="password"
                placeholder="Please enter your password"
            />
            {formik.errors.password}
            <button type="submit">Submit</button>

        </form>
    )
}
