import React from 'react';
import {Route, Switch} from "react-router-dom";

import HomePage from '../homePage/homePage';
import CartPage from '../cartPage/cartPage';
import s from './app.module.scss';
import Header from '../header/header';
import FavoritesPage from "../favoritesPage/favoritesPage";
import ProductDetailsPage from "../productDetailsPage/productDetailPage";
import ErrorPage from "../errors/errorPage/errorPage";
import Footer from "../footer/footer";


class App extends React.Component{
  render() {
    return (
      <div className={s.app}>
        <Header/>
        <div className={s.appBodyWrap}>
          <Switch>
            <Route path="/" component={HomePage} exact/>
            <Route path="/cart" component={CartPage}/>
            <Route path="/favorites" component={FavoritesPage}/>
            <Route path="/product/:title" component={ProductDetailsPage}/>
            <Route component={ErrorPage}/>
          </Switch>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
