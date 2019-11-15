import React from 'react';
import CreatePlaylistForm from '../playlist/create_playlist_form_container';
import EditPlaylistForm from '../playlist/edit_playlist_form_container';

const Modal = ({ modal, closeModal }) => {
  if (!modal.type) return null;

  let component;
  switch (modal.type) {
    case 'create':
      component = <CreatePlaylistForm />
      break;
    case 'update':
      component = <EditPlaylistForm />;
      break;
    default:
      return null;
  }

  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        {component}
      </div>
    </div>
  )
};

export default Modal;