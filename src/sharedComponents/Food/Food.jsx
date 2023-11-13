import React from 'react';
import Button from '../Button/Button';

const Food = ({ item }) => {
    const { name, image, recipe } = item
    return (
        <div className="card space-x-4">
            <img className="w-full h-60" src={image} alt="" />
            <div className='flex flex-col justify-center items-center p-4'>
                <h3 className="uppercase text-[#151515] text-xl">{name}</h3>
                <p className="text-base">{recipe}</p>
                <Button borderColor="orange-400" btnText="Add to Cart"></Button>
            </div>
        </div>
    );
}

export default Food;