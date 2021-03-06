import React from 'react';
import {connect} from "react-redux";

import s from './homePage.module.scss';
import ProductItem from '../productItem/productItem'
import LoadingIndicator from "../loadingIndicator/loadingIndicator";
import ProductsListSevice from "../../services/productsListService";


class HomePage extends React.Component  {

  dataService = new ProductsListSevice();

  state = {
    products: [],
    loading: true,
    search: ''
  };

  componentDidMount() {
    this.dataService.getProducts()
      .then(res => this.setState((state) => res.map(item => {
        return {
          products: state.products = [...state.products, item].sort((a, b) => a.price - b.price),
          loading: state.loading = false
        }
      })))
      .catch(err => {
        console.log(err)
      });
  }

  productFilter = () => this.state.products.filter(product => {
    return product.title.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
  });

  priceFilterUp = () => {
    return this.setState(state =>
      state.products = this.productFilter().sort((a, b) => a.price - b.price));
  };

  priceFilterDown = () => {
    this.priceFilterUp();
    return this.setState(state => state.products.reverse());
  };

  homeListRender = () => {
    return this.productFilter().map((product) => {
      const itemCount = this.props.productsInCart.find(({id}) => id === product.id);
      const favoritesItem = this.props.favoritesItems.find(({id}) => id === product.id);
      return (
        <div key={product.id} className={s.productItemWrap}>
          {
            <ProductItem
              itemCount={itemCount}
              product={product}
              isFavorite={favoritesItem}
            />
          }
        </div>
      )
  })};

  render() {
    const {loading, search} = this.state;
    return (
    <div className={s.productListWrapper}>
      <div className={s.productListSearch}>
        <input onChange={e => this.setState({search: e.target.value})}
               type="text"
               value={search}
               placeholder={'Product search...'}
        />
        <i className={`${s.faSearch} fas fa-search`}></i>
      </div>
      <div className={s.filterBlock}>
        <div className={s.filterBlockBtnWrap}>
          <button onClick={this.priceFilterUp}>Price Up
            <i className={`material-icons`}>expand_less</i>
          </button>
        </div>
        <div className={s.filterBlockBtnWrap}>
          <button onClick={this.priceFilterDown}>Price Down
            <i className={`material-icons`}>expand_more</i>
          </button>
        </div>
      </div>
      {loading ? <LoadingIndicator/> : <div>{this.homeListRender()}</div>}
    </div>
  )}
}



const mapStateToProps = ({addToCart, favorites: {favoritesItems}}) => {
  return {
    favoritesItems,
    productsInCart: addToCart
  }
}

export default connect(mapStateToProps)(HomePage)
