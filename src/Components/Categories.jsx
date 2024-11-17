import React, { useEffect, useState } from 'react';

const Categories = () => {
    const [allCateg,setAllCateg]=useState([])
    useEffect(()=>{
        fetch('https://openapi.programming-hero.com/api/news/categories')
            .then(res=>res.json())
            .then(data=>setAllCateg(data.data.news_category))
        
    },[])
    return (
        <div className='flex flex-col gap-2 items-start'>
            <h1 className='text-xl font-bold mb-4'>All Categories</h1>
            {
                allCateg.map(categ=> <button key={categ.category_id} className='btn btn-wide'>{categ.category_name}</button>)
            }
        </div>
    );
};

export default Categories;