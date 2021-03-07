import React from 'react';
import { Link } from 'react-router-dom';
import './Error.css';

const Error = () => (
  <>
    <div className="error">
      <h1>404</h1>
      <p>No encontramos lo que buscabas.</p>
      <Link className="buttonx" to="/">
        <i className="icon-home" /> Haz click aca para regresar!
      </Link>
    </div>
  </>
);
export default Error;
