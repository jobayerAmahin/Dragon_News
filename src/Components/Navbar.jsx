import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import user from '../assets/user.png'
import { AuthContext } from '../AuthProvider/AuthProvider';
const Navbar = () => {
    const {name}=useContext(AuthContext)
    return (
        <div className='flex justify-between items-center'>
            <div></div>
            <div className='nav flex justify-center items-center gap-8'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/career'>Career</NavLink>
                <NavLink to='/about'>About Us</NavLink>
            </div>
            <div className='flex items-center justify-between gap-4'>
                <img src={user} alt="" />
                <p>{name}</p>
                <button className='btn btn-neutral'>Login</button>
            </div>
        </div>
    );
};

export default Navbar;