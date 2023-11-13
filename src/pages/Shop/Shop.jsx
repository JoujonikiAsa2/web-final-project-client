import React, { useState } from 'react';
import Cover from '../../sharedComponents/Cover/Cover';
import img from '../../assets/shop/banner2.jpg'
import useMenuItems from '../../hooks/useMenuItems';
import Food from '../../sharedComponents/Food/Food';
const Shop = () => {
    const [menus] = useMenuItems()
    const [foods, setFoods] = useState(menus)
    const desserts = menus.filter(item => item.category == 'dessert')
    const pizza = menus.filter(item => item.category == 'pizza')
    const salads = menus.filter(item => item.category == 'salad')
    const soups = menus.filter(item => item.category == 'soup')

    return (
        <div>
            <Cover img={img} bannerTitle='Our Shop' bannerDetails="Would you like to try a dish?"></Cover>
            <div className='flex justify-center items-center gap-4 py-8'>
                <button className='btn btn-outline hover:bg-orange-400' onClick={() => setFoods(desserts)}>Desserts</button>
                <button className='btn btn-outline hover:bg-orange-400' onClick={() => setFoods(pizza)}>Pizza</button>
                <button className='btn btn-outline hover:bg-orange-400' onClick={() => setFoods(salads)}>Salad</button>
                <button className='btn btn-outline hover:bg-orange-400' onClick={() => setFoods(soups)}>Soup</button>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center justify-items-center items-center gap-10 py-8">
                {
                    foods.map(item => <Food key={item._id} item={item}></Food>)
                }
            </div>
        </div>
    );
};

export default Shop;