const UserCard = ({user}) => {
    const {firstName, lastName, photoUrl, skills, about, age, gender} = user
    return (
        <div className="card bg-base-300 w-96 shadow-xl">
            <figure className="w-50 mx-20 my-2">
                <img src={photoUrl}/>
            </figure>
            <div className="card-body">
                <h2 className="card-title">{firstName + " "+ lastName}</h2>
                <p>{about}</p>
                
                {age && gender && <p>{age+","+gender}</p>}
                <div className="card-actions justify-center my-2">
                    <button className="btn btn-success">Interested</button>
                    <button className="btn btn-error">Ignore</button>
                </div>
            </div>
        </div>
    )
}

export default UserCard