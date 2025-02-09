const RequestCard = ({ user }) => {
    const { firstName, lastName, photoUrl, skills, about, age, gender } = user
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
                    <button className="btn btn-secondary">Accept</button>
                    <button className="btn btn-primary">Reject</button>
                </div>
            </div>
        </div>
    )
}

export default RequestCard