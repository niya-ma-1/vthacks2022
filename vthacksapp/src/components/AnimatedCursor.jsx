import React from 'react'
import AnimatedCursor from "react-animated-cursor"

export default function AnimCursor(){
    return (
        <AnimatedCursor
            innerSize = {8}
            outerSize = {8}
            color = '139,69,19'
            outerAlpha={0.2}
            innerScale={0.7}
            outerScale={5}
            

        />
    );
}