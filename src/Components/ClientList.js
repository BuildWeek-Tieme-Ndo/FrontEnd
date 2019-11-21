import React from 'react';
import { useDispatch } from 'react-redux';
import authAxios from '../utils/authaxios';

const ClientList = props => {

  const dispatch = useDispatch();

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
    <div className="workspace">
      <h2>Check the console for a list of all the clients!</h2>
    </div>
  );
}

export default ClientList;