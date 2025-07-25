import axios from "axios";
import React, { useState } from "react";
import { BASE_URL } from "../utils/constants";
import { addUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  async function doSignUp() {
    try {
      const data = await axios.post(
        BASE_URL + "/signUp",
        {
          firstName,
          lastName,
          email,
          password,
          photoUrl,
          age,
          gender,
          skills,
          about,
        },
        { withCredentials: true }
      );
      dispatch(addUser(data));
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  }
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [skills, setSkills] = useState("");
  const [about, setAbout] = useState("");
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-100 py-5">
      <div className="card bg-base-300 w-96 shadow-xl">
        <div className="card-body">
          <h2 className="card-title font-extrabold justify-center">SIGN UP</h2>
          <div className="justify-center space-y-4 mt-4">
            <fieldset className="form-control">
              <label className="label">
                <span className="label-text">First Name:</span>
              </label>
              <input
                type="text"
                className="input input-bordered"
                placeholder="Type here"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </fieldset>
            <fieldset className="form-control">
              <label className="label">
                <span className="label-text">Last Name:</span>
              </label>
              <input
                type="text"
                className="input input-bordered"
                placeholder="Type here"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </fieldset>
            <fieldset className="form-control">
              <label className="label">
                <span className="label-text">Email Id:</span>
              </label>
              <input
                type="text"
                className="input input-bordered"
                placeholder="Type here"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </fieldset>
            <fieldset className="form-control">
              <label className="label">
                <span className="label-text">age:</span>
              </label>
              <input
                type="number"
                className="input input-bordered"
                placeholder="Type here"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </fieldset>
            <fieldset className="form-control">
              <label className="label">
                <span className="label-text">Gender:</span>
              </label>
              <input
                type=""
                className="input input-bordered"
                placeholder="Type here"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              />
            </fieldset>
            <fieldset className="form-control">
              <label className="label">
                <span className="label-text">About:</span>
              </label>
              <input
                type="text"
                className="input input-bordered"
                placeholder="Type here"
                value={about}
                onChange={(e) => setAbout(e.target.value)}
              />
            </fieldset>
            <fieldset className="form-control">
              <label className="label">
                <span className="label-text">Skills:</span>
              </label>
              <input
                type="text"
                className="input input-bordered"
                placeholder="Type here"
                value={skills}
                onChange={(e) => setSkills(e.target.value)}
              />
            </fieldset>
            <fieldset className="form-control">
              <label className="label">
                <span className="label-text">Password:</span>
              </label>
              <input
                type="password"
                className="input input-bordered"
                placeholder="Type here"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </fieldset>
            <fieldset className="form-control">
              <label className="label">
                <span className="label-text">Photo url:</span>
              </label>
              <input
                type="text"
                className="input input-bordered"
                placeholder="Type here"
                value={photoUrl}
                onChange={(e) => setPhotoUrl(e.target.value)}
              />
            </fieldset>
          </div>
          <div className="card-actions justify-center mt-4">
            <button className="btn btn-primary" onClick={doSignUp}>
              Sign Up
            </button>
          </div>
          <div className="card-actions justify-center mt-1">
            <Link to="/login">
              <p>
                <u>Login</u>
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
