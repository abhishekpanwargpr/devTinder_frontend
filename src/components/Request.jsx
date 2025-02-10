import axios from "axios"
import { BASE_URL } from "../utils/constants"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { addRequest } from "../utils/requestSlice"
import RequestCard from "./RequestCard"
const Requests = () => {
  const dispatch = useDispatch()
  const requests = useSelector((store)=>store.request)
  const fetchRequests = async () => {
    const res = await axios.get(BASE_URL + "/user/requests/received", {
      withCredentials: true
    })
    dispatch(addRequest(res.data.allRequests))
  }
  useEffect(()=>{
    fetchRequests()
  },[])
  
  if(!requests)return;
  
  if(requests.length === 0){
    return (<h2 className="text-2xl font-bold text-center">No Requests found</h2>)
  }

  return (
    <div className="flex flex-col text-center">
      <div className='flex flex-wrap justify-center gap-4'>
        {requests &&
         requests.map((user)=>(<RequestCard key= {user._id} user={user.fromUserId}/>))
        }
      </div>
    </div>
  )
}
export default Requests;