import {useMemo} from "react";
import React, {Component} from "react";
import {GoogleMap, useLoadScript, Marker} from "@react-google-maps/api";
import "./Map.css"

export function Home(){
    <script async defer src="https://maps.googleapis.com/maps/api/js?key=you_API_KEY&callback=initMap&libraries=places"
    type="text/javascript"></script>
    return <Map/>
}

function Map(){
    return <GoogleMap 
        zoom={10} 
        center={{lat:100,lng:-50}} 
        mapContainerClassName="map-container">
    </GoogleMap>
}
