import React from 'react'

export default class ProductsListSevice extends React.Component {

  _restApi = 'http://localhost:3000/products.json';

  getData = async (url) => {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Status ${res.status}`);
    }
    return await res.json();
  }

  getProducts = async () => {
    return await this.getData(this._restApi);
  }

}



