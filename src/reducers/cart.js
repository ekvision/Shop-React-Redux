
const addItemToCart = (state, actionProduct, itemCartIndex, itemUpdate, item) => {

  if(itemUpdate.count === 0){
    return state.filter(el => el.id !== actionProduct.id)
  }
  if(!item){
    return [
      ...state,
      actionProduct
    ]
  }
  return [
    ...state.slice(0, itemCartIndex),
    itemUpdate,
    ...state.slice(itemCartIndex + 1)
  ]
};


const updateCartItem = (item = {}, quantity) => {
  const {price = item.price, count = 0} = item;
  if(item){
    return  {
      ...item,
      price: price + price/count/quantity,
      count: count + quantity
    }
  }
};


const updateOrder = (state, action, quantity) => {
  const itemCartIndex = state.findIndex(({id}) => id === action.product.id);
  const item = state[itemCartIndex];
  const itemUpdate = updateCartItem(item, quantity);

  return addItemToCart(state, action.product, itemCartIndex, itemUpdate, item)
};

//REDUCER

const cart = (state = [], action) => {
  switch (action.type) {
    case 'PRODUCT_ADD_TO_CART':
      return updateOrder(state, action, 1);

    case 'PRODUCT_REMOVE_FROM_CART':
      return updateOrder(state, action, -1);

    case 'ALL_PRODUCTS_DELETE_FROM_CART':
      const item = state.find(({id}) => id === action.product.id);
      return updateOrder(state, action, -item.count);

    default:
      return state;
  }
}

export default cart

