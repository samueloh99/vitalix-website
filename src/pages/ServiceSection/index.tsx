/* eslint-disable no-unused-expressions */
/* eslint-disable react/button-has-type */
/* eslint-disable no-unneeded-ternary */
/* eslint-disable no-bitwise */
/* eslint-disable consistent-return */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/no-array-index-key */

import React, { useState, useEffect } from 'react';

import { AiOutlineCalendar } from 'react-icons/ai';

import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

import {
  Container,
  Services,
  ServiceOptions,
  ServiceContent,
  ContentInfo,
  ContentInfoDescription,
} from './style';

import { ServiceData, subtitleDatas, titleDatas } from './Data';

import clareamentoDental from '../../assets/clareamentoDental.jpg';

import * as colors from '../../styles/colors';

const ServiceSection: React.FC = () => {
  const [open, setOpen] = useState(-1);
  const [type, setType] = useState('');
  const [titleData, setTitleData] = useState('');

  useEffect(() => {
    setTitleData('');
  }, [type]);

  const clickSubtitle = (subtitle: string) => {
    setType(subtitle);
  };

  const toggleClick = (index: number, serviceData: string) => {
    setTitleData(serviceData);
    setType('');

    if (index === open) {
      setOpen(-1);
    } else {
      setOpen(index);
    }
  };

  return (
    <Container id="serviceSection">
      <h1>Conheça nossos tratamentos</h1>
      <div
        style={{
          width: '165px',
          height: '3px',
          backgroundColor: colors.blueshock,
          marginLeft: '250px',
          marginTop: '5px',
        }}
      />
      <Services>
        <ServiceOptions>
          {ServiceData.map((serviceData, index) =>
            serviceData.subtitle ? (
              <>
                <div
                  onClick={() => toggleClick(index, serviceData.title)}
                  key={index}
                  style={{
                    marginBottom: open === index ? '0px' : '10px',
                    borderRadius: open === index ? '5px 5px 0px 0px' : '5px',
                  }}
                >
                  {serviceData.title}
                  {open === index ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </div>
                <div
                  style={{
                    display: open === index ? 'flex' : 'none',
                    borderRadius: open === index ? '0px 0px 5px 5px' : '5px',
                  }}
                  className="info"
                >
                  {serviceData.subtitle?.map(
                    (subtitle, indexData) =>
                      subtitle && (
                        <div
                          key={indexData}
                          onClick={() => clickSubtitle(subtitle)}
                        >
                          {subtitle}
                        </div>
                      ),
                  )}
                </div>
              </>
            ) : (
              <div
                onClick={() => toggleClick(index, serviceData.title)}
                key={index}
              >
                {serviceData.title}
              </div>
            ),
          )}
        </ServiceOptions>
        <ServiceContent>
          {subtitleDatas.map(
            (item, index) =>
              item.id === type && (
                <div key={index}>
                  <ContentInfo>
                    <ContentInfoDescription>
                      <h4 style={{ fontSize: '20px' }}>{item.id}</h4>
                      <h4 style={{ fontWeight: 'lighter', marginTop: '20px' }}>
                        {item.desc1}
                      </h4>
                      <h4 style={{ fontWeight: 'lighter', marginTop: '20px' }}>
                        {item.desc2}
                      </h4>
                      <h4 style={{ fontWeight: 'lighter', marginTop: '20px' }}>
                        {item.desc3}
                      </h4>
                      <h4 style={{ fontWeight: 'lighter', marginTop: '20px' }}>
                        {item.desc4}
                      </h4>
                      <h4 style={{ fontWeight: 'lighter', marginTop: '20px' }}>
                        {item.desc5}
                      </h4>
                      <h4 style={{ fontWeight: 'lighter', marginTop: '20px' }}>
                        {item.desc6}
                      </h4>
                      <h4 style={{ fontWeight: 'lighter', marginTop: '20px' }}>
                        {item.desc7}
                      </h4>
                      <h4 style={{ fontWeight: 'lighter', marginTop: '20px' }}>
                        {item.desc8}
                      </h4>
                      <h4 style={{ fontWeight: 'lighter', marginTop: '20px' }}>
                        {item.desc9}
                      </h4>
                      <button>
                        AGENDE UM HORÁRIO
                        <div />
                        <AiOutlineCalendar />
                      </button>
                    </ContentInfoDescription>
                    {/* <img src={clareamentoDental} alt="img" /> */}
                  </ContentInfo>
                </div>
              ),
          )}
        </ServiceContent>
        {titleDatas.map(
          (item, index) =>
            item.title === titleData && (
              <div key={index}>
                <ContentInfo>
                  <ContentInfoDescription>
                    <h4 style={{ fontSize: '20px' }}>{item.title}</h4>
                    <h4 style={{ fontWeight: 'lighter', marginTop: '20px' }}>
                      {item.desc1}
                    </h4>
                    <h4 style={{ fontWeight: 'lighter', marginTop: '20px' }}>
                      {item.desc2}
                    </h4>
                    <h4 style={{ fontWeight: 'lighter', marginTop: '20px' }}>
                      {item.desc3}
                    </h4>

                    <button>
                      AGENDE UM HORÁRIO
                      <div />
                      <AiOutlineCalendar />
                    </button>
                  </ContentInfoDescription>
                  {/* <img src={clareamentoDental} alt="img" /> */}
                </ContentInfo>
              </div>
            ),
        )}
      </Services>
    </Container>
  );
};

export default ServiceSection;
