import React from 'react';
import { connect } from "react-redux";
import s from "./cartPage.module.scss";
import {PRODUCT_ADD_TO_CART, PRODUCT_REMOVE_FROM_CART, ALL_PRODUCTS_DELETE_FROM_CART} from "../../actions";
import {Link} from "react-router-dom";


const CartPage = ({addedProductsToCartPage, onIncrease, onDecrease, onDelete}) => {

  const productList = () => {
    return addedProductsToCartPage.map((product) => {

      const { id, title, price, infoText, productImage, count } = product;

      return (
        <div key={id} className={s.productItem}>
          <div className={s.productItemImgInfoWrap}>
            <div className={s.productItemImg}>
              <img src={productImage} alt={title} />
            </div>
            <div className={s.productItemInfo}>
              <Link className={s.productItemInfoTitle} to={'/product/' + id}>{ title }</Link>
              <div className={s.productItemInfoText}>{ infoText }</div>
            </div>
          </div>

          <div className={s.productItemFooterWrap}>
            <div className={s.productItemCartBtnWrap}>
              <div className={s.productItemQuantityPriceWrap}>
                <div className={s.productItemQuantity}>
                  <i className={`material-icons`}>local_mall</i>
                  <span>{ count }, </span>
                </div>
                <div className={s.productItemTotalPrice}>€{ price/count }</div>
              </div>
              <div className={s.productItemBtnWrap}>
                <div className={s.productItemBtnPlus} onClick={() => {onIncrease(product)}}>
                  <i className="material-icons">add</i>
                </div>
                <div className={s.productItemBtnMinus} onClick={() => {onDecrease(product)}}>
                  <i className="material-icons">remove</i>
                </div>
                <div className={s.productItemBtnDelete} onClick={() => {onDelete(product)}}>
                  <i className="material-icons">delete</i>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    })
  }

  const totalPriceAllProducts = () => {
    return addedProductsToCartPage.reduce((accumulator, currentvalue) => {
      return accumulator + currentvalue.price;
    }, 0)
  }

  return (
    <div className={s.cartPage}>
      <h2 className={s.cartPageTitle}>SHOPPING
        <i className={`material-icons`}>local_mall</i>
      </h2>
      <div>{ productList() }</div>
      {
        totalPriceAllProducts() ?
        <div className={s.cartPagePriceAllWrap}>
          <div className={s.cartPagePriceAllInnerWrap}>
            <span className={s.cartPageTotalPriceAll}>Total:</span>
            <span className={s.cartPagePriceAllProducts}>€{ totalPriceAllProducts() }</span>
          </div>
          <div className={s.cartPagePayWrap}>
            <i className="fas fa-wallet"></i>Pay
          </div>
        </div> :
        <div className={s.cartPageEmptyCart}>Empty shopping cart</div>
      }
    </div>
  )
}


const mapStateToProps = (addedItems) => {
  return {
    addedProductsToCartPage: addedItems.addToCart
  }
}

const mapDispatchToProps = {
  onIncrease: PRODUCT_ADD_TO_CART,
  onDecrease: PRODUCT_REMOVE_FROM_CART,
  onDelete: ALL_PRODUCTS_DELETE_FROM_CART
}

export default connect(mapStateToProps, mapDispatchToProps)(CartPage)
