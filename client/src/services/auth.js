import axios from 'axios';

const login = async (credentials) => {
  const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/api/login`, credentials);
  return response.data;
};

const register = async (enteredData) => {
  const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/api/register`, enteredData);
  return response.data;
};

// eslint-disable-next-line
export default { login, register };
