import React from 'react';
import { useDispatch, connect } from 'react-redux';
// import authAxios from '../utils/authaxios';

const LoanList = props => {
  // const dispatch = useDispatch();

  // authAxios.get('https://tiemendo.herokuapp.com/api/auth/loans')
  // .then (res => {
  //   console.log(res);
  //   dispatch({
  //     type: 'LOANS_NEW_LIST',
  //     payload: res.data
  //   })
  // })
  // .catch(err => console.log('Loan list error:', err)
  // );

  return (
    <div className="workspace">
      <h2>Insert Loan Table here.</h2>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    loans: state.loans,
    clients: state.clients
  }
}

export default connect(mapStateToProps)(LoanList);