import React from 'react';
import { withFormik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

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
              placeholder='Email'g
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
        <button type='submit'
          className='submitBtn'>Login</button>
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
    const payload = {
      email: values.email,
      password: values.password 
    };
    console.log("Sending:",payload);

    axios.post('https://tiemendo.herokuapp.com/api/login', payload)
    .then(res => {
      console.log('Success:', res.data);
      localStorage.setItem('token', res.data.payload);
    })
    .catch(err => console.log('Login Error', err));
  }
})(LoginForm)

export default FormikLogin;