import React from 'react';
import useAuth from '../../../hooks/useAuth';

const UserHome = () => {
    const {user} = useAuth()
    return (
        <div className='w-full mt-0 text-center '>
            <h2 className='text-3xl'>Welcome, <span className='text-4xl text-orange-400'>{user.displayName}</span></h2>
        </div>
    );
};

export default UserHome;