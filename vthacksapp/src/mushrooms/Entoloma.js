import React, { useState } from "react";
import Entoloma from '../assets/mushroom_icons/entoloma_pic.png'

export const Entoloma_icon = () =>{
    
    return(
        <div className="main">
            <img src={Entoloma} style={{width:50, marginTop: -7}} />
        </div>
    );
}