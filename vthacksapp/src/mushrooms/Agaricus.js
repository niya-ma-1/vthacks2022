import React, { useState } from "react";
import Agaricus from '../assets/mushroom_icons/agaricus_pic.png'

export const Agaricus_icon = () =>{
    
    return(
        <div className="main">
            <img src={Agaricus} style={{width:50, marginTop: -7}} />
        </div>
    );
}