import React from 'react'
import "./Skills.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaReact, FaSymfony,FaLaravel  } from 'react-icons/fa'
import { SiPhp,SiMysql,SiMongodb,SiHtml5 } from "react-icons/si";
import {IoLogoCss3,IoLogoJavascript} from "react-icons/io"

function Skills() {
    return (
        <>
        <div className="skills">
            <h4 style={{color:"#FFF",marginBottom:"100px"}}>Competences</h4>
            <div style={{color:"#FFF",marginBottom:"100px"}}>
                <p className="exp">2021 - 2022 : Web Academy by Epitech</p>
                <p className="exp">2020 - 2021 : Demo Injection</p>
                <p className="exp">2019 - 2020 : Thebault Events</p>
            </div>
            <hr style={{width:"300px", marginTop: "10px"}} />
            <div  className="block">
                {/* <div className="skill"><FaReact className="icon" icon={FaReact}/></div>
                <div className="skill"><FaSymfony className="icon"  icon={FaSymfony}/></div>
                <div className="skill"><FaLaravel className="icon" icon={FaLaravel}/></div> */}
            </div>
            <div className="block">
                <div className="skill">
                    <SiPhp className="icon" icon={SiPhp}/>
                </div>
                <div className="skill">
                <SiMysql className="icon" icon={SiMysql}/>
                </div>
                <div className="skill">
                    <SiMongodb className="icon" icon={SiMongodb}/>
                </div>
                <div className="skill">
                    <SiHtml5 className="icon" icon={SiHtml5}/>
                </div>
                <div className="skill">
                    <IoLogoCss3 className="icon" icon={IoLogoCss3}/>
                </div>
                <div className="skill">
                    <IoLogoJavascript className="icon" icon={IoLogoJavascript}/>
                </div>
                <div className="skill"><FaReact className="icon" icon={FaReact}/></div>
                <div className="skill"><FaSymfony className="icon"  icon={FaSymfony}/></div>
                <div className="skill"><FaLaravel className="icon" icon={FaLaravel}/></div>
            </div>
            <div className="block">
                {/* <div className="skill">
                    <SiHtml5 className="icon" icon={SiHtml5}/>
                </div> */}
                {/* <div className="skill">
                    <IoLogoCss3 className="icon" icon={IoLogoCss3}/>
                </div> */}
                {/* <div className="skill">
                    <IoLogoJavascript className="icon" icon={IoLogoJavascript}/>
                </div> */}
            </div>
            
        </div>
        </>
    )
}

export default Skills
