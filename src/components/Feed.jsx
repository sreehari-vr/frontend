import axios from "axios";
import React, { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../utils/feedSlice";
import FeedCard from "./FeedCard";

const Feed = () => {

    const dispatch = useDispatch()
    const feedLoad = async () => {
        try {
            const data = await axios.get(BASE_URL+'/feed',{withCredentials:true})
            console.log(data)
            dispatch(addFeed(data?.data.data[0]))
        } catch (error) {
            console.log(error.message)
        }
    }

    useEffect(()=>{
        feedLoad()    
    },[])
    
    const user = useSelector((store)=>store.feed)

  return (
    <div>
        <FeedCard user={user}/>
    </div>
  );
};

export default Feed;
