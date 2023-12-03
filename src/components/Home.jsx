import { useEffect, useState } from 'react';
import Product from './Product';
import { Link } from 'react-router-dom';

const Home = () => {
    const [products, setProducts] = useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

   /*  
    const hp = products.filter(product => product.category === 'hp');
    console.log(hp);
    const dell = products.filter(product=> product.category === 'dell');
    const asus = products.filter(product => product.category === 'asus');
    const samsung = products.filter(product => product.category === 'samsung'); 
    */
    return (
        <div>
            
            <p className='text-center uppercase font-semibold text-orange-700 mt-8 text-2xl'>Total Products: {products.length}</p>
            <div className='max-w-7xl mx-auto'>
                <ul className='flex'>
                    <Link >HP</Link>
                    <Link>Dell</Link>
                    <Link>Asus</Link>
                    <Link>Samsung</Link> 
                </ul>
            </div>
            <div className='grid grid-cols-3 gap-4 mx-auto max-w-7xl mt-8'>
                {
                    products.map(product =>
                        <Product key={product._id} product={product}></Product>
                    )
                }
            </div>
            
            
        </div>
    );
};

export default Home;