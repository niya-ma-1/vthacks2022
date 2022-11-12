import {useMemo} from "react";
import React, {Component} from "react";
import {GoogleMap, useLoadScript, Marker} from "@react-google-maps/api";
import "./Map.css"
import ".."

export function Home(){
    const {isLoaded} = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
    })

    if(!isLoaded) return <div>Loading...</div>
    return <Map/>
}

function Map(){
    return <GoogleMap 
        zoom={10} 
        center={{lat:100,lng:-50}} 
        mapContainerClassName="map-container">
    </GoogleMap>
}