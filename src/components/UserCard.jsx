import axios from "axios";
import {BASE_URL} from "../utils/constants"
import { useDispatch } from "react-redux";
import { removeFeed } from "../utils/feedSlice";
const UserCard = ({user}) => {
    const {_id, firstName, lastName, photoUrl, skills, about, age, gender} = user
    const id = _id.toString();
    const dispatch = useDispatch()
    const feedHandler = async(status, id)=>{
        try {
            await axios.post(BASE_URL+"/request/send/"+status+"/"+id, {}, {
                withCredentials: true
            })
            dispatch(removeFeed(id));
        } catch (err) {
            console.error(err.request.data)
        }
    }
    return (
        <div className="card bg-base-300 w-96 shadow-xl">
            <figure>
                <img src={photoUrl}/>
            </figure>
            <div className="card-body">
                <h2 className="card-title">{firstName + " "+ lastName}</h2>
                {age && gender && <p>{age+","+gender}</p>}
                <p>{about}</p>
                <div className="card-actions justify-center my-2">
                    <button className="btn btn-success" onClick={()=>feedHandler("interested", id)}>Interested</button>
                    <button className="btn btn-error" onClick={()=>feedHandler("ignored", id)}>Ignore</button>
                </div>
            </div>
        </div>
    )
}

export default UserCard