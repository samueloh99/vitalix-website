import React from 'react';

import { Container, Card, Title } from './style';

import { CardsData } from './NewData';

const ServiceSection: React.FC = () => {
  return (
    <Container id="serviceSection">
      <Title>
        <h1>CONHEÇA OS NOSSOS TRATAMENTOS</h1>
      </Title>
      {CardsData.map(item => {
        const { id, title, desc, img } = item;
        return (
          <Card key={id}>
            <img src={img} alt="serviceImg" />
            <h1>{title}</h1>
            <h4>{desc}</h4>
          </Card>
        );
      })}
    </Container>
  );
};

export default ServiceSection;
