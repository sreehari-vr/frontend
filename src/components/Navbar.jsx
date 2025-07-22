import React from 'react'
import logo from '../assets/logo3.png'
import { useSelector } from 'react-redux'

const Navbar = () => {
    const user = useSelector((store)=>store.user)
    return (
        <div>
            <div className="navbar bg-base-200 shadow-sm px-10">
                <div className="flex-1">
                    <a>
                        <img src={logo} alt="" className='w-50'/>
                    </a>
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
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>)}
            </div>
        </div>
    )
}

export default Navbar
