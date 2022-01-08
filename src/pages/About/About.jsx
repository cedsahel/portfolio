import React from 'react'
import "./About.css"
import avatar from "./avatar.png"

function About() {
    return (
        <div className="about">
        
                <img src={avatar} style={{width:"300px", height:"300px"}}  alt="" srcset="" />
                <p style={{paddingLeft:"200px",paddingRight:"200px",textAlign:"center"}}>
                    Hello world ! Je suis Cedric Ait Sahel, 
                    j'ai 28 ans et suis actuellement en recherche d'une alternance pour mars 2022.
                    Passionné par les nouvelles technologies et le monde du jeu video.
                </p>
        </div>
    )
}

export default About
