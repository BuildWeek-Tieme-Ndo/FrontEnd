import React from 'react';
import { useDispatch, connect } from 'react-redux';
// import authAxios from '../utils/authaxios';
import AddClientForm from './forms/AddClientForm';

const ClientList = props => {
  const dispatch = useDispatch();
  console.log("ClientList props:", props);
  // const dispatch = useDispatch();

  // authAxios.get('https://tiemendo.herokuapp.com/api/auth/clients')
  // .then ( res => {
  //   console.log(res);
  //   dispatch({
  //     type: 'CLIENTS_NEW_LIST', // TODO: Figure out how to get the exported version
  //     payload: res.data
  //   });
  // })
  // .catch(err => console.log('Client list error:', err)
  // );

  return (
    <div className="workspace">
      <h2>Choose a client from this fancy list!</h2>
        <ul>
          <li>[map here]</li>
        </ul>
        <AddClientForm dispatch={dispatch} history={props.history}/>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    loans: state.loans,
    clients: state.clients
  }
}

export default connect(mapStateToProps)(ClientList);