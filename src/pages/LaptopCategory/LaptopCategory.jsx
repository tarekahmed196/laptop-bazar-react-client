import React from 'react';
import Cover from '../Cover/Cover';
import LaptopItems from '../LaptopHub/LaptopItems';
import { Link } from 'react-router-dom';

const LaptopCategory = ({items, img, title}) => {
    return (
        <div>
            <Cover img={img} title={title}></Cover>
            <div className='grid md:grid-cols-2 gap-8 mt-10'>
                {
                    items.map(item => <LaptopItems key={item._id} item={item}></LaptopItems>)
                }
            </div>
            <div className="text-center">
                <Link to={`/order/${title}`}><button className='btn btn-outline border-0 border-b-4 mt-4  mb-20 '>Order Now</button></Link>
                </div>
            
        </div>
    );
};

export default LaptopCategory;