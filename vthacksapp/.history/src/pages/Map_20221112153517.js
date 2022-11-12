import React, {Component} from "react";
import {GoogleMap, useLoadScript, Marker} from "@react-google-maps/api";
import "./Map.css"

export function Home(){
    const {isLoaded} = useLoadScript({
        googleMapsApiKey: process.env.NEXT})
    return <Map/>
}

function Map(){
    return <GoogleMap 
        zoom={10} 
        center={{lat:100,lng:-50}} 
        mapContainerClassName="map-container">
    </GoogleMap>
}