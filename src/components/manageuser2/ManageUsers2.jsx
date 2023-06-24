import { IoIosArrowForward } from 'react-icons/io'
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
                            <div className="review">
                                <p>Review</p>
                                <IoIosArrowForward className="forward-icon" />
                            </div>
                        </div>
                    )
                })}
            </div>

            <div className="detail-section">
                <div className="detail">
                    <div className="detail-container">
                        <p>icon</p>
                        <div className="data">
                            <p>email</p>
                            <p>johndoe@gmail.com</p>

                        </div>
                    </div>
                </div>
                <div className="edit">
                    <button>icon Edit Profile</button>
                    <button>icon Suspend</button>
                    <button>icon delete</button>
                </div>
            </div>
        </div>
    )
}

export default ManageUsers2;