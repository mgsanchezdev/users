import { useState } from 'react';

const useModal = (initialValue = false) => {
  const [isOpenModal, setIsOPenModal] = useState(initialValue);

  const openModal = () => {
    setIsOPenModal(true);
  };

  const closeModal = () => {
    setIsOPenModal(false);
  };
  return [isOpenModal, openModal, closeModal];
};

export default useModal;
