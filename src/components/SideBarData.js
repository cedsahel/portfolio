import React from "react"
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import * as IoIcons from "react-icons/io"
import * as IoIcons5 from "react-icons/io5";

export const SideBarData = [
    {
        title:"Home",
        path:"/",
        icon: <AiIcons.AiFillHome/>,
        cName: "nav-text"
    }, 
    {   
        title:"About",
        path:"/about",
        icon: <FaIcons.FaFlask />,
        cName: "nav-text"

    },
    {
        title:"Projects",
        path:"/project",
        icon: <IoIcons5.IoRocketSharp/>,
        cName: "nav-text"

    },
    {
        title:"Skills",
        path:"/skills",
        icon: <FaIcons.FaFlask />,
        cName: "nav-text"
    },
    {
        title:"Contact",
        path:"/contact",
        icon: <IoIcons.IoMdContact/>,
        cName: "nav-text"
    },
]