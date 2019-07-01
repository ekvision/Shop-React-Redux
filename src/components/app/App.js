import React from 'react';
import {Route, Switch} from "react-router-dom";

import HomePage from '../homePage/homePage';
import CartPage from '../cartPage/cartPage';
import s from './app.module.scss';
import Header from '../header/header';
import FavoritsPage from "../favoritesPage/favoritesPage";
import ProductDetailsPage from "../productDetailsPage/productDetailPage";
import ErrorPage from "../errors/errorPage/errorPage";

const App = () => {
  return (
    <div className={s.app}>
      <Header/>
      <Switch>
        <Route path="/" component={HomePage} exact/>
        <Route path="/cart" component={CartPage} />
        <Route path="/favorites" component={FavoritsPage} />
        <Route path="/product/:title" component={ProductDetailsPage} />
        <Route component={ErrorPage}/>
      </Switch>
    </div>
  );
}

export default App;
