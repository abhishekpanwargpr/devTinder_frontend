import axios from "axios";
import {useState } from "react"
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";
const Login = () => {
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const loginHandler = async()=>{
    try {
      const res = await axios.post(BASE_URL+"/login", {
        emailId, password
      }, {withCredentials: true})
      
      dispatch(addUser(res.data.data))
      navigate("/")
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
            <span className="label-text">Email ID</span>
          </div>
          <input
           type="text" 
           className="input input-bordered w-full max-w-xs" 
           value={emailId}
           onChange={(e)=>setEmailId(e.target.value)}
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
            onChange={(e)=>setPassword(e.target.value)}
          />
        </label>
        <p className="text-red-500 text-center">{error}</p>
        <div className="card-actions justify-center my-2">
          <button className="btn btn-primary" onClick={loginHandler}>Login</button>
        </div>
          <p className="text-center">New User?
            <Link className="mx-2 underline" to="/signUp">SignUp</Link>
            <Link className="mx-1 underline" to="/forget-password">Forget Password?</Link>
          </p>
      </div>
    </div>
    </div>
  )
}
export default Login