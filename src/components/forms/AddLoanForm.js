import React from 'react';
import { withFormik, Form, Field, ErrorMessage } from 'formik';
import authAxios from '../../utils/authaxios';
// import * as Yup from 'yup';

const AddLoanForm = () => {
  // console.log ("AddLoanForm Props:", props);
  const payload = {
    client_id:  "",    // Required
    loan_amt:   "",    // Required
    init_date:  "",    // Required
    due_date:   "",    // Required
  }

  const handleSubmit = (values, { setStatus }) => { // FIXME: Why isn't this called?
    // payload.client_id = localStorage.getItem('userID');
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

  // TODO: Change client ID to dropdown
  return (
    <div>
      <h2>Add a new Loan</h2>

      <Form className='form'>
        <div className='flexDiv'>
        <label/>Client Name/ID
          <Field
            className='field'
            name='client_id'
            type='number'
            placeholder='Client ID'
          />

          <label/>Loan Amount
          <Field
            className='field'
            name='loan-amt'
            type='text'
            placeholder='Amount (Cedi)'
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

        <button type='submit' className='submitBtn'>Add</button>
      </Form>
    </div>
  )

}

//Using Formik -----------------------------------------------
const FormikAddLoanForm = withFormik({
  mapPropsToValues({ client_id, loan_amt, init_date, due_date, history }) {
    return {
      client_id: client_id || '',
      loan_amt: loan_amt || '',
      init_date: init_date || '',
      due_date: due_date || '',
      history: history
    };
  },
})(AddLoanForm);

export default FormikAddLoanForm;
