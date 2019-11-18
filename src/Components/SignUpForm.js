import React from './node_modules/react';
import { withFormik, Form, Field } from './node_modules/formik';
import * as Yup from './node_modules/yup';
import axios from './node_modules/axios';


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
        axios.post('', values)
        .then(res => {
            console.log('This is the response from the Axios call: ', res)
            setStatus(res.data);
        })
        .catch(err => console.log('There was an error with the Axios call: ', err.res))
    }
})(SignUpForm)

export default FormikSignUp;