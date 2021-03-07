import { useState } from 'react';
import jwt from 'jsonwebtoken';
import authService from '../services/authService';

const useAuthentication = () => {
  const existingData = JSON.parse(sessionStorage.getItem('userData'));
  const [userData, setUserData] = useState(existingData);

  const isExpired = (token) => {
    const decoded = jwt.decode(token, { complete: true });
    const currentDate = new Date();

    return decoded.exp < currentDate.getTime();
  };

  const setData = (data) => {
    sessionStorage.setItem('userData', JSON.stringify(data));
    setUserData(data);
  };

  const tryRequest = async (request, data) => {
    try {
      const result = await request(data);
      setData(result);
      return { error: null };
    } catch (error) {
      return { error };
    }
  };

  const login = async (data) => tryRequest(authService.login, data);

  const register = async (data) => tryRequest(authService.register, data);

  const logout = () => {
    sessionStorage.removeItem('userData');
    setUserData();
  };

  const isLoggedIn = () => {
    if (!userData || !userData.token) return false;
    const { token } = userData;
    return token && !isExpired(token);
  };

  return { login, register, logout, isLoggedIn, user: userData?.user };
};

export default useAuthentication;
