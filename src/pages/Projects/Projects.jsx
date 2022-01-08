import React from 'react'
import "./Project.css"
import twitch from "./03-twitch.jpg"
import { Button } from '@mui/material';


function Projects() {
    return (
        <div className="projects">
            <h2>Works !</h2>
            <div className="project-container">
                <div className="box">
                    <div id="p1" className="project">
                    <div className="card">
                        <h3>TWITCH</h3>
                        <hr />
                        <p>
                            clone de Twitch avec utilisation de l'api en React
                        </p>
                        <Button style={{color:"#FFF"}} variant="text">Plus d'info</Button>
                    </div>
                    </div>
                    <div id="p2" className="project">
                    <div className="card">
                        <h3>SPOTIFY</h3>
                        <hr />
                        <p>
                            clone de Spotify en React et ExpressJS 
                        </p>
                        <Button style={{color:"#FFF"}} variant="text">Plus d'info</Button>
                    </div>
                    </div>
                </div>
                <div className="box">
                    <div id="p3" className="project">
                    <div className="card">
                        <h3>SNAPCHAT</h3>
                        <hr />
                        <p>
                            clene de Snapchat en React Native
                        </p>
                        <Button style={{color:"#FFF"}} variant="text">Plus d'info</Button>
                    </div>

                    </div>
                    <div id="p4" className="project">
                    <div className="card">
                        <h3>Free ads</h3>
                        <hr />
                        <p>
                            clone de LeBonCoin en symfony
                        </p>
                        <Button style={{color:"#FFF"}} variant="text">Plus d'info</Button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects
