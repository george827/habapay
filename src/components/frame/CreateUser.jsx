import { useNavigate } from 'react-router-dom';
const CreateUser = () => {
    const navigate = useNavigate();
    const handleCancel = (e) => {
        navigate(-1);
    }
    return (
        <>
            <div className="create-user">
                <div className="header">
                    <h3>Create User Account</h3>
                    <p>Enter account details for new account</p>
                </div>
                <div className="fill-form">
                    <div className="form-">
                        <div className="form1">
                            <div className="form-group">
                                <label htmlFor="Name">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="form-control"
                                    placeholder="Enter your Name"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="Private Number">Private Number</label>
                                <input
                                    type="text"
                                    id="Private Number"
                                    name="Private Number"
                                    className="form-control"
                                    placeholder="Enter your Private Number"

                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="Email">Email</label>
                                <input
                                    type="text"
                                    id="Email"
                                    name="Email"
                                    className="form-control"
                                    placeholder="Enter your Email"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="Password">Password</label>
                                <input
                                    type="password"
                                    id="Password"
                                    name="Password"
                                    className="form-control"
                                    placeholder="Enter your Password"
                                />
                            </div>
                        </div>
                        <div className="form2">
                            <div className="form-group">
                                <label htmlFor="Secondary Number">Secondary Number</label>
                                <input
                                    type="text"
                                    id="Secondary Number"
                                    name="Secondary Number"
                                    className="form-control"
                                    placeholder="Enter your Secondary Number"

                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="Business">Business</label>
                                <input
                                    type="text"
                                    id="Business"
                                    name="Business"
                                    className="form-control"
                                    placeholder="Enter your Business"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="Location">Location</label>
                                <input
                                    type="text"
                                    id="Location"
                                    name="Location"
                                    className="form-control"
                                    placeholder="Enter your Location"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="Login PIN">Login PIN</label>
                                <input
                                    type="number"
                                    id="Login PIN"
                                    name="Login PIN"
                                    className="form-control"
                                    placeholder="Enter your Login PIN"
                                />
                            </div>

                        </div>
                    </div>
                </div>
                <div className="delete-cancel">
                    <button className="cancel-btn" onClick={handleCancel}>Cancel</button>
                    <button className="delete-btn">Verify</button>
                </div>
            </div>
        </>
    );
}

export default CreateUser;