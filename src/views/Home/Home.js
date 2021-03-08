import React from 'react';
import UserMenu from '../../components/Layout/Header/UserMenu/UserMenu';
import './home.css';

export const Home = () => (
  <div className="backgroungContainer">
    <UserMenu />
    <h1 className="title">Bienvenidos a nuestra aplicación</h1>;
  </div>
);
