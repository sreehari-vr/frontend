import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BASE_URL } from "../utils/constants";
import { addConnections } from "../utils/connectionsSlice";

const Connections = () => {
  const dispatch = useDispatch();
  const connections = useSelector((store) => store.connections);

  const showConnections = async () => {
    try {
      const data = await axios.get(BASE_URL + "/user/connections", {
        withCredentials: true,
      });
      dispatch(addConnections(data.data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    showConnections();
  }, []);

  if(!connections)return

  if (connections.data.length === 0)
    return <h1 className="flex justify-center my-10"> No Connections Found</h1>;

  return (
    <div className="p-6 space-y-6">
      {connections?.data.map((x) => (
        <div key={x._id}>
          <ul className="list bg-base-200 rounded-xl shadow-md p-5 space-y-4">
            <li className="text-sm font-bold opacity-100 tracking-wide border-b pb-2">
              {x?.firstName + " " + x?.lastName}
            </li>

            <li className="flex gap-4 items-start">
              <img
                className="size-16 rounded-full object-cover"
                src={x?.photoUrl}
                alt="profile"
              />

              <div className="flex-1 space-y-1">
                <p className="text-sm text-gray-50">
                  <span className="font-medium">Age:</span> {x?.age} &nbsp;|&nbsp;
                  <span className="font-medium">Gender:</span> {x?.gender}
                </p>

                {x?.skills?.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {x.skills.map((y, idx) => (
                      <span
                        key={idx}
                        className="bg-yellow-200 text-yellow-800 text-xs font-medium px-2 py-1 rounded"
                      >
                        {y}
                      </span>
                    ))}
                  </div>
                )}

                <p className="text-sm text-gray-50 italic mt-2">{x?.about}</p>
              </div>
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Connections;
