import React from "react";
import {GoogleMap, useLoadScript, Marker} from "@react-google-maps/api";
import "./Map.css"

let api_key = "AIzaSyARRoVDhEJK8Ge_76u6_Tz7Am0Ad-Eh0Ug";

export function Home(){
    const {} = useLoadScript({googleMapsApiKey: api_key})
    return <Map/>
}

function Map(){
    return <GoogleMap 
        zoom={10} 
        center={{lat:0,lng:0}} 
        mapContainerClassName="map-container">
    </GoogleMap>
}