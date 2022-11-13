import React, { useState } from "react";
import './ImageUpload.css';

export const ImageUpload = () =>{

    const [data,setData]=useState();

    console.log(data)
    let img = ""
    if(data !== undefined){
        img = data[0].name;
    }

    const [file, setFile] = useState();

    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }

    const [cursor, setCursor] = useState('crosshair');

    
    return(
       
        <div className="main">
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
