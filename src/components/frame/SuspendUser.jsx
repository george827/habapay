import Render from "./render";
import { useNavigate } from "react-router-dom";
const SuspendUser = () => {
    const navigate = useNavigate();
    const handleCancel = (e) => {
        navigate(-1);
    }
    return (
        <>
            <div className="container-confirm">
                <div className="confirm">
                    <h3>Confirm Suspend</h3>
                </div>
                < Render />
                <div className="delete-cancel">
                    <button className="cancel-btn" onClick={handleCancel} >Cancel</button>
                    <button className="delete-btn">Suspend</button>
                </div>
            </div>
        </>
    );
};

export default SuspendUser;