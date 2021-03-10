/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

import { IoMdClose } from 'react-icons/io';

import './style.css';

import { Data } from './Data';

interface ModalProps {
  isOpen: boolean;
  id: number;
  onClose: () => void;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, id }) => {
  const outsideRef = React.useRef(null);

  const handleCloseOnOverlay = (
    e: React.MouseEvent<HTMLElement, MouseEvent>,
  ) => {
    if (e.target === outsideRef.current) {
      onClose();
    }
  };

  return isOpen ? (
    <div className="modal">
      <div
        ref={outsideRef}
        className="modal__overlay"
        onClick={handleCloseOnOverlay}
      />
      {Data.map(
        (item, index) =>
          item.id === id && (
            // eslint-disable-next-line react/no-array-index-key
            <div key={index} className="modal__box">
              <button className="modal__close" onClick={onClose}>
                <IoMdClose />
              </button>
              <div className="modal__title">{item.name}</div>
              <div className="modal__content">{item.desc1}</div>
              <div className="modal__content">{item.desc2}</div>
              <div className="modal__content">{item.desc3}</div>
              <div className="modal__content">{item.desc4}</div>
            </div>
          ),
      )}
    </div>
  ) : null;
};
