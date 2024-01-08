import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className='not-found text-center'>
      <p className='fs-1 fw-bold'>404</p>
      <p className='fs-1'>Страница не найдена</p>
      <button className='btn btn-secondary btn-lg'>
        <Link to={'/'}>На главную</Link>
      </button>
    </div>
  )
}
