import React, { useState } from "react";
import './ImageUpload.css';

function ImageUpload(){
    const [data,setData]=useState();
    console.log(data)
    let img = ""
    if(data !== undefined){
        img = data[0].name;
    }
    
    
    return(
        <div className="main">
            <div>
                <div className="uploadimage">
                    <label htmlFor="imgs">Upload</label>
                </div>
                <input id="imgs" type="file" accept="image/png, image/jpeg,.txt,.doc" onChange={(e)=>setData(e.target.files)} />
            </div>
            <div>You have uploaded: {img} </div>
        </div>
    );
}
export default ImageUpload;