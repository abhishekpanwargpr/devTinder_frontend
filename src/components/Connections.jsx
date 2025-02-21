import axios from "axios"
import { BASE_URL } from "../utils/constants"
import { useDispatch, useSelector } from "react-redux"
import {addConnection} from "../utils/connectionSlice"
import { useEffect } from "react"
import ConnectionCard from "./ConnectionCard"
const Connections = () => {
  const dispatch = useDispatch()
  const connections = useSelector((store)=>store.connection)
  const fetchConnections = async () => {
    const res = await axios.get(BASE_URL + "/user/connections", {
      withCredentials: true
    })
    dispatch(addConnection(res.data.data))
  }
  useEffect(()=>{
    fetchConnections()
  },[])
  if(!connections)return;

  if(connections.length === 0)return (<h2 className="text-2xl font-bold text-center">No Connections found</h2>)
  return (
    <div className="flex flex-col text-center">
      <h2 className="text-2xl font-bold">Connections</h2>
      <div className='flex flex-wrap justify-center gap-4'>
        {connections && connections.map((user)=>(<ConnectionCard key= {user._id} user={user}/>))}
      </div>
    </div>
  )
}

export default Connections