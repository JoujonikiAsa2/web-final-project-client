import React from 'react';
import MenuItem from '../Menu/MenuItem';
import Button from '../Button/Button';
import BistroBossParallax from '../../pages/Home/BistroBossParallax/BistroBossParallax';
import { Link } from 'react-router-dom';

const MenuCategory = ({items,buttonText,img,title,details,category}) => {
    return (
        <section className="mb-4">
           {
            title &&  <BistroBossParallax parallaxImg={img} parallaxTitle={title} description={details}></BistroBossParallax>
           }
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 py-8  mx-4">
                {
                    items.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <div  className="flex flex-col justify-center items-center">
                <Link to={`/orderFood/${category}`}><Button borderColor="black" textColor="black" btnText={buttonText}></Button></Link>
            </div>
        </section>
    );
};

export default MenuCategory;