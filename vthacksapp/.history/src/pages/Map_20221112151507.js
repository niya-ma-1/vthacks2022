import React from "react";
import {GoogleMap, useLoadScript, Marker} from "@react-google-maps/api";

let api_key = "AIzaSyARRoVDhEJK8Ge_76u6_Tz7Am0Ad-Eh0Ug";

export function Home(){
    const {} = useLoadScript({googleMapsApiKey: api_key})
    return <h1>Map</h1>
}

function Map(){
    return 
}