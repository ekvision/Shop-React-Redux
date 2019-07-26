import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'
import {connect} from "react-redux";

import s from './header.module.scss'
import MenuNormal from '../menus/menuNormal/menuNormal'


const Header = ({productsInCart, scrollen}) => {

  const [modal, setStateModal] = useState(false);

  const cartCount = () => {
    if(productsInCart.length) {
        return productsInCart.reduce((accumulator, currentValue) => {
          return accumulator + currentValue.count;
        }, 0)
      }
    };

  return (
    <div className={s.header}>
      <NavLink to={'/'} className={s.headerLogoWrap} onClick={scrollen}>
        <span className={s.headerLogoShort}>VS</span>
        <span className={s.headerLogoLong}>Vision Store</span>
      </NavLink>
      <div className={s.headerIconsWrap}>
        <NavLink activeClassName={s.headerActiveTab} exact to="/" className={s.headerHomeIcon} onClick={scrollen}>
          <i className="fas fa-home"></i>
        </NavLink>
        <NavLink activeClassName={s.headerActiveTab} to="/favorites" className={s.headerFavoriteIcon}>
          <i className="far fa-bookmark"></i>
        </NavLink>
        <NavLink activeClassName={s.headerActiveTab} to="/cart" className={s.headerCartIconWrap}>
          <i className={`${s.headerCartIcon} material-icons`}>local_mall</i>
          <span>{ productsInCart.length ? cartCount() : 0 }</span>
        </NavLink>
        <div className={s.headerMenu} onClick={() => setStateModal(!modal)}>
          {!modal ?
            <i className={`material-icons`}>menu</i> : <i className={`material-icons`}>close</i>
          }
        </div>
          <MenuNormal
            modal={modal}
            setStateModal={setStateModal}
          />
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
