import React, { useState } from 'react';
import Navigation from "./navigation";
import { Link } from 'react-router-dom';

export default function Header() {

  const [ mobileMenu, setMobileMenu ] = useState(false);

  const showMenu = () => setMobileMenu(!mobileMenu);  

  return (
    <div className="Header">
      <div className="Logo">
        <div style={{ paddingLeft: "20px" }}>
          <p>Crypto Capital</p>
        </div>
        <div className="Mobile_Menu" style={{padding: "20px"}}>
          <button onClick={showMenu} className={ !mobileMenu ? "" : "Menu" }>=</button>
          <button onClick={showMenu} className={ mobileMenu ? "" : "Menu" }>X</button>
        </div>  
      </div>
      <div className={ mobileMenu ? "Menu_Visible" : "Menu" }>
        <Navigation />
      </div>
    </div>    
  )
}