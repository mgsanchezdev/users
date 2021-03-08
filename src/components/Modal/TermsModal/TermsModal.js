import React from 'react';
import useGet from '../../../hooks/useGet';
import TextModal from '../Base/TextModal/TextModal';
import Loading from '../../Loading/Loading';

const TermsModal = ({ isOpenModal, closeModal }) => {
  const [data, fetching] = useGet('terms-and-conditions');
  if (fetching) {
    return <Loading />;
  }

  return (
    <TextModal isOpen={isOpenModal} closeModal={closeModal}>
      {data && data[0]?.Description}
    </TextModal>
  );
};

export default TermsModal;
