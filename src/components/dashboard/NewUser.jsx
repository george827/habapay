import { IoIosArrowForward } from 'react-icons/io'
import PersonIcon from "../../assets/Vector.png";
import Data from "../Data";
const NewUser = () => {
    const data = Data();
  return (
    <div className="new-users">
      <div className="users-new">
        <h3>New Users</h3>
        <button type="button" className="view">
          <p>view All</p>
          <IoIosArrowForward className="forward-icon" />
        </button>
      </div>
      <p>5th March 2023</p>
      {data.map((item) => {
        return (
          <div className="new-user-info">
            <div className="info">
              <h4>{item.name}</h4>
              <p>{item.email}</p>
            </div>
            <div className="info-icon">
              <img src={PersonIcon} alt="" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default NewUser;
