import React from 'react';
import { useDispatch, connect } from 'react-redux';
import AddClientForm from './forms/AddClientForm';

const ClientList = props => {
  const dispatch = useDispatch();
  console.log("ClientList props:", props);

  // let allEntries=[];
  // for (let i=0; i<props.clients.length; i++) {
  //   let client = props..find( ({ id }) => id === props.loans[i].client_id);
  //   console.log(client.name);
  //   // The next line causes key collisions, so order is important:
  //   let currentEntry = {...client, ...props.loans[i]};
  //   allEntries.push(currentEntry);
  // }

  let dropdownList = props.clients.map(client => {
    return {name: client.name, id: client.id}
  });

  const handleChange = event => {
    // const dispatch = useDispatch;

    console.log(event.target.value);
  }

  return (
    <div className="workspace">
      <h2>Choose a client from this fancy list!</h2>
        <form>
          <select name="clients" onChange={handleChange}>
            {dropdownList.map(item => (
              <option value={item.id} key={item.id}>
                {item.name}
              </option>
            ))}
          </select>
        </form>
        <AddClientForm dispatch={dispatch} history={props.history}/>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    loans: state.loans,
    clients: state.clients,
    payments: state.payments
  }
}

export default connect(mapStateToProps)(ClientList);