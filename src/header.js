import React from "react";
import Search from "./components/search/search";
import Logo from './img/logo.svg'
function Header(){
  return (
    <div className="header">
      <div className="container">
        <div className="header-wrapper">
        <img className="logo" src={Logo} alt='logo'></img>
        <Search></Search>
        </div>
      </div> 
    </div>
  )
}
export default Header