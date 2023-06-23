import React from "react";
import NewUser from "./dashboard/NewUser";
import PersonIcon from "../assets/undraw.png";
import "../App.css";
import Data from "./Data";
const ManageUsers = () => {
  const data = Data();
  return (
    <div className="my-container">
    <div className="manage-users">
      <div className="userinfo">
        <div className="nav-column">
          <input type="checkbox" />
          <p>Name</p>
          <p>Number</p>
          <p>Email</p>
          <p>Balance (ksh)</p>
          <p>Status</p>
          <p>Manage</p>

        </div>
        {data.map((item) => {
          return (
            <div className="user-" key={item.id}>
              <div className="check-box">
              <input type="checkbox" />
                <img src={item.img} alt="user" />
              </div>
              <div className="details-container">
                <div className="user-info">
                  <h3>{item.name}</h3>
                  <p>{item.cash}</p>
                </div>
                <div className="user-number">
                  <p>{item.number}</p>
                  <p>{item.time}</p>
                </div>
              </div>
            </div>
          );
        }
        )};

      </div>
      <div className="newuser">
        <div className="usericon">
          <img src={PersonIcon} alt="user" />

        </div>
        <div className="new-user-section">
          < NewUser />

        </div>
      </div>

    </div>
    </div>
  );
};


export default ManageUsers;