import React, { useState } from "react";
import axios from 'axios'
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice"
import { useNavigate, Link } from "react-router-dom";
import { BASE_URL } from "../utils/constants";

const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [error,setError] = useState('')
  
    async function loginFunction(){
      try {
        const data = await axios.post(BASE_URL+'/login', {email, password}, {withCredentials: true})
        console.log(data.data)
        dispatch(addUser(data.data))
        navigate('/feed')
      } catch (error) {
        setError(error.response.data.message)
      }
    } 
    

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-100">
      <div className="card bg-base-300 w-96 shadow-xl">
        <div className="card-body">
          <h2 className="card-title font-extrabold justify-center">LOG IN</h2>
          <div className="justify-center space-y-4 mt-4">
            <fieldset className="form-control">
              <label className="label">
                <span className="label-text">Email Id:</span>
              </label>
              <input
                type="text"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                className="input input-bordered"
                placeholder="Type here"
              />
            </fieldset>
            <fieldset className="form-control">
              <label className="label">
                <span className="label-text">Password:</span>
              </label>
              <input
                type="password"
                value={password}
                onChange={(e)=>{setPassword(e.target.value)}}
                className="input input-bordered"
                placeholder="Type here"
              />
            </fieldset>
            <p className="text-red-500 text-center">{error}</p>
          </div>
          <div className="card-actions justify-center mt-4">
            <button className="btn btn-primary" onClick={loginFunction}>Log In</button>
            
          </div>
                    <div className="card-actions justify-center mt-1">
                      <Link to="/signUp">
            <p><u>Sign Up</u></p>
            </Link>
                      </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
