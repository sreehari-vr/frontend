import React, { useEffect } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet, useNavigate } from 'react-router-dom'
import {BASE_URL} from '../utils/constants'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { addUser } from '../utils/userSlice'


const Body = () => {

  const user = useSelector((store)=>store.user)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const userFetch = async () => {
    try {
      const data = await axios.get(BASE_URL + '/profile/view',{withCredentials:true})
      if(data && !user){
        dispatch(addUser(data.data))
      }else{
        navigate("/login")
      }
    } catch (error) {
      navigate('/login')
      console.error(error.message)
    }
  }

  useEffect(()=>{
    userFetch()
  },[])

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Main content area */}
      <main className="flex-grow">
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}

export default Body
