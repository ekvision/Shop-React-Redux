import React from 'react'
import {NavLink} from 'react-router-dom'
import s from './header.module.scss'
import {connect} from "react-redux";


const Header = ({productsInCart}) => {
  const cartCount = () => {
    if(productsInCart.length) {
        return productsInCart.reduce((accumulator, currentValue) => {
          return accumulator + currentValue.count;
        }, 0)
      }
    }

  return (
    <div className={s.header}>
      <h2 className={s.headerLogoWrap}>
        <NavLink to="/" className={s.headerLogo}>Shop Logo</NavLink>
      </h2>
      <div className={s.headerIconsWrap}>
        <NavLink activeClassName={s.headerActiveTab} exact to="/" className={s.headerHomeIcon}>
          <i className={`material-icons`}>home</i>
        </NavLink>
        <NavLink activeClassName={s.headerActiveTab} to="/favorites" className={s.headerFavoriteIcon}>
          <i className={`material-icons`}>bookmark_border</i>
        </NavLink>
        <NavLink activeClassName={s.headerActiveTab} to="/cart" className={s.headerCartIconWrap}>
          <i className={`${s.headerCartIcon} material-icons`}>local_mall</i>
          <span>{ productsInCart.length ? cartCount() : 0 }</span>
        </NavLink>
        <div className={s.headerMenu}>
          <i className={`material-icons`}>menu</i>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
   return {
     productsInCart: state.addToCart
   }
}


export default connect(mapStateToProps)(Header);
