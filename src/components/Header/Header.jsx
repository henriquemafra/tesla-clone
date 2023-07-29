import React, { useRef, useState } from "react";
import './Header.css'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import LanguageIcon from '@mui/icons-material/Language';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

function Header() {
  const dropDownRef = useRef(null);
  const [isActive, setIsActive] = useState(false);

  const onClick = () => {
    setIsActive(!isActive);
  };

  return (
    <header>
      <div className="header-logo">
        <a href="/">
          <svg viewBox="0 0 342 35" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 .1a9.7 9.7 0 0 0 7 7h11l.5.1v27.6h6.8V7.3L26 7h11a9.8 9.8 0 0 0 7-7H0zm238.6 0h-6.8v34.8H263a9.7 9.7 0 0 0 6-6.8h-30.3V0zm-52.3 6.8c3.6-1 6.6-3.8 7.4-6.9l-38.1.1v20.6h31.1v7.2h-24.4a13.6 13.6 0 0 0-8.7 7h39.9v-21h-31.2v-7h24zm116.2 28h6.7v-14h24.6v14h6.7v-21h-38zM85.3 7h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 13.8h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 14.1h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zM308.5 7h26a9.6 9.6 0 0 0 7-7h-40a9.6 9.6 0 0 0 7 7z" fill="currentColor"></path>
          </svg>
        </a>
      </div>

      {/* Botão de hambúrguer visível apenas em dispositivos móveis */}
      <div className="menu-button-mobile" onClick={onClick}>
        <div className={`menu-icon ${isActive ? 'active' : ''}`}>
          <button>Menu</button>
        </div>
      </div>

      <div className={`menu-options ${isActive ? 'active' : ''}`}>
        <ul>
          <li><a href="/">Vehicles</a></li>
          <li><a href="/">Energy</a></li>
          <li><a href="/">Charging</a></li>
          <li><a href="/">Discover</a></li>
          <li><a href="https://shop.tesla.com">Shop</a></li>
        </ul>
      </div>

      <nav className={`menu-dropdown ${isActive ? "active" : ""}`}>
      <CloseOutlinedIcon className="close-button" onClick={onClick}/>
        <ul>
          <li><a href="/">Vehicles</a> <ArrowForwardIosOutlinedIcon className="arrow-button" /></li>
          <li><a href="/">Energy</a> <ArrowForwardIosOutlinedIcon className="arrow-button" /></li>
          <li><a href="/">Charging</a> <ArrowForwardIosOutlinedIcon className="arrow-button" /></li>
          <li><a href="/">Discover</a> <ArrowForwardIosOutlinedIcon className="arrow-button" /></li>
          <li><a href="https://shop.tesla.com">Shop</a></li>
          <li><a href="/">Support</a></li>
          <li><a className="language" href="/"><LanguageIcon className="language-icon"/> United States</a> <ArrowForwardIosOutlinedIcon className="arrow-button" /><br/>
          <p className="language-p">English</p></li>
          <li><a href="/"><AccountCircleOutlinedIcon className="language-icon"/> Account</a> <ArrowForwardIosOutlinedIcon className="arrow-button" /></li>
        </ul>
      </nav>

      <div className="user-buttons">
        <ul>
          <li>
            <a href="/" aria-label="Support">
              <HelpOutlineIcon className="icon" />
            </a>
          </li>
          <li>
            <a href="/">
              <LanguageIcon className="icon" />
            </a>
          </li>
          <li>
            <a href="/" aria-label="Account">
              <AccountCircleOutlinedIcon className="icon" />
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header;
