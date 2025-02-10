const ProfileCard = ({ user }) => {
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
            </div>
        </div>
    )
}
export default ProfileCard