import React, {Component} from "react";
import {GoogleMap, useLoadScript, Marker} from "@react-google-maps/api";
import "./Map.css"

let key = "AIzaSyARRoVDhEJK8Ge_76u6_Tz7Am0Ad-Eh0Ug"

export function Home(){
    const {} = useLoadScript({
        googleMapsApiKey: key,
    })
    return <Map/>
}

function Map(){
    return <GoogleMap 
        zoom={1} 
        center={{lat:100,lng:-50}} 
        mapContainerClassName="map-container">
    </GoogleMap>
}