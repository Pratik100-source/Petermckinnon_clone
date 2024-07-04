import React from "react";
import "./header.css"
import logo from "./images/logo.png"
import { useState } from "react";

export default function Header(){
    
    const [List, setList] = useState(false)
    const [ishovered, setIshovered] = useState(false)

    const show_list = ()=>{
        setList(true)
        setIshovered(true)
    }
    const hide_list = ()=>{
        setList(false)
        setIshovered(false)
    }

    return(
        <header className="header_main">
        <div className="inner_header">
        <img src={logo} alt="logo"/>
       
       <div className="right_part">
        <nav>
            <ul>
            <li onMouseOver={show_list} onMouseOut={hide_list} className= {`shop ${ishovered ? 'hovered' : ''}`}>SHOP</li>
            <li><a href="#about">ABOUT</a></li>
            <li><a href="#contact">CONTACT</a></li>
            </ul>
        </nav>
        {List && (
             <div className="list_popup" onMouseOver={show_list} onMouseOut={hide_list}> 
            <ul >
                <li>All</li>
                <li>Prints</li>
                <li>Gears</li>
                <li>Presets</li>
            </ul>
                </div>
        )}
        </div>
        

        </div>
        </header>
    )

}