export const PRODUCT_ADD_TO_CART = (product) => ({
  type: 'PRODUCT_ADD_TO_CART',
  product
})

export const PRODUCT_REMOVE_FROM_CART = (product) => ({
  type: 'PRODUCT_REMOVE_FROM_CART',
  product
})

export const ALL_PRODUCTS_DELETE_FROM_CART = (product) => ({
  type: 'ALL_PRODUCTS_DELETE_FROM_CART',
  product
})

export const TO_FAVORITS = (product) => ({
  type: 'TO_FAVORITS',
  product
})
