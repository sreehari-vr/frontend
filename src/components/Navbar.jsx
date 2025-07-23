import React from 'react'
import logo from '../assets/logo3.png'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL } from '../utils/constants'
import { removeUser } from '../utils/userSlice'

const Navbar = () => {
    const user = useSelector((store)=>store.user)
    const dispatch = useDispatch()
    async function makeLogOut(){
        try{
            await axios.post(BASE_URL+'/logout',{},{withCredentials: true})
            dispatch(removeUser())
        }catch(err){
            console.log(err.message)
        }
    } 

    return (
        <div>
            <div className="navbar bg-base-200 shadow-sm px-10">
                <div className="flex-1">
                    <Link to="/">
                        <img src={logo} alt="" className='w-50'/>
                    </Link>
                </div>
                {user&&(<div className="flex gap-2 items-center">
                    <p><b>{user.firstName}</b></p>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src={user.photoUrl} />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li>
                                <Link to="/profile" className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </Link>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a onClick={makeLogOut}>Logout</a></li>
                        </ul>
                    </div>
                </div>)}
            </div>
        </div>
    )
}

export default Navbar
