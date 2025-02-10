import axios from 'axios';
import { useState } from 'react'
import { BASE_URL } from '../utils/constants';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

const SignUp = () => {
    const [emailId, setEmailId] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [error, setError] = useState("");
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const signUpHandler = async () => {
        try {
            const res = await axios.post(BASE_URL + "/signUp", { emailId, password, firstName, lastName }, {
                withCredentials: true
            })
            dispatch(addUser(res.data.data))
            navigate("/profile")
        } catch (err) {
            setError(err.response.data)
        }
    }
    return (
        <div className="flex justify-center">
            <div className="card bg-base-200 w-96 shadow-xl">
                <div className="card-body justify-center">
                    <label className="form-control w-full max-w-xs my-2">
                        <div className="label">
                            <span className="label-text">First Name</span>
                        </div>
                        <input
                            type="text"
                            className="input input-bordered w-full max-w-xs"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    </label>
                    <label className="form-control w-full max-w-xs my-2">
                        <div className="label">
                            <span className="label-text">Last Name </span>
                        </div>
                        <input
                            type="text"
                            className="input input-bordered w-full max-w-xs"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                        <label className="form-control w-full max-w-xs my-2">
                            <div className="label">
                                <span className="label-text">Email ID</span>
                            </div>
                            <input
                                type="text"
                                className="input input-bordered w-full max-w-xs"
                                value={emailId}
                                onChange={(e) => setEmailId(e.target.value)}
                            />
                        </label>
                        <label className="form-control w-full max-w-xs my-2">
                            <div className="label">
                                <span className="label-text">Password</span>
                            </div>
                            <input
                                type="password"
                                className="input input-bordered w-full max-w-xs"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </label>
                    </label>
                    <p className="text-red-500 text-center">{error}</p>
                    <div className="card-actions justify-center my-2">
                        <button className="btn btn-primary" onClick={signUpHandler}>Sign Up</button>
                    </div>
                    <p className="text-center">Existing User?
                        <Link className="mx-2 underline" to="/login">Login</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default SignUp