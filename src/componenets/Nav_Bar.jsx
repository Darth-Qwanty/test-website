import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Logo from "../assets/Pokémon_Pikachu_art.png"
import {FaBars, FaTimes,FaRegUser} from "react-icons/fa"
import { Dark_Theme } from './Dark_Theme';
import { useRef } from "react";



function Nav_Bar() {
    const navigate=useNavigate();

    function Homehook(){
     navigate("/")
    }

    function User(){
     navigate("/dashboard")
   }

   const navRef = useRef();

    const showNavBar = ()=>{
        navRef.current.classList.toggle("responsive_nav");
    }
    
    return (
        <div>
            <header>
                <img src={Logo} className="Logo" width="80px" height="80px" onClick={Homehook}></img>
                <nav ref={navRef}>
                    <NavLink to="/"><a className='NavBarItem'>Home</a></NavLink>
                    <NavLink to="/pokemon_info"><a className='NavBarItem'>Pokemon</a></NavLink>
                    <NavLink to="/none"><a className='NavBarItem'>Element</a></NavLink>
                    <button onClick={User}><FaRegUser/> User Dashboard </button>
                    <button className="nav-btn nav-close-btn" onClick={showNavBar}>
                        <FaTimes/>
                    </button>
                </nav>
                <button className="nav-btn" onClick={showNavBar}>
                    <FaBars/>
                </button>
            </header>
        </div>
    );
}

export default Nav_Bar;



