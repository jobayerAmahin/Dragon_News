import React from 'react';
import { useLoaderData } from 'react-router-dom';

const NewsContent = () => {
    const {data}=useLoaderData()
    
    return (
        <div>
            <h1>{data.length}</h1>
        </div>
    );
};

export default NewsContent;