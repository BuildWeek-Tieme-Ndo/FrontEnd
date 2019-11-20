import React from 'react';
import authAxios from '../utils/authaxios';

const ClientList = props => {

  authAxios.get('https://tiemendo.herokuapp.com/api/auth/clients')
  .then (res => console.log(res))
  .catch(err => console.log('Client list error:', err)
  );

  return (
    <div className="workspace">
      <h2>Check the console for a list of all the clients!</h2>
    </div>
  );
}

export default ClientList;