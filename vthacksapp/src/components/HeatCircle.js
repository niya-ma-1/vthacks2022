import React, { useState } from "react";
import Circle from '../assets/circle.png'

export function HeatCircle({intensity}){

    return(
        <div className="main">
            <img src={Circle} 
            style={{width:10, 
                    marginTop: -7, 
                    opacity: intensity,
                    zIndex: -1}} />
        </div>
    );
}