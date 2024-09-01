import React from "react";
import "./ConstitutionStats.css"; // Make sure to create and import the corresponding CSS file

const Cons = () => {
  return (
    <div className="stats-container">
      <h2>Constitution Highlights</h2>
      <div className="stats-grid">
        <div className="stat-item">
          <div className="stat-icon icon1"></div>
          <h3>448</h3>
          <p>Articles</p>
        </div>
        <div className="stat-item">
          <div className="stat-icon icon2"></div>
          <h3>12</h3>
          <p>Schedules</p>
        </div>
        <div className="stat-item">
          <div className="stat-icon icon3"></div>
          <h3>6</h3>
          <p>Fundamental Rights</p>
        </div>
        <div className="stat-item">
          <div className="stat-icon icon4"></div>
          <h3>5</h3>
          <p>Fundamental Duties</p>
        </div>
      </div>
    </div>
  );
};

export default Cons;
