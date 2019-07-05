import React from 'react'
import s from './footer.module.scss'
import {NavLink} from "react-router-dom";


const Footer = () => {
  return (
    <div className={s.footer}>
      <div className={s.footerMenuListWrap}>
        <NavLink to={'/'} className={s.footerHome}><i className="fas fa-home"></i>Home</NavLink>
        <NavLink to={'/'} className={s.footerContacts}><i className="far fa-address-card"></i>Contacts</NavLink>
        <NavLink to={'/'} className={s.footerWallet}><i className="fas fa-wallet"></i>Cashbox</NavLink>
      </div>
      <div className={s.footerLogo}>
        <p>Shop Logo</p>
      </div>
    </div>
  )
}

export default Footer;
