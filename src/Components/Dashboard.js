import React from 'react';


const Dashboard = () => {

  const userName = localStorage.getItem("userName");
  
  return (
    <div className="main-dashboard workspace">
      <h2>Welcome, {userName}! Below, you will find 3 buttons. Choose wisely.</h2>
      <div className="dashboard-choices">
        <button className="big-button">Reports</button>
        <button className="big-button">Clients</button>
        <button className="big-button">Loans</button>
      </div>

    </div>
  )


}

export default Dashboard;