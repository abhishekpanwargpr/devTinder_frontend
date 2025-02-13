import axios from "axios";
import { useState } from "react";
import { BASE_URL } from "../utils/constants";
import { useNavigate } from "react-router-dom";

const Password = () => {
    const [password, setPassword] = useState("");
    const navigate = useNavigate()
    const [error, setError] = useState("");
    const resetPasswordHandler = async () => {
        try {
            await axios.patch(BASE_URL + "/forget-password", { password }, {
                withCredentials: true
            })
            navigate("/login")
        } catch (err) {
            setError(err?.request?.data)
        }
    }
    return (
        <div className="flex justify-center">
            <div className="card bg-base-200 w-96 shadow-xl">
                <div className="card-body justify-center">
                    <label className="form-control w-full max-w-xs my-2">
                        <div className="label">
                            <span className="label-text">Please reset your password</span>
                        </div>
                        <input
                            type="password"
                            className="input input-bordered w-full max-w-xs"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </label>
                    <p className="text-red-500 text-center">{error}</p>
                    <div className="card-actions justify-center my-2">
                        <button className="btn btn-primary" onClick={resetPasswordHandler}>Reset Password</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Password