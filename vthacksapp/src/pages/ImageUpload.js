import React, { useState } from "react";
import './ImageUpload.css';
import bgImage from '../assets/home.mp4'

export const ImageUpload = () =>{
    const [data,setData]=useState();
    console.log(data)
    const [file, setFile] = useState();
    let test = "pppp"

    function handleChange(e) {
        console.log(e.target.files);
        setData(e.target.files[0]);
        setFile(URL.createObjectURL(e.target.files[0]));
    }
    let img = ""
    if(data !== undefined){
        img = data[0].name;
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
            <div>You have uploaded: {img} </div>
        </div>
    );
}
