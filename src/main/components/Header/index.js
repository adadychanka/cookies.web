import React from 'react';
import Logo from "../Logo";
import Nav from "../Nav";

const Header = () => {
    return (
        <header className="header">
            <div className="header__logo">
                <Logo />
            </div>
            <div className="header__nav">
                <Nav />
            </div>
            <div className="header__social">
                <div className="header__social-icon">
                    Rarible
                </div>
                <div className="header__social-icon">
                    Twitter
                </div>
            </div>
        </header>
    );
};

export default Header;