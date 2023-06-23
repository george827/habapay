import React from "react";
import NewUser from "./dashboard/NewUser";
import PersonIcon from "../assets/undraw.png";
import PersonEdit from "../assets/Vector.png";
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
            <p className="email--">Email</p>
            <p>Balance (ksh)</p>
            <p>Status</p>
            <p>Manage</p>
          </div>
          {data.map((item) => {
            return (
              <div className="user-" key={item.id}>
                <input type="checkbox" className="check-box" />

                <div className="name">
                  <p>{item.name}</p>
                </div>
                <div className="number">
                  <p>{item.number}</p>
                </div>
                <div className="email">
                  <p>{item.email}</p>
                </div>
                <div className="balance">
                  <p>{item.cash}</p>
                </div>
                <div className="status">
                  <p>{item.status}</p>
                </div>
                <div className="manage">
                  <img src={PersonEdit} alt="user" />
                  <span>...</span>
                </div>
              </div>
            );
          })}
        </div>
        <div className="newuser">
          <div className="usericon">
            <img src={PersonIcon} alt="user" />
          </div>
          <div className="new-user-section">
            <NewUser />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageUsers;
