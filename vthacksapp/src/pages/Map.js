import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import GoogleMapReact from 'google-map-react';
import {defaultProps} from 'google-map-react';
import {ImageUpload} from './ImageUpload';

const google = window.google;

export default function Map() {
    const defaultProps = {
      center: {
        lat: 37.99835602,
        lng: -96.01502627
      },
      zoom: 5.3
    };

    const handleApiLoaded = (map, maps) => {
      // use map and maps objects
    };
  
return (
  // Important! Always set the container height explicitly
  <div style={{ height: '100vh', width: '100%' }}>
    <GoogleMapReact
      bootstrapURLKeys={{ key: "AIzaSyCHhSC-JoW54M-PKDBVHe4wWYzdmduMLt4"
      }}
      center={defaultProps.center}
      zoom={defaultProps.zoom}
      yesIWantToUseGoogleMapApiInternals
      onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
    >
      <ImageUpload
        lat={40.955413}
        lng={-90.337844}
        text="My Marker"
      />
    </GoogleMapReact>
  </div>
);
}

