import React from 'react'
import s from './errorPage.module.scss'


class ErrorPage extends React.Component {

  render() {
    return (
      <div className={s.errorInfo}>
        <p>Page not found</p>
      </div>
    )
  }
}

export default ErrorPage;
