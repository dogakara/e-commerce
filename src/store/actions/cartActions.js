import { setCart } from '../shoppingCartReducer';

export const addToCart = (product) => (dispatch, getState) => {
  const { cart } = getState().cart;
  const existingItem = cart.find(item => item.product.id === product.id);

  let newCart;
  if (existingItem) {
    newCart = cart.map(item =>
      item.product.id === product.id
        ? { ...item, count: item.count + 1 }
        : item
    );
  } else {
    newCart = [...cart, { count: 1, checked: true, product }];
  }

  dispatch(setCart(newCart));
};

export const removeFromCart = (productId) => (dispatch, getState) => {
  const { cart } = getState().cart;
  const newCart = cart.filter(item => item.product.id !== productId);
  dispatch(setCart(newCart));
};

export const toggleCartItem = (productId) => (dispatch, getState) => {
  const { cart } = getState().cart;
  const newCart = cart.map(item =>
    item.product.id === productId
      ? { ...item, checked: !item.checked }
      : item
  );
  dispatch(setCart(newCart));
};