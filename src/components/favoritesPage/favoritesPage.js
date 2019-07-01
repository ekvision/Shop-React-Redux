import React from 'react';
import {connect} from "react-redux";
import s from "./favoritesPage.module.scss";
import ProductItem from '../productItem/productItem'



const FavoritesPage = ({favoritesItems, productsInCart}) => {
  const favoritesListRender = () => {
    return favoritesItems.map((product) => {
      const itemCount = productsInCart.find(({id}) => id === product.id);
      return (
        <div key={product.id} className={s.favoritesListRender}>
          {
            <ProductItem
              itemCount={itemCount}
              product={product}
              isFavorite={product ? true : false}
            />
          }
        </div>)
    })}

  return (
    <div className={s.favoritesListWrapper}>
      <h2 className={s.favoritesPageTitle}>FAVORITES
        <i className={`material-icons ${s.productItemFavoriteIcon}`}>bookmark</i>
      </h2>
      { favoritesListRender() }
    </div>
  )
}



const mapStateToProps = ({addToCart, favorites: {favoritesItems}}) => {
  return {
    favoritesItems,
    productsInCart: addToCart
  }
}

export default connect(mapStateToProps)(FavoritesPage);
