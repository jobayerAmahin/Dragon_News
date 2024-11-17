import React from 'react';
import Marquee from 'react-fast-marquee';
import { Link, Outlet } from 'react-router-dom';
import Categories from '../Components/Categories';
import RightSideContents from '../Components/RightSideContents';


const Home = () => {
    return (
        <div>
            <div className='flex justify-center items-center gap-6 bg-slate-200 p-2 my-6'>
                <p className='bg-red-500 text-white p-2'>Breaking!</p>
                <Marquee pauseOnHover={true} className='space-x-10'>
                    <Link to='/news'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa quam fuga asperiores molestias</Link>
                    <Link to='/news'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa quam fuga asperiores molestias</Link>
                    <Link to='/news'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa quam fuga asperiores molestias</Link>
                </Marquee>
            </div>
            <div className='grid grid-cols-12'>
                <aside className='col-span-3'><Categories></Categories></aside>
                <div className='col-span-6 border-2 border-gray-600'>
                    <Outlet></Outlet>
                </div>
                <aside className='col-span-3'><RightSideContents></RightSideContents></aside>
            </div>
        </div>
    );
};

export default Home;