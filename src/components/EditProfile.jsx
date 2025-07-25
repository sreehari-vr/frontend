import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { BASE_URL } from "../utils/constants";
import { addUser } from "../utils/userSlice";
import FeedCard from "./FeedCard";


const EditProfile = ({ user }) => {
  const [firstName, setFirstName] = useState(user?.firstName);
  const [lastName, setLastName] = useState(user?.lastName);
  const [photoUrl, setPhotoUrl] = useState(user?.photoUrl);
  const [age, setAge] = useState(user?.age);
  const [gender, setGender] = useState(user?.gender);
  const [about, setAbout] = useState(user?.about);
  const [error, setError] = useState("");
  const [toast, setToast] = useState(false);
  const dispatch = useDispatch();

  const saveChanges = async () => {
    try {
      setError("");
      const data = await axios.patch(
        BASE_URL + "/profile/edit",
        { firstName, lastName, age, photoUrl, gender, about },
        { withCredentials: true }
      );

      dispatch(addUser(data.user));
      setToast(true);
      setTimeout(() => {
        setToast(false);
      }, 3000);
    } catch (error) {
      setError(error.response.data.message);
    }
  };
  return (
    <div className="min-h-screen bg-base-100 px-4 py-6 flex flex-col md:flex-row gap-6 items-center md:items-start justify-center">
  {/* Profile Edit Form */}
  <div className="w-full max-w-md">
    <div className="card bg-base-200 shadow-lg rounded-xl">
      <div className="card-body">
        <h2 className="card-title justify-center text-xl font-semibold">
          EDIT PROFILE
        </h2>

        <input
          type="text"
          placeholder="First Name"
          className="input input-bordered w-full mb-3"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Last Name"
          className="input input-bordered w-full mb-3"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Photo Url"
          className="input input-bordered w-full mb-3"
          value={photoUrl}
          onChange={(e) => setPhotoUrl(e.target.value)}
        />
        <input
          type="number"
          placeholder="Age"
          className="input input-bordered w-full mb-3"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <input
          type="text"
          placeholder="Gender"
          className="input input-bordered w-full mb-3"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        />
        <input
          type="text"
          placeholder="About"
          className="input input-bordered w-full mb-3"
          value={about}
          onChange={(e) => setAbout(e.target.value)}
        />

        <p className="text-red-500">{error}</p>
        <button
          className="btn bg-yellow-500 text-white hover:bg-yellow-600 w-full mt-4"
          onClick={saveChanges}
        >
          Save Changes
        </button>
      </div>
    </div>
  </div>

  {/* FeedCard Preview */}
  <div className="w-full max-w-sm">
    <FeedCard
      user={{ firstName, lastName, age, about, gender, photoUrl }}
    />
  </div>

  {/* Toast */}
  {toast && (
    <div className="toast toast-top toast-end">
      <div className="alert alert-success">
        <span>Updated successfully.</span>
      </div>
    </div>
  )}
</div>

  );
};

export default EditProfile;
