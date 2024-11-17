import React from 'react';
import { NavLink } from 'react-router-dom';
import user from '../assets/user.png'
const Navbar = () => {
    return (
        <div className='flex justify-between items-center'>
            <div></div>
            <div className='nav flex justify-center items-center gap-8'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/career'>Career</NavLink>
                <NavLink to='/about'>About Us</NavLink>
            </div>
            <div className='flex items-center justify-between gap-4'>
                <button className='btn btn-neutral'>Login</button>
                <img src={user} alt="" />
            </div>
        </div>
    );
};

export default Navbar;