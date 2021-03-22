import React, { useState } from 'react';

import {
  Container,
  ServiceOptions,
  Wrapper,
  ServicesTitle,
  DescriptionWrapper,
  CardInfo,
  CardTitle,
  CardInfoDescription,
} from './style';

import {
  ServiceData,
  ServiceDataSubtitle,
  SubtitlesDescription,
} from '../Data';

const IndexDesktop: React.FC = () => {
  const [open, setOpen] = useState(-1);
  const [nameType, setNameType] = useState('');

  const toggleClick = (index: number, title: string) => {
    setNameType(title);

    if (index === open) {
      setOpen(-1);
    } else {
      setOpen(index);
    }
  };

  return (
    <Container>
      <h1>Conheça os nossos tratamentos</h1>
      <Wrapper>
        <ServiceOptions>
          {ServiceData.map(item => {
            const { id, title } = item;

            return (
              <>
                <ServicesTitle key={id} onClick={() => toggleClick(id, title)}>
                  <h1>{title}</h1>
                </ServicesTitle>
              </>
            );
          })}
        </ServiceOptions>
        {ServiceData.map(item => {
          const { id, title } = item;
          return (
            nameType === title && (
              <DescriptionWrapper key={id}>
                <CardTitle>
                  <h1>{title}</h1>
                  {ServiceDataSubtitle.map(subitem => {
                    const { subtitle, desc1, desc2, desc3, img } = subitem;
                    return (
                      title === subtitle && (
                        <>
                          <div style={{ width: '600px' }}>
                            <h4>{desc1}</h4>
                            <h4>{desc2}</h4>
                            <h4>{desc3}</h4>
                          </div>
                          {img && <img src={img} alt="imgService" />}
                        </>
                      )
                    );
                  })}
                </CardTitle>
                <CardInfo>
                  {SubtitlesDescription.map(subitem => {
                    const {
                      value,
                      img,
                      name,
                      desc1,
                      desc2,
                      desc3,
                      desc4,
                      desc5,
                      desc6,
                      desc7,
                      desc8,
                      desc9,
                    } = subitem;

                    return (
                      id === value && (
                        <CardInfoDescription>
                          <h1>{name}</h1>
                          <div className="textDesc">
                            <h4>{desc1}</h4>
                            <h4>{desc2}</h4>
                            <h4>{desc3}</h4>
                            <h4>{desc4}</h4>
                            <h4>{desc5}</h4>
                            <h4>{desc6}</h4>
                            <h4>{desc7}</h4>
                            <h4>{desc8}</h4>
                            <h4>{desc9}</h4>
                          </div>
                          <div className="imgDesc">
                            <img src={img} alt="descImg" />
                          </div>
                        </CardInfoDescription>
                      )
                    );
                  })}
                </CardInfo>
              </DescriptionWrapper>
            )
          );
        })}
      </Wrapper>
    </Container>
  );
};

export default IndexDesktop;
