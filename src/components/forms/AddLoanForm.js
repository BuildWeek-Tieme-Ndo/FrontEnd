import React, { useEffect } from 'react';
import { withFormik, Form, Field, ErrorMessage } from 'formik';
import authAxios from '../../utils/authaxios';

const AddLoanForm = () => {

  const payload = {
    client_id:  "",    // Required (not in form)
    loan_amt:   "",    // Required
    init_date:  "",    // Required
    due_date:   "",    // Required
  }

  const handleSubmit = (values, { setStatus }) => {
     payload.client_id = localStorage.getItem('userID');
    // authAxios call
    authAxios.put('https://tiemendo.herokuapp.com/api/', payload)
      .then(res => {
        console.log(res.data);
        setStatus(res.data); //TODO: Take out maybe??
        values.history.push('./loans');
      })
      .catch( error => {
        console.log("error", error.message);
      })
  };

  return (
    <div>
      <h2>Add a new Client</h2>

      <Form className='form'>
        <div className='flexDiv'>
          <label/>Loan Amount
          <Field
             className='field'
             name='loan-amt'
             type='text'
             placeholder='Amount'
           />
          <ErrorMessage name="loan_amt" component='p' className='error'/>

          <label/>Initial Date
          <Field
            className='field'
            name='init_date'
            type='text'
            placeholder='Date'
          />
          <ErrorMessage name="init_date" component='p' className='error'/>

          <label/>Due Date
          <Field
            className='field'
            name='due_date'
            type='text'
            placeholder='Due Date'
          />
          <ErrorMessage name="due_date" component='p' className='error'/>
        </div>

        <button type='submit' className='submitBtn'>Sign Up</button>
      </Form>
    </div>
  )

}

//Using Formik -----------------------------------------------
const FormikAddLoanForm = withFormik({
  mapPropsToValues({ loan_amt, init_date, due_date, history }) {
    return {
      loan_amt: loan_amt || '',
      init_date: init_date || '',
      due_date: due_date || '',
      history: history
    };
  },
})(AddLoanForm);

export default FormikAddLoanForm;