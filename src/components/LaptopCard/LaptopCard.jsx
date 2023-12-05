import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useCart from '../../hooks/useCart';


const LaptopCard = ({item}) => {
    const {image, description, price, name, _id} = item;
    const {user} = useContext(AuthContext)
    const [, refetch]= useCart()
    const navigate = useNavigate()
    const location = useLocation()

    const handleAddToCart = item=>{
      console.log(item);
      if(user && user.email){
        const cartItem = {productsItemId: _id, name, image, price, email: user.email}
        fetch('http://localhost:5000/carts',{
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(cartItem)
        })
        .then(res => res.json())
        .then(data => {
          if(data.insertedId){
            refetch() //to update the number of items in the cart
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Laptop added on the cart",
              showConfirmButton: false,
              timer: 1500
            });
          }

        })
      }
      else{
        Swal.fire({
          title: "Laptop added Successfully",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Please Login"
        }).then((result) => {
          if (result.isConfirmed) {
            navigate('/login', {state: {from: location}});
          }
        });
      }
    }
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
            <button onClick={()=> handleAddToCart(item)} className="btn btn-outline bg-slate-100 border-0 border-b-4">Add to Cart</button>
            </div>
        </div>
      </div>
    );
};

export default LaptopCard;