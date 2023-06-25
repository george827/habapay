import React from "react";
import NewUser from "./dashboard/NewUser";
import PersonIcon from "../assets/undraw.png";
import PersonEdit from "../assets/Vector.png";
import pagination from "../assets/pagination.png";
import { Link } from "react-router-dom";

import sortbarsdrop from "../assets/sortbarsdrop.png";

import { MdArrowDropDown } from "react-icons/md";
import "../App.css";
import Data from "./Data";
const ManageUsers = () => {
  const data = Data();
  return (
    <>

      <div className="my-container">
        <div className="manage-users">
          <div className="userinfo">
            <div className="top-sec">
              <h3>Users</h3>
              <div className="filters">
                <button className="quic-actions">
                  {" "}
                  Quick Actions <MdArrowDropDown />{" "}
                </button>
                <button className="quic-actions">
                  {" "}
                  <span>filter</span>{" "}
                  <img src={sortbarsdrop} alt="dropdown" className="sortbarsdrop" />{" "}
                </button>
              </div>

              <img src={pagination} className="pagination" alt="pagination" />
            </div>
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
                    <Link to="/ManageUsers2" className="link-style">
                    <img src={PersonEdit} alt="user" />
                    <span>...</span>
                    </Link>
                    
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
              <NewUser newlink="/ManageUsers2"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ManageUsers;
