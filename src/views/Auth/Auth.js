import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Login } from '../../components/Auth/Login/Login';
import { Register } from '../../components/Auth/Register/Register';
import useModal from '../../hooks/useModal';
import { useAuth } from '../../context/auth';
import './auth.css';
import TermsModal from '../../components/Modal/TermsModal/TermsModal';

export const Auth = () => {
  const history = useHistory();
  const { isLoggedIn } = useAuth();
  const [textButton, setTextButton] = useState('Registrarme');
  const [classButton, setClassButton] = useState('');

  const [isOpenModal, openModal, closeModal] = useModal();

  if (isLoggedIn()) {
    history.push('/home');
  }

  const handleTextButton = () => {
    if (textButton === 'Iniciar Sesión') {
      setTextButton('Registrarme');
      setClassButton('');
    } else {
      setTextButton('Iniciar Sesión');
      setClassButton('login-button');
    }
  };

  if (isOpenModal) {
    return <TermsModal isOpenModal={isOpenModal} closeModal={closeModal} />;
  }

  return (
    <main className="auth">
      <div className="auth-container">
        <section className="auth-forms">
          {textButton === 'Iniciar Sesión' ? (
            <Register openModal={openModal} />
          ) : (
            <Login />
          )}
        </section>

        <button
          type="button"
          className={`auth-button ${classButton}`}
          onClick={handleTextButton}
        >
          {textButton}
        </button>
      </div>
    </main>
  );
};
