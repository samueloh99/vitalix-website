/* eslint-disable no-shadow */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { MouseEvent, TouchEvent } from 'react';

import { IoMdClose } from 'react-icons/io';

import { AiOutlineDown } from 'react-icons/ai';

import {
  ServiceDataSubtitle,
  SubtitlesDescription,
} from '../../pages/ServiceSection/Data';

import {
  ModalContainer,
  ModalOverlay,
  ModalBox,
  ModalCloseBtn,
  ModalServiceContent,
  ModalTitle,
} from './style';

interface ModalProps {
  serviceId: number;
  isOpen: boolean;
  onClose: () => void;
}

export const Modal: React.FC<ModalProps> = ({ serviceId, isOpen, onClose }) => {
  const overlayRef = React.useRef(null);

  const handleOverlayClick = (
    e:
      | React.TouchEvent
      | React.MouseEvent<HTMLDivElement, TouchEvent | MouseEvent>,
  ) => {
    if (e.target === overlayRef.current) {
      onClose();
    }
  };

  return isOpen ? (
    <ModalContainer>
      <ModalOverlay
        onClick={() => handleOverlayClick}
        className="modal_overlay"
      />
      <ModalBox className="modal_box">
        <ModalCloseBtn
          onClick={onClose}
          ref={overlayRef}
          className="modal_close_btn"
        >
          <IoMdClose color="black" size={20} />
        </ModalCloseBtn>
        {ServiceDataSubtitle.map(item => {
          const { idSubtitle, subtitle, desc1, desc2, desc3, img } = item;
          return (
            idSubtitle === serviceId && (
              <ModalTitle className="modal_title">
                <h1>{subtitle}</h1>
                <h4>{desc1}</h4>
                <h4>{desc2}</h4>
                <h4>{desc3}</h4>
                {img && <img src={img} alt="imgMobile" />}

                <button>
                  <AiOutlineDown size={20} color="black" />
                </button>

                {SubtitlesDescription.map(subitem => {
                  const {
                    value,
                    name,
                    desc1,
                    desc2,
                    desc3,
                    desc4,
                    desc5,
                    desc6,
                    desc7,
                    desc8,
                    img,
                  } = subitem;
                  return (
                    value === serviceId && (
                      <ModalServiceContent>
                        <h1>{name}</h1>
                        <div className="serviceInfo">
                          <h4>{desc1}</h4>
                          <h4>{desc2}</h4>
                          <h4>{desc3}</h4>
                          <h4>{desc4}</h4>
                          <h4>{desc5}</h4>
                          <h4>{desc6}</h4>
                          <h4>{desc7}</h4>
                          <h4>{desc8}</h4>
                          {img && <img src={img} alt="imgServiceMob" />}
                        </div>
                      </ModalServiceContent>
                    )
                  );
                })}
              </ModalTitle>
            )
          );
        })}
      </ModalBox>
    </ModalContainer>
  ) : null;
};
