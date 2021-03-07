/* eslint-disable no-shadow */
import React from 'react';

import { GoogleMap, useLoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px',
};

const center = {
  lat: -23.580521,
  lng: -46.639591,
};

const MapSection: React.FC = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyBmrsx58cx3YmcdCCcy2_HeEtCi-I7Teko',
    libraries: ['places'],
  });

  if (loadError) {
    return <h1>Error</h1>;
  }
  if (!isLoaded) {
    return <h1>Loading Maps</h1>;
  }

  return (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
      {/* Child components, such as markers, info windows, etc. */}
      <></>
    </GoogleMap>
  );
};

export default MapSection;
