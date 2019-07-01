const initialState = {
  compareItems: [],
  favoritesItems: []
}

const favorites = (state = initialState, action) => {
  switch (action.type) {
    case 'TO_FAVORITS':
      const favoritesItem = state.favoritesItems.find(({id}) => id === action.product.id);
      const favoritesItemIndex = state.favoritesItems.findIndex(({id}) => id === action.product.id);
      if(favoritesItem){
        return {
          ...state,
          favoritesItems: [
            ...state.favoritesItems.slice(0, favoritesItemIndex),
            ...state.favoritesItems.slice(favoritesItemIndex + 1)
          ]
        }
      }
      return {
        ...state,
        favoritesItems: [
          ...state.favoritesItems,
          action.product,
        ]
      }

    default:
      return state;
  }
}

export default favorites
