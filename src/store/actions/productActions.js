import api from '../../api/axios';

export const fetchProducts = () => async (dispatch, getState) => {
  const { product } = getState();
  if (product.fetchState === 'FETCHING') return;

  dispatch({ type: 'SET_FETCH_STATE', payload: 'FETCHING' });

  try {
    const response = await api.get('/products');
    dispatch({ type: 'SET_PRODUCT_LIST', payload: response.data.products });
    dispatch({ type: 'SET_TOTAL', payload: response.data.total });
    dispatch({ type: 'SET_FETCH_STATE', payload: 'FETCHED' });
  } catch (error) {
    dispatch({ type: 'SET_FETCH_STATE', payload: 'FAILED' });
    console.error('Products fetch error:', error);
  }
};