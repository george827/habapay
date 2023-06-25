import "./frame.css";
import Render from "./render";
import { useNavigate } from "react-router-dom";

const DeleteUser = () => {
    const navigate = useNavigate();
    const handleCancel = (e) => {
        navigate(-1);
    }
    return (
        <>
            <div className="delete">
                <Render />
                <div className="small-continer">
                <Render className="render-second" />
                </div>

                <div className="delete-cancel">
                    <button className="cancel-btn" onClick={handleCancel} >Cancel</button>
                    <button className="delete-btn">Delete</button>
                </div>
                
            </div>
        </>
    );
}

export default DeleteUser;