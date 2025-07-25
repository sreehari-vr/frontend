import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet, useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/userSlice";

const Body = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = React.useState(true);

  const userFetch = async () => {
    try {
      if (user) {
        setLoading(false);
        return;
      }

      const response = await axios.get(BASE_URL + "/profile/view", {
        withCredentials: true,
      });

      dispatch(addUser(response.data));
    } catch (error) {
      if (error?.response?.status === 401) {
        navigate("/login");
      }
      console.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    userFetch();
  }, []);

  if (loading) return null; // or <LoadingSpinner />

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar loading={loading} />

      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Body;
