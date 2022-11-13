import React, { useState } from "react";
import './ImageUpload.css';
import bgImage from '../assets/home.mp4'

let img = ""
let name = ""

export const ImageUpload = () =>{
    const [file, setFile] = useState();

    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
        img = e.target.files[0].name;
        for(let i = 0; i < img.length; i++){
            let c = img.charAt(i);
            if(c == '.'){
                break;
            }
            name+=img.charAt(i);
        }
        console.log(img);
    }

    const [cursor, setCursor] = useState('crosshair');

    
    return(
       
        <div className="main">
            <video autoPlay loop muted>
                <source src={bgImage} type ="video/mp4" />
            </video>
            <div>
                <div className="uploadimage">
                    <label htmlFor="imgs">Upload</label>
                </div>
                <input id="imgs" type="file" accept="image/png, image/jpeg,.txt,.doc" onChange={handleChange} />
                <img style={{height: "400px",width:"400px"}} src={file} />
            </div>
            <div>You have uploaded: {name} </div>
        </div>
    );
}
