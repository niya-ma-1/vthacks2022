import React from "react";
import {GoogleMap, useLoadScript, Marker} from "@react-google-maps/api";

export function Home(){
    const {} = useLoadScript({google})
    return <h1>Map</h1>
}