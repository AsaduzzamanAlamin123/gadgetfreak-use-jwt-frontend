import React from 'react';
import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../Firebase/Firebase.init';

const Login = () => {
    const [user, loading, error] = useAuthState(auth);
    console.log(user);
        const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);


let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";


  if(user){
    const url = 'http://localhost:5000/login';
    fetch(url, {
        method: 'POST',
        body: JSON.stringify({
            email:user.email
          
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((data) =>  {
            localStorage.setItem("accessToken", data.token);
            navigate(from, { replace: true });

        });

    
  }
  

  
    return (
        <div>
            <h2>Log in</h2>
            <button onClick={() => signInWithGoogle()} className='btn btn-primary btn-lg'>Google Sign in</button>
        </div>
    );
};

export default Login;