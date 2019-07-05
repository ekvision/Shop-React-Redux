import React from 'react'
import s from './menuNormal.module.scss'
import {NavLink} from "react-router-dom";


const MenuNormal = ({modal, setStateModal}) => {
  return(
    <div>
      <div className={modal ? s.menu : s.menuHide}>
        <NavLink to={'/notebooks'}><i className={`material-icons`}>chevron_left</i>Notebooks</NavLink>
        <NavLink to={'/'}><i className={`material-icons`}>chevron_left</i>Mobile phons</NavLink>
        <NavLink to={'/tablets'}><i className={`material-icons`}>chevron_left</i>Tablets</NavLink>
      </div>
      <div
        className={modal ? s.menuBlack : s.menuBlackHide}
        onClick={() => {setStateModal()}}
      ></div>
    </div>

  )
}

export default MenuNormal
