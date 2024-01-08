import React from 'react'
import { newsItem } from '../types'
import { Link } from 'react-router-dom'

export default function NewsItemView({ id, title, image, content }: newsItem) {

  return (
    <Link to={`${id}`}>

      <img src={image} alt='' className='card-img' />
      <div className='p-3'>
        <h2 className='card-title'>{title}</h2>
        <p className='card-text'>{content}</p>
      </div>
    </Link>
  )
}
