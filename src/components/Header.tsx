import React, { useEffect, useState } from 'react'
import User from './User';
import LoginForm from './LoginForm';
import { useLocation } from 'react-router-dom';

export default function Header() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const token = localStorage.getItem('token');
        token ? setIsLoggedIn(true) : setIsLoggedIn(false);
    }, [location.pathname])


  return (
    <div className='header d-flex justify-content-between p-3 bg-light align-items-center'>
        <div className='logo'>Neto Social</div>
        <div className='header-container w-50'>
            {
                isLoggedIn ? <User /> : <LoginForm />
            }
        </div>
    </div>
  )
}
