import React from 'react';
import { withFormik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';


function SignUpForm({touched, errors}) {
    return(
        <div className='formDiv'>
            <h2>Sign Up</h2>

            <Form className='form'>
                <div className='flexDiv'>
                    <label/>Name
                    <Field
                        className='field'
                        name='name'
                        type='text'
                        placeholder='Name'
                    />
                    <ErrorMessage name="email" component='p' className='error'/>

                    <label/>Email
                    <Field
                        className='field'
                        name='email'
                        type='email'
                        placeholder='Email'
                    />
                    <ErrorMessage name="email" component='p' className='error'/>

                    <label/>Password
                    <Field
                        className='field'
                        name='password'
                        type='password'
                        placeholder='Password'
                    />
                    <ErrorMessage name="password" component='p' className='error'/>
                </div>

                <label/>
                <Field
                    className='field'
                    name='confirmPassword'
                    type='password'
                    placeholder='Confirm Password'
                />
                <ErrorMessage name="confirmPassword" component='p' className='error'/>

                <button type='submit' className='submitBtn'>Sign Up</button>
            </Form>
        </div>
    )
}

//Using Formik -----------------------------------------------
const FormikSignUp = withFormik({
    mapPropsToValues({ name, email, password, confirmPassword }) {
        return {
            name: name || '',
            email: email || '',
            password: password || '',
            confirmPassword : confirmPassword || ''
        };
    },

    //Validation ----------------------------------------------
    validationSchema: Yup.object().shape({
        name: Yup.string()
            .required('Required'),
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
            name: values.name,
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