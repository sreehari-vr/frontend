import axios from "axios";
import React from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { removeFeed } from "../utils/feedSlice";


const FeedCard = ({user}) => {
  const dispatch = useDispatch()
  async function handleCollaborate(id){
    try {
      const data = await axios.post(`${BASE_URL}/request/interested/${id}`,{},{withCredentials:true})
      dispatch(removeFeed(id))
    } catch (error) {
      console.log(error.message)
    }
  }
  async function handlePass(id){
    try {
      const data = await axios.post(`${BASE_URL}/request/ignored/${id}`,{},{withCredentials:true})
      dispatch(removeFeed(id))
    } catch (error) {
      console.log(error.message)
    }
  }
  return (
    <div>
      <div className="flex justify-center p-4">
        <div className="card bg-base-200 w-96 shadow-md rounded-xl overflow-hidden">
          <figure>
            <img
              src={user?.photoUrl}
              alt="Profile"
              className="object-cover w-full h-full"
            />
          </figure>
          <div className="card-body space-y-2">
            <h1 className="card-title text-xl font-semibold">
              {user?.firstName}
            </h1>
            <p className="text-sm text-amber-100">{user?.about}</p>
            <p className="text-sm">
              <strong>Age:</strong> {user?.age}
            </p>
            <p className="text-sm">
              <strong>Gender:</strong> {user?.gender}
            </p>
            <p className="text-sm">
              <strong>Skills:</strong> {user?.skills}
            </p>
            <div className="card-actions justify-between pt-4">
              <button className="btn btn-outline bg-green-600 w-[48%]" onClick={()=>{handleCollaborate(user?._id)}}>
                Collaborate
              </button>
              <button className="btn btn-outline bg-red-800 w-[48%]" onClick={()=>{handlePass(user?._id)}}>
                Pass
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedCard;
