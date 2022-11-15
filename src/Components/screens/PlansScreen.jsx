import React from "react";
import "./plansScreen.css";

function PlansScreen() {
  return (
    <div className="PlansScreen">
      <h4>Renewal Date: 04/03/2023</h4>
      <div className="plansScreen__plans">
        <div className="plans">
          <h3>
            Netflix Standard <br />
            <h4>1080p</h4>
          </h3>
          <button className="plansScreen__button">Subscribe</button>
        </div>

        <div className="plans">
          <h3>
            Netflix Basic
            <br />
            <h4> 720p</h4>
          </h3>
          <button className="plansScreen__button">Subscribe</button>
        </div>

        <div className="plans">
          <h3>
            Netflix Premium <br />
            <h4>4K + HDR</h4>
          </h3>
          <button className="plansScreen__button1">Current Package</button>
        </div>
      </div>
    </div>
  );
}

export default PlansScreen;
