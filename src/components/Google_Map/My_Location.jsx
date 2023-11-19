import React from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import { useMemo } from 'react';
import styles from './style.json';

const MyLocation = () => {
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
};

const Map = () => {
  const center = useMemo(() => ({ lat: 50.42015, lng: 30.5201551 }), []);
  const mapContainerStyle = {
    width: '100%',
    height: '400px',
    borderRadius: '2em',
    disableDefaultUI: true, // disable default map UI
    draggable: true, // make map draggable
    keyboardShortcuts: false, // disable keyboard shortcuts
    scaleControl: true, // allow scale controle
    scrollwheel: true, // allow scroll wheel
    styles: styles, // change default map styles
  };

  return (
    <GoogleMap zoom={14} center={center} mapContainerStyle={mapContainerStyle}>
      <Marker position={center} />
    </GoogleMap>
  );
};

export default MyLocation;
