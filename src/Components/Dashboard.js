import React from 'react';


const Dashboard = props => {

  const userName = localStorage.getItem("userName");
  
  return (
    <div className="main-dashboard workspace">
      <h2>Welcome, {userName}! Below, you will find 3 buttons. Choose wisely.</h2>
      <div className="dashboard-choices">
        <button className="big-button" onClick={() => props.history.push("/reports")}>Reports</button>
        <button className="big-button" onClick={() => props.history.push("/clients")}>Clients</button>
        <button className="big-button" onClick={() => props.history.push("/loans")}>Loans</button>
      </div>

    </div>
  )


}

export default Dashboard;