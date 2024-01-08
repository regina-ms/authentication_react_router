import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function LoginForm() {
    const userNameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const handleLoginClick = (e: React.FormEvent) => {
        e.preventDefault();

        fetch('http://localhost:7070/auth', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                login: userNameRef.current?.value,
                password: passwordRef.current?.value
            })
        }).then(res => res.json()).then(data => {
            if (data.token) {
                localStorage.setItem('token', data.token);
                navigate('/private/news');
            } else {
                setError(data.message);
            }
        })
    }

    return (
        <>
            <form id='login-form' className='d-flex justify-content-end column-gap-2' autoComplete='off'>
                <input ref={userNameRef} name='userName' className='rounded-1 border border-light-subtle' />
                <input ref={passwordRef} name='password' type='password' className='rounded-1 border border-light-subtle' />
                <button type='submit' onClick={handleLoginClick} className='rounded-1 btn btn-outline-success'>Login</button>
            </form>
            {
                error && <p className='text-danger text-center mt-1'>{error}</p>
            }
        </>
    )
}
