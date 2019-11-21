import React from 'react';
import { useDispatch } from 'react-redux';
import authAxios from '../utils/authaxios';

const Dashboard = props => {
  const userName = localStorage.getItem("userName");
  const dispatch = useDispatch();

  // -- Get loans --
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

  // -- Get clients --
  authAxios.get('https://tiemendo.herokuapp.com/api/auth/clients')
  .then ( res => {
    console.log(res);
    dispatch({
      type: 'CLIENTS_NEW_LIST', // TODO: Figure out how to get the exported version
      payload: res.data
    });
  })
  .catch(err => console.log('Client list error:', err)
  );

  return (
    <div className="main-dashboard workspace">
      <h2>Welcome, {userName}! Please choose an option.</h2>
      <div className="dashboard-choices">
        <button className="big-button" onClick={() => props.history.push("/reports")}>Reports</button>
        <button className="big-button" onClick={() => props.history.push("/clients")}>Clients</button>
        <button className="big-button" onClick={() => props.history.push("/loans")}>Loans</button>
      </div>

    </div>
  )


}

export default Dashboard;