import React from 'react';
import authAxios from '../utils/authaxios';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
// Material UI Table --------------------------------------------------
interface Props {
  rows: [{
    name: '',
    village: '',
    loan_amt: '',
    loan_init: ''
  }]
};


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
          {/* {props.map(row => (
            <TableRow key={props.name}>
              <TableCell component="th" scope="row">{props.name}</TableCell>
              <TableCell>{props.village}</TableCell>
              <TableCell>{props.loan_amt}</TableCell>
              <TableCell>{props.loan_init}</TableCell>
            </TableRow>
          ))} */}
        </TableBody>
      </Table>
    </Paper>
  );
}
//Material UI Table ^^^-------------------------------------------------

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
      {SimpleTable()}
    </>
  )
}

export default Summary;