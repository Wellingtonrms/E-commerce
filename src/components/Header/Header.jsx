import React from "react";
import SearchBar from "../SeachBar/SearchBar";
import './Header.css';
import CartButton from "../Cartbutton/Cartbutton";

function Header() {
 return (
  <header className="header">
   <div className="container">
    
    <SearchBar />     
    <CartButton />
   </div>
  </header>
 )
}

export default Header;