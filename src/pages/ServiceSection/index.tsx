import React from 'react';

import IndexDesktop from './indexDesktop/indexDesktop';
import IndexMobile from './indexMobile/indexMobile';

const ServiceSection: React.FC = () => {
  return (
    <>
      <IndexDesktop />
      <IndexMobile />
    </>
  );
};

export default ServiceSection;
