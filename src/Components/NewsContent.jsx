import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCard from './NewsCard';

const NewsContent = () => {
    const {data}=useLoaderData()
    
    return (
        <div>
            <h1>{data.length}</h1>
            {
                data.map((newsDetail,idx)=><NewsCard key={idx} newsDetail={newsDetail}></NewsCard>)
            }
        </div>
    );
};

export default NewsContent;