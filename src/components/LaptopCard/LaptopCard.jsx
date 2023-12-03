import React from 'react';

const LaptopCard = ({item}) => {
    const {image, description, price, name} = item;
    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 transform transition-transform duration-300 ease-in-out hover:-translate-y-2">
        <a href="#">
          <img
            className="rounded-t-lg"
            src={image}
            alt=""
          />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {name}
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {description}
          </p>
          <div className="flex justify-between items-center">
            <p className="text-cyan-700 font-semibold">${price}</p>
            <button className="btn btn-outline bg-slate-100 border-0 border-b-4">Buy Now</button>
            </div>
        </div>
      </div>
    );
};

export default LaptopCard;