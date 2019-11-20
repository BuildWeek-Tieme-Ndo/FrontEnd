import React from 'react';
import authAxios from '../utils/authaxios';

const Summary = () => {

  const getSummary = () => {
    authAxios.get('https://tiemendo.herokuapp.com/api/auth/loans')
    .then (res => console.log(res))
    .catch(err => console.log('Loan list error:', err)
    );
  }

  return (
    <>
      <h2>The summary page. Let's summarize.</h2>
      <button onClick={getSummary}>Get data!</button>
      <p>Expect to see a super-cool table here.</p>
    </>
  )
}

export default Summary;