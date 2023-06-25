// import EditPersonIcon from '../../assets/Vector.png';
// import { BsPersonFillX, BsFillTrash3Fill, BsCheckSquareFill } from 'react-icons/bs';
import "./frame.css";
import Render from "./render";

const Frame198 = () => {
    return (
        <>
            <div className="delete">
                <Render />
                <div className="small-continer">
                <Render className="render-second" />
                </div>

                <div className="delete-cancel">
                    <button className="cancel-btn">Cancel</button>
                    <button className="delete-btn">Delete</button>
                </div>
                
            </div>
        </>
    );
}

export default Frame198;