import React from 'react';
import { useDispatch } from 'react-redux';
import authAxios from '../utils/authaxios';

const LoanList = props => {
  const dispatch = useDispatch();

  authAxios.get('https://tiemendo.herokuapp.com/api/auth/loans')
  .then (res => {
    console.log(res);
    dispatch({
      type: 'LOANS_NEW_LIST',
      payload: res.data
    })
  })
  .catch(err => console.log('Loan list error:', err)
  );

  return (
    <div className="workspace">
      <h2>Check the console for a list of all the loans!</h2>
    </div>
  );
}

export default LoanList;