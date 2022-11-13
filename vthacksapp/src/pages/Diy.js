import React from "react";
import './Sustainability.css';
import bgImage from '../assets/diy.mp4'
import './Diy.css';


export default function Diy(){
    return(
        <div className="Sustainability">
            <video autoPlay loop muted>
                <source src={bgImage} type ="video/mp4" />
            </video>
            <div className='text-wrapper'>
                <h3>
                    DIY Mushroom Crafts
                </h3>

                <p>
                    Mushrooms are not only a delicious source of nutrition, but also have tons of unexpected uitlity uses.
                </p>
                <p>
                    Here are a few tutorials to get started:
                </p>
                <ul>
                    <li><a href="https://www.youtube.com/watch?v=A51zw66oI80" target="_blank">
                        Mycelium Cardboard Growth
                        </a>
                    </li>
                    <li><a href="https://www.youtube.com/watch?v=sjlphXoi-4E" target="_blank">
                        DIY Mushroom Packaging
                        </a>
                    </li>
                    <li><a href="https://www.youtube.com/watch?v=i7FCkK44UcY" target="_blank">
                        100% Biodegradable Mushroom Plastic
                        </a>
                    </li>
                </ul>

            </div>
        </div>
    );
}