import Render from "./render";
const ConfirmSpend = () => {
    return (
        <>
            <div className="container-confirm">
                <div className="confirm">
                    <h3>Confirm Suspend</h3>
                </div>
                < Render />
                <div className="delete-cancel">
                    <button className="cancel-btn">Cancel</button>
                    <button className="delete-btn">Suspend</button>
                </div>
            </div>
        </>
    );
};

export default ConfirmSpend;