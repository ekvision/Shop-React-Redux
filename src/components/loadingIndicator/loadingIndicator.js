import React from 'react'
import s from './loadingIndicator.module.scss'


const LoadingIndicator = () => {
  return(
    <p className={s.loadingIndicator}>
      <i className={`material-icons`}>blur_on</i>
    </p>
  )
}

export default LoadingIndicator;
