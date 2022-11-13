import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import GoogleMapReact from 'google-map-react';
import {defaultProps} from 'google-map-react';
import {Agaricus_icon} from '../mushrooms/Agaricus';


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
      <Agaricus_icon
        lat={33.77}
        lng={-118}
        text="California"
      />
      <Agaricus_icon
        lat={44.5}
        lng={-117}
        text="Oregon"
      />
      <Agaricus_icon
        lat={47.6}
        lng={-122}
        text="Washington"
      />
      <Agaricus_icon
        lat={43.7}
        lng={-116.3}
        text="Idaho"
      />
      <Agaricus_icon
        lat={39.2}
        lng={-92}
        text="Montana"
      />
      <Agaricus_icon
        lat={43.8}
        lng={-105.8}
        text="Wyoming"
      />
      <Agaricus_icon
        lat={31.1}
        lng={-87.4}
        text="Alaska"
      />
    </GoogleMapReact>
  </div>
);
}

