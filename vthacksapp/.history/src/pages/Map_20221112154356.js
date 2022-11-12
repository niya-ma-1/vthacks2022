import React, {Component} from "react";
import {GoogleMap, useLoadScript, Marker} from "@react-google-maps/api";
import "./Map.css"
import { Next } from "react-bootstrap/esm/PageItem";

export function Home(){
    const {isLoaded} = useLoadScript({
        googleMapsApiKey: Next.process,
    })

    if(!isLoaded) return <div>Loading...</div>
    return <Map/>
}

function Map(){
    return <GoogleMap 
        zoom={1} 
        center={{lat:100,lng:-50}} 
        mapContainerClassName="map-container">
    </GoogleMap>
}