import React from 'react';
import authAxios from '../../utils/authaxios';

const AddLoanForm = () => {

  const payload = {
    client_id:  "",    // Required (not in form)
    loan_amt:   "",    // Required
    init_date:  "",    // Required
    due_date:   "",    // Required
  }

  const handleSubmit = () => {
    // authAxios call
  }

  const handleCancel = () => {
    // history.push individual client page || dashboard
  }

  return (
    <div>
      <h2>Add a new Client</h2>
    </div>
  )

}

export default AddLoanForm;