import axios from "axios";
import React, { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../utils/feedSlice";
import FeedCard from "./FeedCard";

const Feed = () => {
  const feed = useSelector((store) => store.feed);
  const dispatch = useDispatch();

  const feedLoad = async () => {
    try {
      if (feed) return;
      const data = await axios.get(BASE_URL + "/feed", {
        withCredentials: true,
      });
      dispatch(addFeed(data?.data?.data));
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    feedLoad();
  }, []);

  if (!feed) return;
  if (feed.length <= 0) {
    return <h1 className="flex justify-center my-10">No new users founds!</h1>;
  }
return (
    feed && (
      <div className="flex justify-center my-10">
        <FeedCard user={feed[0]} />
      </div>
    )
  );};

export default Feed;
