import React from 'react';
import { connect } from 'react-redux';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

function SimpleTable(props) {

  return (
    <Paper>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Village</TableCell>
            <TableCell>Loan Amount</TableCell>
            <TableCell>Started</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* props.map(row => (
            <TableRow key={props.name}>
              <TableCell component="th" scope="row">{props.name}</TableCell>
              <TableCell>{props.village}</TableCell>
              <TableCell>{props.loan_amt}</TableCell>
              <TableCell>{props.loan_init}</TableCell>
            </TableRow>
          )) */}
        </TableBody>
      </Table>
    </Paper>
  );
}
//Material UI Table ^^^-------------------------------------------------

const Summary = props => {
  // const dispatch = useDispatch();
  console.log("Summary props:", props);

  let allRows=[];
  for (let i=0; i<props.loans.length; i++) {
    let client = props.clients.find( ({ id }) => id === props.loans[i].client_id);
    console.log(client.name);
    // The next line causes key collisions, so order is important:
    let currentRow = {...client, ...props.loans[i]};
    allRows.push(currentRow);
  }

  console.log(allRows);

  return (
    <div className="workspace">
      <h2>Reports of loan information</h2>

      {SimpleTable(/* Get the state data here */)}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    loans: state.loans,
    clients: state.clients
  }
}

export default connect(mapStateToProps)(Summary);