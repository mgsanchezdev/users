import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Auth } from '../views/Auth/Auth';
import PasswordRecovery from '../views/Auth/PasswordRecovery/PasswordRecovery';
import PasswordReset from '../views/Auth/PasswordReset/PasswordReset';
import { Home } from '../views/Home/Home';
import PrivateRoute from './PrivateRoute';
import Error from '../views/Error/Error';
import Profile from '../views/Profile/Profile';
import EditProfile from '../views/EditProfile/EditProfile';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route>
        <Switch>
          <Route exact path="/">
            <Redirect to="/auth" />
          </Route>
          <Route path="/auth" component={Auth} />
          <Route path="/password-reset">
            <Switch>
              <Route
                exact
                path="/password-reset"
                component={PasswordRecovery}
              />
              <Route path="/password-reset/reset" component={PasswordReset} />
            </Switch>
          </Route>
          <PrivateRoute exact path="/home" component={Home} />
          <PrivateRoute exact path="/profile" component={Profile} />
          <PrivateRoute exact path="/editprofile" component={EditProfile} />
          <Route exact path="*" component={Error} />
        </Switch>
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Router;
