import { Outlet, useNavigate } from "react-router-dom"
import Footer from "./Footer"
import Navbar from "./Navbar"
import axios from "axios"
import { BASE_URL } from "../utils/constants"
import { useDispatch, useSelector } from "react-redux"
import { addUser } from "../utils/userSlice"
import { useEffect } from "react"

const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const userData = useSelector((store)=>store.user);
  const fetchUser = async ()=> {
    try{
    const res = await axios.get(BASE_URL+"/profile/view",{
    withCredentials: true
    })
    dispatch(addUser(res.data.data))
    }
    catch(err){
      if(err.status === 401){
        navigate("/login")
      }
      console.error(err)
    }
  }
  useEffect(()=>{
    if(!userData){
      fetchUser()
    }
  }, [])
  return (
    <div className="min-h-screen flex flex-col">
    <Navbar/>
    <Outlet/>
    <Footer/>
    </div>
  )
}

export default Body