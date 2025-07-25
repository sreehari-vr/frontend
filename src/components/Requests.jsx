import axios from 'axios'
import React, { useEffect } from 'react'
import { BASE_URL } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addRequest, removeRequest } from '../utils/requestSlice'

const Requests = () => {
    const dispatch = useDispatch()
    const requests = useSelector((store)=>store.request)
    const fetchRequests = async () => {
        try {
            const data = await axios.get(BASE_URL+"/user/requests",{withCredentials:true})
            dispatch(addRequest(data.data.data))
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        fetchRequests()
    },[])

    async function handleCollaborate(id){
        try {
            const data = await axios.post(`${BASE_URL}/request/review/accepted/${id}`,{},{withCredentials:true})
            console.log(data.data)
            dispatch(removeRequest(id))
            await fetchRequests();
        } catch (error) {
            console.log(error.message)
        }
    }
    async function handlePass(id){
        try {
            const data = await axios.post(`${BASE_URL}/request/review/accepted/${id}`,{},{withCredentials:true})
            console.log(data.data)
            dispatch(removeRequest(id))
            await fetchRequests();
        } catch (error) {
            console.log(error.message)
        }
    }

      if (!requests) return;

  if (requests.length === 0)
    return <h1 className="flex justify-center my-10"> No Requests Found</h1>;

  return (
       <div className="p-6 space-y-6">
      {requests?.map((x) => (
        <div key={x._id}>
          <div className="bg-base-200 rounded-xl shadow-md p-5 space-y-4">
            <div className="text-sm font-bold tracking-wide border-b pb-2">
              {x?.fromUserId?.firstName + " " + x?.fromUserId?.lastName}
            </div>

            <div className="flex justify-between items-start gap-4">
              {/* Left section: Image + Details */}
              <div className="flex gap-4 items-start">
                <img
                  className="size-16 rounded-full object-cover"
                  src={x?.fromUserId?.photoUrl}
                  alt="profile"
                />
                <div className="flex-1 space-y-2">
                  <p className="text-sm text-gray-50">
                    <span className="font-medium">Age:</span> {x?.fromUserId?.age} &nbsp;|&nbsp;
                    <span className="font-medium">Gender:</span> {x?.fromUserId?.gender}
                  </p>

                  {x?.fromUserId?.skills?.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {x.fromUserId?.skills.map((y, idx) => (
                        <span
                          key={idx}
                          className="bg-yellow-200 text-yellow-800 text-xs font-medium px-2 py-1 rounded"
                        >
                          {y}
                        </span>
                      ))}
                    </div>
                  )}

                  <p className="text-sm text-gray-50 italic">{x?.fromUserId?.about}</p>
                </div>
              </div>

              {/* Right section: Buttons */}
              <div className="flex flex-col gap-2">
                <button
                  onClick={() => handleCollaborate(x?._id)}
                  className="btn btn-primary btn-sm"
                >
                  Collaborate
                </button>
                <button
                  onClick={() => handlePass(x?._id)}
                  className="btn btn-outline btn-sm"
                >
                  Pass
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>

    
  )
}

export default Requests
