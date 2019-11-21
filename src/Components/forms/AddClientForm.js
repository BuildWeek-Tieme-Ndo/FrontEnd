import React from 'react';
import { withFormik, Form, Field, ErrorMessage } from 'formik';
import authAxios from '../../utils/authaxios';

const AddClientForm = () => {

  const payload = {
    name:     "",    // Required
    village:  "",    // Optional ( Let's make this required )
    user_id:  "",    // Required ( Not in form )
    goal:     "",    // Optional
    harvest:  "",    // Optional
  }

  const handleSubmit = (values, { setStatus }) => {
    payload.user_id = localStorage.getItem('userID');
    // authAxios call
    authAxios.get('https://tiemendo.herokuapp.com/api/', payload)
      .then(res => {
        console.log(res.data)
        setStatus(res.data) //TODO: Take out maybe??
        values.history.push('./clients')
      })
      .catch( error => {
        console.log("error", error.message)
      })
  };

  return (
    <div>
      <h2>Add a new Client</h2>

      <Form className='form'>
        <div className='flexDiv'>
          <label/>Name
          <Field
             className='field'
             name='name'
             type='text'
             placeholder='Name'
           />
          <ErrorMessage name="name" component='p' className='error'/>

          <label/>Village
          <Field
            className='field'
            name='village'
            type='text'
            placeholder='Village'
          />
          <ErrorMessage name="village" component='p' className='error'/>

          <label/>Goal
          <Field
            className='field'
            name='goal'
            type='text'
            placeholder='Due Date'
          />

          <label/>Harvest
          <Field
            className='field'
            name='harvest'
            type='text'
            placeholder='Due Date'
          />

        </div>

        <button type='submit' className='submitBtn'>Sign Up</button>
      </Form>
    </div>
  )

}

//Using Formik ----------------------------------------------------
const FormikAddClientForm = withFormik({
  mapPropsToValues({ name, village, goal, harvest, history }) {
    return {
      name: name || '',
      village: village || '',
      goal: goal || '',
      harvest: harvest || '',
      history: history
    };
  },
})(AddClientForm);

export default FormikAddClientForm;