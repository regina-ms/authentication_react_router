import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { newsItem } from '../types';
import NotFound from './NotFound';

export default function NewsItem() {
  const [state, setState] = useState<newsItem>();
  const [notFound, setNotFound] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:7070/private/news/${id}`, {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token')
      }
    })
      .then(res => res.json())
      .then(data => {
        setState(data)
        if (data.message) {
          setNotFound(true)
        } else {
          setState(data)
        }
      })
  }, [])

  return (
    <>
      {
        notFound ? <NotFound /> :
          <div className='card my-3 w-50'>
            <img src={state?.image} alt='' className='card-img' />
            <div className='p-3'>
              <h2 className='card-title'>{state?.title}</h2>
              <p className='card-text'>{state?.content}</p>
            </div>
          </div>
      }
    </>

  )
}
