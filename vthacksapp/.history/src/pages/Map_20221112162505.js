import {useMemo} from "react";
import React, {Component} from "react";
import {GoogleMap, useLoadScript, Marker} from "@react-google-maps/api";
import "./Map.css"

export function Home(){
    <script async
    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyC-IusRaA90lUIVNSkPD1YR72ctf7VWow4&callback=initMap">
    </script>
    return <Map/>
}

function Map(){
    return <GoogleMap 
        zoom={10} 
        center={{lat:100,lng:-50}} 
        mapContainerClassName="map-container">
    </GoogleMap>
}