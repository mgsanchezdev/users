import http from '../utils/http';

const send = async (endpoint, data) => {
  const {
    data: { jwt, user },
  } = await http.post(endpoint, data);
  return {
    token: jwt,
    user: {
      nick: user.username,
      id: user._id,
    },
  };
};

const login = async ({ identifier, password }) =>
  send('auth/local', { identifier, password });
const register = async ({ username, email, password }) =>
  send('auth/local/register', { username, email, password });

export default {
  login,
  register,
};
