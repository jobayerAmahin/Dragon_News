import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa6';

const SocialMedia = () => {
    return (
        <div className='*:w-full space-y-2'>
            <h1 className='text-xl font-bold mb-4'>Login With</h1>
            
                <button className='btn'><FaGoogle></FaGoogle> Google</button>
                <button className='btn'><FaGithub></FaGithub> Github</button>
            
        </div>
    );
};

export default SocialMedia;