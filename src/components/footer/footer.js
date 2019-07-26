import React from 'react'
import s from './footer.module.scss'
import {NavLink} from "react-router-dom";


const Footer = ({scrollen}) => {
  return (
    <div className={s.footer}>
      <div className={s.footerMenuListWrap}>
        <NavLink to={'/'} className={s.footerHome} onClick={scrollen}><i className="fas fa-home"></i>Home</NavLink>
        <NavLink to={'/'} className={s.footerContacts}><i className="far fa-address-card"></i>Contacts</NavLink>
        <NavLink to={'/'} className={s.footerWallet}><i className="fas fa-wallet"></i>Cashbox</NavLink>
      </div>
      <div className={s.footerLogo}>
        <NavLink to={'/'} className={s.footerLogoWrap} onClick={scrollen}>
          <span className={s.footerLogoShort}>VS</span>
          <span className={s.footerLogoLong}>Vision Store</span>
        </NavLink>
      </div>
    </div>
  )
};

export default Footer;
