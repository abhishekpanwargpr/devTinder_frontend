import axios from "axios"
import { BASE_URL } from "../utils/constants"
import { useDispatch } from "react-redux";
import { removeRequest } from "../utils/requestSlice"
const RequestCard = ({ user }) => {
    const { _id, firstName, lastName, photoUrl, skills, about, age, gender } = user
    const id = _id.toString();
    const dispatch = useDispatch()
    const requestHandler = async (status, id) => {
        try {
            await axios.post(BASE_URL + "/request/review/" + status + "/" + id, {}, {
                withCredentials: true
            })
            dispatch(removeRequest(_id))
        } catch (err) {
            console.error(err.request.data)
        }
    }
    return (
        <div className="card bg-base-300 w-96 shadow-xl">
            <figure>
                <img src={photoUrl} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{firstName + " " + lastName}</h2>
                {age && gender && <p>{age + "," + gender}</p>}
                <p>{about}</p>
                <div className="card-actions justify-center my-2">
                    <button className="btn btn-secondary" onClick={() => requestHandler("accepted", id)}>Accept</button>
                    <button className="btn btn-primary" onClick={() => requestHandler("rejected", id)}>Reject</button>
                </div>
            </div>
        </div>
    )
}

export default RequestCard