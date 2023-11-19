import React from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import { useMemo } from 'react';
import styles from './style.json';

export default function MyLocation() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyAbYfcyZaQ0DRQbYAwgYVEjQMKmXlo-f7E',
  });

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return <Map />;
}

const Map = () => {
  const { colorMode } = useColorMode();
  const center = useMemo(() => ({ lat: 50.42015, lng: 30.5201551 }), []);
  const mapContainerStyle = {
    width: '100%',
    height: '400px',
    borderRadius: '2em',
  };

  const mapOptions = {
    styles: colorMode === 'dark' ? styles : undefined,
  };

  return (
    <GoogleMap
      zoom={14}
      center={center}
      mapContainerStyle={mapContainerStyle}
      options={mapOptions}
    >
      <Marker position={center} />
    </GoogleMap>
  );
};
