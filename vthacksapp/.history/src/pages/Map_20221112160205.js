import {useMemo} from "react";
import React, {Component} from "react";
import {GoogleMap, useLoadScript, Marker} from "@react-google-maps/api";
import "./Map.css"

export function Home(){
    <script async defer src="https://maps.googleapis.com/maps/api/js?key=you_AIzaSyARRoVDhEJK8Ge_76u6_Tz7Am0Ad-Eh0Ug&callback=initMap&libraries=places"
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
