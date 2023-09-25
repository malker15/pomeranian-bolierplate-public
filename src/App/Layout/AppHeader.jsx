import React from 'react';

import './styles/header.css';

import PomeranianLogo from "../Images/start-it-logo.svg";

export function AppHeader() {
  return (
    <header>
      <div>
        <div className="header-title">Tytuł nagłówka</div>
        <img src={PomeranianLogo} alt='Logo'/>
      </div>
    </header>
  );
}
