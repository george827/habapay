import EditPersonIcon from '../../assets/Vector.png';
import { BsPersonFillX, BsFillTrash3Fill, BsCheckSquareFill } from 'react-icons/bs';
import "./frame.css";
const Render = () => {
    return (
        <>
        <div className="delete-container">
                    <h3>Confirm Delete</h3>
                    <div className="user-details">
                        <div className="check-icon">
                            <p> <BsCheckSquareFill className="icon-frame" /> </p>
                        </div>
                        <div>
                            <h3>Personal Details</h3>
                            <p> <span className="bold-">Name:</span>  John Doe </p>
                            <p> <span className="bold-">Email:</span>  JohnDoe@gamil.com </p>
                            <p> <span className="bold-">Number:</span>  254 766675678 </p>
                            <p> <span className="bold-">Location:</span>  Machakos, Kenya </p>
                        </div>
                        <div>
                            <h3>Account Details</h3>
                            <p> <span className="bold-">status:</span>  John Doe </p>
                            <p> <span className="bold-">Balance:</span>  JohnDoe@gamil.com </p>
                            <p> <span className="bold-">Business:</span>  254 766675678 </p>
                            <p> <span className="bold-">Created::</span>  Machakos, Kenya </p>
                        </div>
                        <div>
                            <h3>Other Actions</h3>
                            <section className="edit-1">
                                <button> <img src={EditPersonIcon} className="edit-icons-1" alt="BsPersonFillX" /> <p>Edit Profile</p> </button>
                                <button><BsPersonFillX className="edit-icons-1" />  <p>Suspend</p></button>
                                <button><BsFillTrash3Fill className="edit-icons-1" />  <p>Delete</p></button>
                            </section>
                        </div>
                    </div>
                </div>
        </>
    );
};

export default Render;