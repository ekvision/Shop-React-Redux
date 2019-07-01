import React from 'react'
import s from './productDetailPage.module.scss'


const ProductDetailsPage = (props) => {
  return (
    <div className={s.main}>{props.match.params.title}</div>
  )
}

export default  ProductDetailsPage;
