import api from '../../api/axios';

export const fetchRoles = () => async (dispatch, getState) => {
  const { client } = getState();
  if (client.roles.length > 0) return;

  try {
    const response = await api.get('/roles');
    dispatch({ type: 'SET_ROLES', payload: response.data });
  } catch (error) {
    console.error('Roles fetch error:', error);
  }
};

export const login = (credentials) => async (dispatch) => {
  try {
    const response = await api.post('/login', credentials);
    localStorage.setItem('token', response.data.token);
    dispatch({ type: 'SET_USER', payload: response.data.user });
    return true;
  } catch (error) {
    console.error('Login error:', error);
    return false;
  }
};