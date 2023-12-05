import React from 'react';
import { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../../providers/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const {googleSignIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const handleGoogleSingIn=()=>{
        googleSignIn()
        .then(result =>{
            const loggedInUser = result.user;
            console.log(loggedInUser);
            const savedUser = {name: loggedInUser.displayName, email: loggedInUser.email}
            fetch("http://localhost:5000/users",{
              method: 'POST',
              headers: {
                  'content-type': 'application/json'
              },
              body: JSON.stringify(savedUser)
            })
              .then((res) => res.json())
              .then(() => {
                
                    navigate(from, { replace: true });
                
              });


            
        })
    }

    return (
        <div>
            <div className="divider"></div>
            <div className='w-full text-center my-4'><button onClick={handleGoogleSingIn} className='text-3xl btn btn-circle btn-outline'><FcGoogle /></button></div>
        </div>
    );
};

export default SocialLogin;