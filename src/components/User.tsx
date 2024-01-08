import React, { useEffect, useState } from 'react'
import { data } from '../types'
import { useNavigate } from 'react-router-dom'

export default function User() {
    const [userData, setUserData] = useState<data>();
    const navigate = useNavigate();
    useEffect(() => {
        fetch('http://localhost:7070/private/me', {
            method: 'GET',
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        }).then((res) => res.json()).then(data => {
            if (data.message) {
                localStorage.removeItem('token')
                window.location.reload()
            } else {
                setUserData({ avatar: data.avatar, name: data.name })
            }

        })
    }, [])

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/')
    }
    return (
        <div className='d-flex justify-content-end column-gap-2 align-items-center'>
            <p className='my-0'>Hello, {userData?.name}</p>
            <img src={userData?.avatar} alt='' className='rounded-circle'/>
            <button onClick={handleLogout} className='btn btn-outline-danger'>LogOut</button>
        </div>
    )
}
