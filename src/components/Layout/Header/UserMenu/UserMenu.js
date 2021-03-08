import React from 'react';
import { useHistory } from 'react-router-dom';
import { Navbar, Nav, Button, Col } from 'react-bootstrap';
import { useAuth } from '../../../../context/auth';
import './userMenu.css';

const UserMenu = () => {
  const history = useHistory();
  const { user, logout } = useAuth();
  const { nick } = user || { nick: 'Usuario' };

  const logoutHandler = () => {
    logout();
    history.push('/auth');
  };

  const profileHandler = () => {
    history.push('/profile');
  };

  const homeHandler = () => {
    history.push('/home');
  };

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#" className="title-user">
        Bienvenido{' '}
      </Navbar.Brand>
      <Navbar.Brand href="#home" className="title-user">
        {nick}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Col className="menu_login">
          <Nav.Link eventKey={2} href="#">
            <Button className="btn btn-success btn-btn" onClick={homeHandler}>
              {' '}
              Home
            </Button>
          </Nav.Link>
          <Nav>
            <Nav.Link eventKey={2} href="#">
              <Button
                className="btn btn-success btn-btn"
                onClick={profileHandler}
              >
                {' '}
                Perfil
              </Button>
            </Nav.Link>
            <Nav.Link eventKey={2} href="#">
              <Button
                className="btn btn-success btn-btn"
                onClick={logoutHandler}
              >
                {' '}
                Cerrar sesión
              </Button>
            </Nav.Link>
          </Nav>
        </Col>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default UserMenu;
