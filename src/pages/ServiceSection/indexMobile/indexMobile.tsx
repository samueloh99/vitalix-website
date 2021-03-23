/* eslint-disable no-sequences */
/* eslint-disable no-unused-expressions */
import React, { useState } from 'react';

import { Container, ServiceOptions, ServicesTitle } from './style';

import { ServiceData } from '../Data';

import { Modal } from '../../../components/Modal';

const IndexMobile: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [serviceID, setServiceId] = useState(0);

  const toggleClick = () => {
    setOpen(!open);
  };

  const handleId = (id: number) => {
    setServiceId(id);
  };

  return (
    <Container>
      <h1>Conheça os nossos tratamentos</h1>
      <ServiceOptions>
        {ServiceData.map(item => {
          const { id, title } = item;

          return (
            <>
              <ServicesTitle
                key={id}
                onClick={() => {
                  toggleClick(), handleId(id);
                }}
              >
                <h1>{title}</h1>
              </ServicesTitle>
            </>
          );
        })}
        <Modal
          serviceId={serviceID}
          isOpen={open}
          onClose={() => toggleClick()}
        />
      </ServiceOptions>
    </Container>
  );
};

export default IndexMobile;
