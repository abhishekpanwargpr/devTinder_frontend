import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { BASE_URL } from '../utils/constants';
import axios from 'axios';
import UserCard from './UserCard';
import { addUser } from '../utils/userSlice';

const EditProfile = ({ user }) => {
    const [firstName, setFirstName] = useState(user.firstName);
    const [lastName, setLastName] = useState(user.lastName);
    const [photoUrl, setPhotoUrl] = useState(user.photoUrl);
    const [about, setAbout] = useState(user.about);
    const [gender, setGender] = useState(user.gender);
    const [skills, setSkills] = useState(user.skills || []);
    const [age, setAge] = useState(user.age);
    const [error, setError] = useState("");
    const [skillInput, setSkillInput] = useState(""); // New state for skill input

    const [toast, setToast] = useState(false);
    const dispatch = useDispatch();

    const saveProfileHandler = async () => {
        try {
            const res = await axios.patch(BASE_URL + "/profile/edit", { firstName, lastName, photoUrl, skills, about, age, gender }, {
                withCredentials: true
            });
            dispatch(addUser(res.data.data));
            setToast(true)
            setTimeout(() => {
                setToast(false)
            }, 3000);
        } catch (err) {
            setError(err.response.data);
        }
    };

    const handleSkillAdd = (e) => {
        if (e.key === "Enter" && skillInput.trim()) {
            setSkills([...skills, skillInput.trim()]); // Add new skill to the array
            setSkillInput(""); // Clear input field
            e.preventDefault(); // Prevent new line in textarea
        }
    };
    return (
        <>
            <div className='flex justify-center my-2'>
                <div className="flex justify-center mx-4">
                    <div className="card bg-base-200 w-96 shadow-xl">
                        <div className="card-body justify-center">
                            <label className="form-control w-full max-w-xs my-2">
                                <div className="label">
                                    <span className="label-text">First Name:</span>
                                </div>
                                <input
                                    type="text"
                                    className="input input-bordered w-full max-w-xs"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                />
                            </label>

                            <label className="form-control w-full max-w-xs my-2">
                                <div className="label">
                                    <span className="label-text">Last Name: </span>
                                </div>
                                <input
                                    type="text"
                                    className="input input-bordered w-full max-w-xs"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                />
                            </label>

                            <label className="form-control w-full max-w-xs my-2">
                                <div className="label">
                                    <span className="label-text">Age: </span>
                                </div>
                                <input
                                    type="text"
                                    className="input input-bordered w-full max-w-xs"
                                    value={age}
                                    onChange={(e) => setAge(e.target.value)}
                                />
                            </label>

                            <label className="form-control w-full max-w-xs my-2">
                                <div className="label">
                                    <span className="label-text">Gender: </span>
                                </div>
                                <select className="input input-bordered w-full max-w-xs"
                                    value={gender}
                                    onChange={(e) => setGender(e.target.value)}
                                >
                                    <option value="" disabled>Select</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                            </label>

                            <label className="form-control w-full max-w-xs my-2">
                                <div className="label">
                                    <span className="label-text">Photo Url: </span>
                                </div>
                                <input
                                    type="text"
                                    className="input input-bordered w-full max-w-xs"
                                    value={photoUrl}
                                    onChange={(e) => setPhotoUrl(e.target.value)}
                                />
                            </label>

                            {/* Skills Input */}
                            <label className="form-control w-full max-w-xs my-2">
                                <div className="label">
                                    <span className="label-text">Skills: </span>
                                </div>
                                <input
                                    type="text"
                                    className="input input-bordered w-full max-w-xs"
                                    value={skillInput}
                                    onChange={(e) => setSkillInput(e.target.value)}
                                    onKeyDown={handleSkillAdd} // Add skill on Enter key press
                                    placeholder="Type a skill and press Enter"
                                />
                            </label>
                            <label className="form-control w-full max-w-xs my-2">
                                <div className="label">
                                    <span className="label-text">About: </span>
                                </div>
                                <textarea
                                    className="textarea textarea-bordered"
                                    value={about}
                                    onChange={(e) => setAbout(e.target.value)}
                                    placeholder="Type about you..."
                                    rows="4"
                                    cols="20"
                                >
                                </textarea>
                            </label>

                            <p className="text-red-500 text-center">{error}</p>
                            <div className="card-actions justify-center my-2">
                                <button className="btn btn-primary" onClick={saveProfileHandler}>Save Profile</button>
                            </div>
                        </div>
                    </div>
                </div>

                <UserCard user={{ firstName, lastName, age, gender, about, photoUrl, skills }} />
            </div>
            {toast && (
                <div className="toast toast-top toast-center">
                    <div className="alert alert-info">
                        <span>Profile updated successfully.</span>
                    </div>
                </div>
            )
            }
        </>
    );
};

export default EditProfile;
