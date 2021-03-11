/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';

import { IoMdClose } from 'react-icons/io';

// import { useForm } from 'react-hook-form';

import './style.css';

// type Profile = {
//   firstname: string;
//   lastname: string;
//   age: number;
//   htmlFor: LabelHTMLAttributes<HTMLLabelElement>;
// };

interface ModalOuvidoriaProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ModalOuvidoria: React.FC<ModalOuvidoriaProps> = ({
  isOpen,
  onClose,
}) => {
  const outsideRef = React.useRef(null);

  const handleCloseOnOverlay = (
    e: React.MouseEvent<HTMLElement, MouseEvent>,
  ) => {
    if (e.target === outsideRef.current) {
      onClose();
    }
  };

  const [msg, setMsg] = useState('');

  const linkWpp = `https://api.whatsapp.com/send?phone=5511985165678&text=${msg}`;

  return isOpen ? (
    <div className="modal">
      <div
        ref={outsideRef}
        className="modal__overlay"
        onClick={handleCloseOnOverlay}
      />
      <div className="modal__box">
        <button className="modal__close" onClick={onClose}>
          <IoMdClose />
        </button>
        <div className="modal__title">Ouvidoria, deixe seu feedback.</div>
        <form>
          <div className="formInputsDiv">
            <textarea
              className="textareaForm"
              id="age"
              name="age"
              onChange={e => setMsg(e.target.value)}
            />
          </div>
          <a
            className="aLinkForm"
            href={linkWpp}
            target="_blank"
            rel="noopener noreferrer"
          >
            ENVIAR
          </a>
        </form>
      </div>
    </div>
  ) : null;
};
