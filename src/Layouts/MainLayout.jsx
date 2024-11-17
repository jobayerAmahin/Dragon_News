import React from 'react';
import Header from '../Components/Header';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer';

const MainLayout = () => {
    return (
        <div className='font-popins w-11/12 mx-auto'>
            <Header></Header>
            <Navbar></Navbar>
            <div className=''>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;