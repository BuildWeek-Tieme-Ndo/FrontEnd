import React from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Axios from 'axios';

function LoginForm({ touched, errors }) {
    return(
        <div className='formDiv'>
            <h2>Login</h2>

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
                    {touched.email && errors.email && (<p>{errors.email}</p>)}
                </div>

                <button type='submit' className='submitBtn'>Login</button>
            </Form>
        </div>
    )
}

//Using Formik ---------------------------
const FormikLogin = withFormik({
    mapPropsToValues({ email, password }) {
        return {
            email: email || '',
            password: password || ''
        }
    },

    //Validation ---------------------------
    validationSchema: Yup.object().shape({
        email: Yup.string()
            .required('Required'),
        password: Yup.string()
            .required('Required')
    }),
    
    //Axios POST call ----------------------
    handleSubmit(values, {setStatus}) {
        Axios.post('', values)
        .then(res => {
            console.log('This is the response from the Axios call: ', res)
            setStatus(res.data)
        })
        .catch(err => console.log('There was an error in the Axios call: ', err))
    }
})(LoginForm)

export default FormikLogin;