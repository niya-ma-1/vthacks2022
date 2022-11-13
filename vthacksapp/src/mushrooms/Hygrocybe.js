import React, { useState } from "react";
import Hygrocybe from '../assets/mushroom_icons/hygrocybe_pic.png'

export function Hygrocybe_icon({appear}){
    // if (appear){
    //     var opacity = 1;
    // }else{
    //     var opacity = 0;
    // }

    return(
        <div className="main">
            <img src={Hygrocybe} 
            style={{width:50, 
            marginTop: -7,
            // opacity: opacity
            }} />
        </div>
    );
}