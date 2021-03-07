import './textModal.css';

const TextModal = ({ isOpen, closeModal, children }) => {
  const handleModalDialogClick = (e) => {
    e.stopPropagation();
  };
  return (
    <div
      className={`text-modal ${isOpen && 'text-modal-open'}`}
      onClick={closeModal}
      aria-hidden="true"
    >
      <div
        className="text-modal-dialog"
        onClick={handleModalDialogClick}
        aria-hidden="true"
      >
        {children}
        <button
          type="button"
          className="text-modal-dialog-btn button button-yellow"
          onClick={closeModal}
        >
          Aceptar
        </button>
      </div>
    </div>
  );
};

export default TextModal;
