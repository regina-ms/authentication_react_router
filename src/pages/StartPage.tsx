import React, { useEffect, useState } from 'react'
import Banner from '../components/Banner';
import { Navigate } from 'react-router-dom';

export default function StartPage() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setIsLoggedIn(true);
        }
    }, [])

    return (
        <>
            {
                isLoggedIn ? <Navigate to='private/news' /> : <Banner />
            }
        </>
    )
}
