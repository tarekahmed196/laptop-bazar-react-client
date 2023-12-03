import React from 'react';
import LaptopCard from '../../components/LaptopCard/LaptopCard';

const OrderTab = ({items}) => {
    return (
        <div className="grid md:grid-cols-3 gap-8">
                {
                    items.map(item=> <LaptopCard key={item._id} item={item}></LaptopCard>)
                }
            </div>
    );
};

export default OrderTab;