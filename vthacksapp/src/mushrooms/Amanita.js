import React, { useState } from "react";
import Amanita from '../assets/mushroom_icons/amanita_pic.png'

export const Amanita_icon = () =>{
    
    return(
        <div className="main">
            <img src={Amanita} style={{width:50, marginTop: -7}} />
        </div>
    );
}