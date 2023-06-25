import Graph from "../../assets/frame154.png";
import "../../App.css";
import NewUser from "./NewUser";
// import { Link } from "react-router-dom";
// import { IoIosArrowForward } from 'react-icons/io'

import Data from "../Data";
const ManageUsers = () => {
  const data = Data();

  return (
    <>
      {/* <div className="manage">
    <Link to="/manageusers" className="manage-users-d">
            <p>Manage users</p>
            <IoIosArrowForward className="forward-icon" />
          </Link>
    </div> */}
      <div className="dashboard-container">
        <div className="gra">
          <div className="numbers-container">
            <p>500k</p>
            <p>400k</p>
            <p>300k</p>
            <p>200k</p>
            <p>100k</p>
            <p>0</p>
          </div>
          <div className="graph-container">
            <img src={Graph} className="img-graph" alt="graph" />
            <div className="legend">
              <p>LEGEND</p>
              <div className="research">
                <p>
                  <span className="span- circle-p">
                  <input type="radio" checked="true" />                    
                    </span> New Users
                </p>
                <p>
                  <span className="span- circle-d">
                  <input type="radio" checked="true" />                    
                    </span> National Research
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="user-section">
          <div className="old-users">
            {data.map((item) => {
              return (
                <div className="user" key={item.id}>
                  <div className="user-img">
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
            })}
          </div>
          < NewUser newlink="/manageusers" />
        </div>
      </div>
    </>
  );
};

export default ManageUsers;
