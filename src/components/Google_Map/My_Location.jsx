import React from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import { useMemo } from 'react';

const MyLocation = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
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
    height: '400px', // Adjust the height as needed
  };

  return (
    <GoogleMap zoom={14} center={center} mapContainerStyle={mapContainerStyle}>
      <Marker position={center} />
    </GoogleMap>
  );
};

export default MyLocation;
