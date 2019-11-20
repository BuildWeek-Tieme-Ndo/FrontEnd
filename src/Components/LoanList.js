import React from 'react';
import authAxios from '../utils/authaxios';

const LoanList = props => {

  authAxios.get('https://tiemendo.herokuapp.com/api/auth/loans')
  .then (res => console.log(res))
  .catch(err => console.log('Loan list error:', err)
  );

  return (
    <div className="workspace">
      <h2>Check the console for a list of all the loans!</h2>
    </div>
  );
}

export default LoanList;