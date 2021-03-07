import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '../context/auth';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isLoggedIn } = useAuth();

  return (
    <Route
      {...rest}
      render={(props) => {
        if (isLoggedIn()) {
          return <Component {...props} />;
        }
        return (
          <Redirect
            to={{ pathname: '/auth', state: { from: props.location } }}
          />
        );
      }}
    />
  );
};

export default PrivateRoute;
