import React from 'react';
import '../../style.css';
const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="cards">
        <div className="card1">TotalEmployee</div>
        <div className="card2">Number of Female</div>
        <div className="card3">Number of Male</div>
      </div>
      <div className="charts">
        <div className="chart1">chart1</div>
        <div className="chart2">chart2</div>
      </div>
    </div>
  );
};
export default Dashboard
