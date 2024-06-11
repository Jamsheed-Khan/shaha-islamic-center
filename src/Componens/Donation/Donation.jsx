import React from "react";
import "./Donation.css";
export default function Donation() {
  return (
    <div>
      <section className="Donationsec">
        <h1>SUPPORT US,</h1>
        <h1>WE NEED YOUR HELP.</h1>
        <div className="loadbox">
          <div className="load">46%</div>

          <div className="load">67%</div>

          <div className="load">40%</div>
        </div>
        <div className="divname">
          <p>Mosque</p>
          <p>Expenses</p>
          <p>Food Hungry</p>
        </div>
        <div className="para">
          <p>
            May Allah bless you! Thank you. Those who (in charity) spend of
            their goods by night and by day, in secret and in public, have their
            reward with their Lord
          </p>
        </div>
        <div className="btndiv">
          <button className="donatebtn">Donate Now</button>
        </div>
      </section>
    </div>
  );
}
