import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Logo from "../assets/Pokémon_Pikachu_art.png"
import {FaBars, FaTimes,FaRegUser} from "react-icons/fa"
import { useRef } from "react";
import useTheme from '../useTheme';



function Nav_Bar() {
    const [theme, toggleTheme] = useTheme();
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
                    <button onClick={toggleTheme} className='theme-switcher'>
                        Switch to {theme ==="light" ? "dark 🌙" :"light ☀️"}
                    </button>
                    <NavLink to="/"><a className='NavBarItem' onClick={showNavBar}>Home</a></NavLink>
                    <NavLink to="/pokemon_info"><a className='NavBarItem' onClick={showNavBar}>Pokemon</a></NavLink>
                    <NavLink to="/none"><a className='NavBarItem' onClick={showNavBar}>Element</a></NavLink>
                    <button onClick={User} className="user-btn"><FaRegUser/> User Dashboard </button>
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



