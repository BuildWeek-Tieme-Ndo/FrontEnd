import React from 'react';
import authAxios from '../../utils/authaxios';

const AddClientForm = () => {

  const payload = {
    name:     "",    // Required
    village:  "",    // Optional ( Let's make this required )
    user_id:  "",    // Required ( Not in form )
    goal:     "",    // Optional
    harvest:  "",    // Optional
  }

  const handleSubmit = () => {
    // authAxios call
  }

  const handleCancel = () => {
    // history.push all-clients page || dashboard
  }

  return (
    <div>
      <h2>Add a new Client</h2>
    </div>
  )

}

export default AddClientForm;