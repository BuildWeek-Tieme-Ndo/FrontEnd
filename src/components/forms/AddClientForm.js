import React from 'react';
// import { useDispatch } from 'react-redux';
import { withFormik, Form, Field, ErrorMessage } from 'formik';
import axiosWithAuth from '../../utils/authaxios';
import * as c from '../../actions';

const AddClientForm = props => {
  // const dispatch = props.dispatch;
  console.log("AddClientForm props:", props);

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
            placeholder='Goal'
          />

          <label/>Harvest
          <Field
            className='field'
            name='harvest'
            type='text'
            placeholder='Harvest'
          />

        </div>

        <button type='submit' className='submitBtn'>Add</button>
      </Form>
    </div>
  )

}

//Using Formik ----------------------------------------------------
const FormikAddClientForm = withFormik({

  mapPropsToValues({ name, village, goal, harvest, history, dispatch}) {
    return {
      name: name || '',
      village: village || '',
      user_id: localStorage.getItem('userID'),
      goal: goal || '',
      harvest: harvest || '',
      history: history,
      dispatch: dispatch,
    };
  },

  handleSubmit(values, { setStatus }) {
    // const payload.user_id = localStorage.getItem('userID');
    const payload = {
      name: values.name,
      village: values.village,
      user_id: values.user_id,
      goal: values.goal,
      harvest: values.harvest,
    };
    // authAxios call
    axiosWithAuth().post('https://tiemendo.herokuapp.com/api/auth/clients', payload)
      .then(res => {
        console.log(res.data)
        setStatus(res.data) //TODO: Take out maybe??
        // values.history.push('./clients')
        values.dispatch(c.ADD_CLIENT, res.data);
      })
      .catch( error => {
        console.log("error", error.message)
      })
  }
})(AddClientForm);

export default FormikAddClientForm;