import React from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';


function SignUpForm({touched, errors}) {
    return(
        <div className='formDiv'>
            <h2>Sign Up</h2>

            <Form className='form'>
                <div className='flexDiv'>
                    <label/>Email
                    <Field
                        className='field'
                        name='email'
                        type='email'
                        placeholder='Email'
                    />
                    {touched.email && errors.email && (<p>{errors.email}</p>)}

                    <label/>Password
                    <Field
                        className='field'
                        name='password'
                        type='password'
                        placeholder='Password'
                    />
                    {touched.password && errors.password && (<p>{errors.password}</p>)}
                </div>

                <label/>
                <Field
                    className='field'
                    name='confirmPassword'
                    type='password'
                    placeholder='Confirm Password'
                />
                {touched.confirmPassword && errors.confirmPassword && (<p>{errors.confirmPassword}</p>)}

                <button type='submit' className='submitBtn'>Sign Up</button>
            </Form>
        </div>
    )
}

//Using Formik -----------------------------------------------
const FormikSignUp = withFormik({
    mapPropsToValues({ email, password, confirmPassword }) {
        return {
            email: email || '',
            password: password || '',
            confirmPassword : confirmPassword || ''
        };
    },

    //Validation ----------------------------------------------
    validationSchema: Yup.object().shape({
        email: Yup.string()
            .required('Required'),
        password: Yup.string()
            .required('Required'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Required')    
    }),

    //Axios POST call -----------------------------------------
    handleSubmit(values, {setStatus}) {
        const payload = {
            name: "Michael Bolton",
            email: values.email,
            password: values.password
        };
        axios.post('https://tiemendo.herokuapp.com/api/register', payload)
        .then(res => {
            console.log('Sucessfully registered:', res);
            setStatus(res.data);
        })
        .catch(err => console.log('Registration error:', err.res))
    }
})(SignUpForm)

export default FormikSignUp;