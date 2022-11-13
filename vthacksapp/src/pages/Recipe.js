import React from "react";
import './Sustainability.css';
import bgImage from '../assets/burger.mp4'
import AnimCursor from '../components/AnimatedCursor'


export default function Sustainability(){
    return(
        <div className="Sustainability">
            <video autoPlay loop muted>
                <source src={bgImage} type ="video/mp4" />
            </video>
            <div className='text-wrapper'>
                <h3>
                    Mushroom Recipes
                </h3>

                <p>
                    Mushrooms are one of the most delicious and versatile
                    ingredients in all of gastronomy. 
                </p>
                <p>
                    Here are a few of our favorite recipes:
                </p>
                    <br></br>
                <ul>
                    <li>Mushroom Risotto</li>
                    <li>Creamy Mushroom Sauce</li>
                    <li>Roasted Garlic Mushrooms</li>
                    <li>Grilled Stuffed Mushrooms</li>
                    <li>Cream of Mushroom Soup</li>
                </ul>
            </div>
            <AnimCursor>
            </AnimCursor>  
        </div>
    );
}