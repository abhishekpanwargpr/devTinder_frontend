import { Link } from "react-router-dom";

const ConnectionCard = ({user}) => {
    const {_id, firstName, lastName, photoUrl, skills, about, age, gender} = user
    return (
        <div className="card bg-base-300 w-96 shadow-xl">
            <figure>
                <img src={photoUrl}/>
            </figure>
            <div className="card-body">
                <h2 className="card-title">{firstName + " "+ lastName}</h2>
                {age && gender && <p className="text-left font-semibold font-sans">{age+","+gender}</p>}
                <p className="text-left">{about}</p>
                <p className="text-left">{skills}</p>
                <Link to={"/chat/"+_id}><button className="btn btn-primary">Chat</button></Link>
            </div>
        </div>
    )
}

export default ConnectionCard;