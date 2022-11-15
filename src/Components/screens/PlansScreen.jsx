import React from "react";
import "./plansScreen.css";

function PlansScreen() {
  return (
    <div className="PlansScreen">
      <h4>Renewal Date: 04/03/2023</h4>
      <div className="plansScreen__plans">
        <div className="plans">
          <h3>Netflix Standard</h3>
          <button className="plansScreen__button">Subscribe</button>
        </div>

        <div className="plans">
          <h3>Netflix Basic</h3>
          <button className="plansScreen__button">Subscribe</button>
        </div>

        <div className="plans">
          <h3>Netflix Premium</h3>
          <button className="plansScreen__button1">Current Package</button>
        </div>
      </div>
    </div>
  );
}

export default PlansScreen;
