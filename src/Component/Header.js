import React from "react";
import logo from "../images/logo.png"

export default function Header(){
    return(
        <div className="header">
            <img src={logo} alt='logo' className="header--image"/>
            <p className="header--title">Meme Generator</p>
            <p className="header--subtitle">Make you own meme!</p>
        </div>
    )
} 