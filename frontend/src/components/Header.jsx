import React from 'react'
import "../index.css"
import Logo from "../assets/Logo.png"
import { DrawerWithNavigation } from './DrawerWithNavigation';

function Header() {
  return (

    <nav class="bg-white border-gray-200 dark:bg-gray-900">
        <div class="nav-continer">
            
            <DrawerWithNavigation/>
            <img src={Logo} class="h-8"  /> 
    
        </div>
    </nav>
  );
}

export default Header