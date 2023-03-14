import React from 'react';
import logo from '../../../images/logo512.png';
import './Header.scss';
import Window from './Window/Window';

export default function Header() {
    return (
        <header className="header">
            <div className="header__container">
                <div className="logo_image">
                    <img src={logo} alt="logo" />                    
                </div>
                <div className="header__title">UseEffect Hook</div>
                <Window />
            </div>
        </header>
    )
}
