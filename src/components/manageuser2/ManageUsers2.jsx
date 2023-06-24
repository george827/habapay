import { IoIosArrowForward } from 'react-icons/io'
import { BiSolidPhone } from 'react-icons/bi'
import { ImPhoneHangUp } from 'react-icons/im'
import { AiFillDollarCircle } from 'react-icons/ai'
import { BsPersonFillX, BsFillTrash3Fill } from 'react-icons/bs'
import EditPersonIcon from '../../assets/Vector.png'
import "./manageusers2.css"
const ManageUsers2 = () => {

    const data =[
        {
            id:1,
            transaction: "Withdrew Ksh 50",
            date: "1 March 2023. 01:07Pm"
        },
        {
            id:2,
            transaction: "Withdrew Ksh 240",
            date: "1 March 2023. 01:07Pm"
        },
        {
            id:2,
            transaction: "sent ksh 110 to chris kiribi",
            date: "1 March 2023. 01:07Pm"
        },
        {
            id:2,
            transaction: "Deposite ksh 500 to wallet",
            date: "1 March 2023. 01:07Pm"
        },
        {
            id:2,
            transaction: "Created a Habapay account",
            date: "1 March 2023. 01:07Pm"
        },

    ]

    return (
        <div className="manage2">
            <div className="manage-jon">
                {data.map((item) => {
                    return (
                        <div className="jonh-doe-container">
                            <div className="jon-doe">
                                <p> <span>John Doe</span> {item.transaction}</p>
                                <p className="date-">{item.date}</p>
                            </div>
                            <button type="button" className="review">
                                <p>Review</p>
                                <IoIosArrowForward className="forward-icon" />
                            </button>
                        </div>
                    )
                })}
            </div>

            <div className="detail-section">
                <div className="detail">
                    <div className="detail-container">
                        <p className="details-icon">@</p>
                        <div className="data">
                            <p>Email:</p>
                            <p>johndoe@gmail.com</p>

                        </div>
                    </div>
                    <div className="detail-container">
                        <p className="details-icon"> <BiSolidPhone /> </p>
                        <div className="data">
                            <p>Primary Number:</p>
                            <p>+254707022356</p>

                        </div>
                    </div>
                    <div className="detail-container">
                        <p className="details-icon">< ImPhoneHangUp /></p>
                        <div className="data">
                            <p>Secondary Number:</p>
                            <p>n/a</p>

                        </div>
                    </div>
                    <div className="detail-container">
                        <p className="details-icon"> < AiFillDollarCircle /> </p>
                        <div className="data">
                            <p>Account Balance:</p>
                            <p>Ksh. 2334.0</p>

                        </div>
                    </div>
                </div>
                <div className="edit">
                    <button> <img src={EditPersonIcon} className="edit-icons" alt="BsPersonFillX" /> <p>Edit Profile</p> </button>
                    <button><BsPersonFillX className="edit-icons"/>  <p>Suspend</p></button>
                    <button><BsFillTrash3Fill className="edit-icons" />  <p>Delete</p></button>
                </div>
            </div>
        </div>
    )
}

export default ManageUsers2;