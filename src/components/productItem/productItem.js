import React from 'react';
import {connect} from "react-redux";
import {Link} from "react-router-dom";

import s from './productIem.module.scss';
import {PRODUCT_ADD_TO_CART, TO_FAVORITS} from './../../actions/index';




const ProductItem = ({product, itemCount, addToCart, toFavorits, isFavorite}) => {
  const {id, title, price, infoText, productImage} = product;
  const favoriteActiveStyle = {
    color: '#fff',
    borderColor: '#068',
    background: '#068'
  };

  return (
    <div key={id} className={s.productItem}>
      <div className={s.productItemImgInfoTextWrap}>
        <div className={s.productItemImgInfoWrap}>
          <Link className={s.productItemImg} to={'/product/' + title}>
            <img src={productImage} alt={title}/>
          </Link>
          <div className={s.productItemInfo}>
            <Link className={s.productItemInfoTitle} to={'/product/' + title}>{ title }</Link>
            <div className={s.productItemInfoText}>{ infoText }</div>
          </div>
        </div>
      </div>

      <div className={s.productItemOrderBlock}>
        <p className={s.productItemOrderPrice}>€{ price }</p>
        <div className={s.productItemBtnWrap}>
          <Link to="/cart" className={s.productItemQuantity}>
            <i className={`material-icons`}>local_mall</i>
            {itemCount ? <span>{itemCount.count}</span> : <span> 0</span>}
          </Link>
          <span
            className={s.productItemBtn}
            onClick={() => {addToCart(product)}}
          >Add to cart</span>
        </div>
        <div className={s.productItemIconsWrap}>
          <i className={`material-icons ${s.productItemFavoriteIcon}`}
             style={isFavorite ? favoriteActiveStyle : null}
             onClick={() => {toFavorits(product)}}
          >bookmark_border</i>
          <i className={`material-icons ${s.productItemCompareIcon}`}>compare_arrows</i>
        </div>
      </div>
    </div>
  )
}


const mapStateToProps = ({addToCart}) => {
  return {
    productsInCart: addToCart
  }
};

const mapDispatchToProps = {
  addToCart: PRODUCT_ADD_TO_CART,
  toFavorits: TO_FAVORITS,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductItem);


