import React from "react";
import './Sustainability.css';
import bgImage from '../assets/planting.mp4'
import './Diy.css';


export default function Plant(){
    return(
        <div className="Sustainability">
            <video autoPlay loop muted>
                <source src={bgImage} type ="video/mp4" />
            </video>
            <div className='text-wrapper'>
                <h3>
                    How to Grow Your Own Mushrooms
                </h3>

                <p>
                    Here are some guides on how to start growing your own mushrooms for any experience level:
                </p>
                <ul>
                    <li><a href="https://www.wikihow.com/Grow-Mushrooms-Indoors">How to Grow Mushrooms Indoors</a></li>
                    <li><a href="https://www.wikihow.com/Grow-Edible-Mushrooms">How to Grow Edible Mushrooms</a></li>
                    <li><a href="https://www.wikihow.com/Grow-Organic-Mushrooms">How to Grow Organic Mushrooms</a></li>
                    <li><a href="https://www.wikihow.com/Grow-Hydroponic-Mushrooms">How to Grow Hydroponic Mushrooms</a></li>
                </ul>
            </div>
        </div>
    );
}