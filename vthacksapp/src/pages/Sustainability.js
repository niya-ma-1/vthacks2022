import React from "react";
import './Sustainability.css';
import bgImage from '../assets/video1.mp4'
import AnimCursor from '../components/AnimatedCursor'

export default function Sustainability(){
    return(
        <div className="Sustainability">
            <video autoPlay loop muted>
                <source src={bgImage} type ="video/mp4" />
            </video>
            <div className='text-wrapper'>
                <h3>
                    How are Mushroom Sustainable?
                </h3>

                <p>
                    Mushrooms are one of the most sustainable and healthy vegtables. Compare 
                    to other vegetables, harvesting a pound of mushrooms only requires 1.8 
                    gallons of water, which is significantly smaller than other vegetables like 
                    potatoes, which requires 34 gallons of water. Mushrooms farming also emits 
                    less carbon dioxide and requires less land than other farming techniques.
                    <br></br>

                    Additionally, mushrooms are a great alternative to meat. Animal agriculture 
                    is the second-largest contributor to human-made greenhouse gas emission.
                    Beside eating, mushrooms can also be used as biodegradable package containers, 
                    a substitude to the polystyrene foam. 


                </p>
            </div>
            <AnimCursor>
            </AnimCursor>
        </div>
    );
}

