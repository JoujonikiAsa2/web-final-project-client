import React from 'react';

const Menu = ({ item }) => {
    return (
        <div className='card w-[25rem] flex flex-col justify-center items-center bg-base-200 space-y-4'>
            <img src={item.image} alt="" className='w-full h-56' />
            <h3 className='text-lg'>{item.category}</h3>
            <p className='w-72 h-20 md:56 lg:w-72 text-center'>{item.recipe}</p>
            <div className='py-4'>
                <button className='mb-4 btn btn-outline border-0 border-b-4 border-orange-400  hover:bg-[#1F2937]'>Add to cart</button>
            </div>
        </div>
    );
};

export default Menu;