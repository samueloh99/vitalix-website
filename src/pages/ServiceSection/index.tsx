import React, { useState } from 'react';

import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

import {
  Container,
  ServicesTitle,
  ServiceSubtitle,
  ServiceContainer,
  Wrapper,
  ServiceDescription,
  WrapContent,
  WrapImgs,
} from './style';

import { ServiceData, TitleDatas, SubtitleDatas } from './Data';

const ServiceSection: React.FC = () => {
  const [open, setOpen] = useState(-1);
  const [nameType, setNameType] = useState('');
  const [subtitleType, setSubtitleType] = useState('');

  const toggleClick = (index: number, title: string) => {
    setSubtitleType('');
    setNameType(title);

    if (index === open) {
      setOpen(-1);
    } else {
      setOpen(index);
    }
  };

  const toggleClickSubtitle = (index: number, title: string) => {
    setNameType('');
    setSubtitleType(title);
  };

  return (
    <Container>
      <h1>Conheça os nossos tratamentos</h1>
      <Wrapper>
        <ServiceContainer>
          {ServiceData.map(item => {
            const { id, title, subtitle } = item;

            return (
              <>
                {subtitle ? (
                  <ServicesTitle
                    key={id}
                    onClick={() => toggleClick(id, title)}
                  >
                    <h1>{title}</h1>
                    {open === id ? <IoIosArrowUp /> : <IoIosArrowDown />}
                  </ServicesTitle>
                ) : (
                  <ServicesTitle
                    key={id}
                    onClick={() => toggleClick(id, title)}
                  >
                    <h1>{title}</h1>
                  </ServicesTitle>
                )}
                {subtitle?.map(itemSubtitle => {
                  const { idSubtitle, desc } = itemSubtitle;
                  return (
                    <ServiceSubtitle
                      key={idSubtitle}
                      onClick={() => toggleClickSubtitle(idSubtitle, desc)}
                      opacity={open === id ? '1' : '0'}
                      display={open === id ? 'block' : 'none'}
                    >
                      <h1>{desc}</h1>
                    </ServiceSubtitle>
                  );
                })}
              </>
            );
          })}
        </ServiceContainer>
        {TitleDatas.map(item => {
          const { title, desc1, desc2, desc3, img } = item;
          return (
            nameType === title && (
              <ServiceDescription>
                <WrapContent>
                  <h1>{item.title}</h1>
                  <h4>{desc1}</h4>
                  <h4>{desc2}</h4>
                  <h4>{desc3}</h4>
                </WrapContent>
                <WrapImgs>
                  {img && <img src={img} alt="imgServiceDesc" />}
                </WrapImgs>
              </ServiceDescription>
            )
          );
        })}
        {SubtitleDatas.map(item => {
          const {
            id,
            desc1,
            desc2,
            desc3,
            desc4,
            desc5,
            desc6,
            desc7,
            desc8,
            desc9,
            img,
          } = item;
          return (
            id === subtitleType && (
              <ServiceDescription>
                <WrapContent>
                  <h1>{id}</h1>
                  <h4>{desc1}</h4>
                  <h4>{desc2}</h4>
                  <h4>{desc3}</h4>
                  <h4>{desc4}</h4>
                  <h4>{desc5}</h4>
                  <h4>{desc6}</h4>
                  <h4>{desc7}</h4>
                  <h4>{desc8}</h4>
                  <h4>{desc9}</h4>
                </WrapContent>
                <WrapImgs>
                  {img && <img src={img} alt="imgServiceDesc" />}
                </WrapImgs>
              </ServiceDescription>
            )
          );
        })}
      </Wrapper>
    </Container>
  );
};

export default ServiceSection;
