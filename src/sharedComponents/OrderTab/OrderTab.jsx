import React from 'react';
import Food from '../Food/Food';

const OrderTab = ({ items }) => {
    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center justify-items-center items-center gap-10 py-8">
            {
                items.map(item => <Food key={item._id} item={item}></Food>)
            }
        </div>
    );
};

export default OrderTab;