import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import GoogleMapReact from 'google-map-react';
import {defaultProps} from 'google-map-react';
import {Agaricus_icon} from '../mushrooms/Agaricus';
import {Amanita_icon} from '../mushrooms/Amanita';
import {Boletus_icon} from '../mushrooms/Boletus';
import {Cortinarius_icon} from '../mushrooms/Cortinarius';
import {Entoloma_icon} from '../mushrooms/Entoloma';
import {Hygrocybe_icon} from '../mushrooms/Hygrocybe';
import {Lactarius_icon} from '../mushrooms/Lactarius';
import {Russula_icon} from '../mushrooms/Russula';
import {Suillis_icon} from '../mushrooms/Suillis';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import { HeatCircle} from '../components/HeatCircle';
import carbonEmission from '../assets/carbonEmission';


const google = window.google;
const conditional = true;

export default function Map() {
    const [checked1, setChecked1] = useState(false);
    const [checked2, setChecked2] = useState(false);
    const [checked3, setChecked3] = useState(false);
    const [checked4, setChecked4] = useState(false);
    const [checked5, setChecked5] = useState(false);
    const [checked6, setChecked6] = useState(false);
    const [checked7, setChecked7] = useState(false);
    const [checked8, setChecked8] = useState(false);
    const [checked9, setChecked9] = useState(false);

    
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
  
/*function test(param){
  if(param){
    return (<div><Hygrocybe_icon
    lat={62}
    lng={105}
    text="Random"
    />
    </div>)
}
}*/
function handleChange1(e) {
  setChecked1(e.currentTarget.checked)
}
function handleChange2(e) {
  setChecked2(e.currentTarget.checked)
  console.log("check2")
}
function handleChange3(e) {
  setChecked3(e.currentTarget.checked)
}
function handleChange4(e) {
  setChecked4(e.currentTarget.checked)
}
function handleChange5(e) {
  setChecked5(e.currentTarget.checked)
}
function handleChange6(e) {
  setChecked6(e.currentTarget.checked)
}
function handleChange7(e) {
  setChecked7(e.currentTarget.checked)
}
function handleChange8(e) {
  setChecked8(e.currentTarget.checked)
}
function handleChange9(e) {
  setChecked9(e.currentTarget.checked)
}
return (
  // Important! Always set the container height explicitly
  <div style={{ height: '100vh', width: '100%' }}>
    <ToggleButton
        className="mb-2"
        id="toggle-check"
        type="checkbox"
        variant="outline-warning"
        checked={checked1}
        value="1"
        onChange={handleChange1}
      >
        Agaricus
    </ToggleButton>
    <ToggleButton
        className="mb-2"
        id="toggle-check"
        type="checkbox"
        variant="outline-danger"
        checked={checked2}
        value="1"
        onChange={handleChange2}
      >
        Amanita
    </ToggleButton>
    <ToggleButton
        className="mb-2"
        id="toggle-check"
        type="checkbox"
        variant="outline-warning"
        checked={checked3}
        value="1"
        onChange={handleChange3}
      >
        Boletus
    </ToggleButton>
    <ToggleButton
        className="mb-2"
        id="toggle-check"
        type="checkbox"
        variant="outline-danger"
        checked={checked4}
        value="1"
        onChange={handleChange4}
      >
        Cortinarius
    </ToggleButton>
    <ToggleButton
        className="mb-2"
        id="toggle-check"
        type="checkbox"
        variant="outline-primary"
        checked={checked5}
        value="1"
        onChange={handleChange5}
      >
        Entoloma
    </ToggleButton>
    <ToggleButton
        className="mb-2"
        id="toggle-check"
        type="checkbox"
        variant="outline-danger"
        checked={checked6}
        value="1"
        onChange={handleChange6}
      >
        Hygrocybe
    </ToggleButton>
    <ToggleButton
        className="mb-2"
        id="toggle-check"
        type="checkbox"
        variant="outline-warning"
        checked={checked7}
        value="1"
        onChange={handleChange7}
      >
        Lactarius
    </ToggleButton>
    <ToggleButton
        className="mb-2"
        id="toggle-check"
        type="checkbox"
        variant="outline-danger"
        checked={checked8}
        value="1"
        onChange={handleChange8}
      >
        Russula
    </ToggleButton>
    <ToggleButton
        className="mb-2"
        id="toggle-check"
        type="checkbox"
        variant="outline-warning"
        checked={checked9}
        value="1"
        onChange={handleChange9}
      >
        Suillis
    </ToggleButton>
    <GoogleMapReact
      bootstrapURLKeys={{ key: "AIzaSyCHhSC-JoW54M-PKDBVHe4wWYzdmduMLt4"
      }}
      center={defaultProps.center}
      zoom={defaultProps.zoom}
      yesIWantToUseGoogleMapApiInternals
      onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
    >
      <Agaricus_icon
        lat={39.77}
        lng={-121}
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
        lat={64}
        lng={-149.4}
        text="Alaska"
      />
      <Amanita_icon
        lat={44.5}
        lng={-73.1}
        text="Vermont"
      />
      <Amanita_icon
        lat={30.4}
        lng={-82.3}
        text="Florida"
      />
      <Amanita_icon
        lat={43}
        lng={-83}
        text="North Michigan"
      />
      <Amanita_icon
        lat={47.8}
        lng={-93.1}
        text="Minnesota"
      />
      <Amanita_icon
        lat={35.8}
        lng={-78.3}
        text="North Carolina"
      />
      <Amanita_icon
        lat={34.7}
        lng={-81}
        text="South Carolina"
      />
      <Boletus_icon
        lat={43.8}
        lng={-120.55}
        text="Oregon"
      />
      <Boletus_icon
        lat={47.75}
        lng={-120.74}
        text="Washington"
      />
      <Cortinarius_icon
        lat={48.75}
        lng={-120.74}
        text="Oregon"
      />
      <Cortinarius_icon
        lat={35.51}
        lng={-86.58}
        text="Tennessee"
      />
      <Cortinarius_icon
        lat={44.06}
        lng={-114.74}
        text="Idaho"
      />
      <Cortinarius_icon
        lat={36.77}
        lng={-119.41}
        text="California"
      />
      <Cortinarius_icon
        lat={46.87}
        lng={-110.36}
        text="Montana"
      />
      <Cortinarius_icon
        lat={43.07}
        lng={-107.29}
        text="Wyoming"
      />
      <Entoloma_icon
        lat={37.83}
        lng={-84.27}
        text="Kentucky"
      />
      <Entoloma_icon
        lat={35.6}
        lng={-87}
        text="Tennessee"
      />
      <Entoloma_icon
        lat={37.43}
        lng={-78.65}
        text="Virginia"
      />
      <Entoloma_icon
        lat={39.04}
        lng={-76.64}
        text="Maryland"
      />
      <Entoloma_icon
        lat={38.59}
        lng={-80.45}
        text="West Virginia"
      />
      <Entoloma_icon
        lat={36}
        lng={-79.2}
        text="North Carolina"
      />
      <Hygrocybe_icon
        lat={22.29}
        lng={-155.58}
        text="Hawaii"
      />
      <Hygrocybe_icon
        lat={37.1}
        lng={-119.2}
        text="California"
      />
      <Lactarius_icon
        lat={36.8}
        lng={-118.9}
        text="California"
      />
      <Lactarius_icon
        lat={43.85}
        lng={-120.43}
        text="Oregon"
      />
      <Lactarius_icon
        lat={47.79}
        lng={-120.61}
        text="Washington"
      />
      <Lactarius_icon
        lat={44.01}
        lng={-114.9}
        text="Idaho"
      />
      <Lactarius_icon
        lat={46.92}
        lng={-110.27}
        text="Montana"
      />
      <Lactarius_icon
        lat={43.3}
        lng={-107.41}
        text="Wyoming"
      />
      <Lactarius_icon
        lat={67.1}
        lng={-155.12}
        text="Alaska"
      />
      <Russula_icon
        lat={43.6}
        lng={-122}
        text="Oregon"
      />
      <Russula_icon
        lat={48}
        lng={-121}
        text="Washington"
      />
      <Russula_icon
        lat={43}
        lng={-113}
        text="Idaho"
      />
      <Russula_icon
        lat={47}
        lng={-112}
        text="Montana"
      />
      <Russula_icon
        lat={44}
        lng={-106}
        text="Wyoming"
      />
      <Russula_icon
        lat={63}
        lng={-154}
        text="Alaska"
      />
      <Suillis_icon
        lat={31}
        lng={-99}
        text="Texas"
      />
      <Suillis_icon
        lat={29}
        lng={-81}
        text="Florida"
      />
      <Suillis_icon
        lat={36}
        lng={-81}
        text="North Carolina"
      />

      <HeatCircle
        lat={42}
        lng={-76}
        intensity={1}
      />

     {carbonEmission.map((item)=>{
        return <HeatCircle 
                lat={item["Latitude"]} 
                lng={item["Longitude"]} 
                intensity={item["Total reported direct emissions"]/10000}
        />
     })}


    </GoogleMapReact>
  </div>
);
}

