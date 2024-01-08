import React, { useEffect, useState } from 'react'
import { newsItem } from '../types';
import { Navigate } from 'react-router-dom';
import NewsItemView from '../components/NewsItemView';

export default function NewsList() {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const [news, setNews] = useState<newsItem[]>()
    const logOut = () => {
        localStorage.removeItem('token');
        setIsLoggedIn(false);
    }

    useEffect(() => {

        fetch('http://localhost:7070/private/news', {
            method: 'GET',
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        }).then(res => res.json()).then(data => {
            if (data.message) {
                logOut();
            } else {

                setNews(data)
            }
        })
    }, [])

    return (
        <>
            {
                !isLoggedIn
                    ? <Navigate to='/' />
                    : <ul className='news'>
                        {
                            news?.map(item =>
                                <li key={item.id} className='news-item card'><NewsItemView {...item} /></li>)
                        }
                    </ul>
            }
        </>
    )
}
