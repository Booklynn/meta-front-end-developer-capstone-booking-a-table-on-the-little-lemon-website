import React from 'react';
import logo from '../../assets/images/Logo.svg';
import './Nav.css';

function Nav() {
    return (
        <nav>
            <ul>
                <li>
                    <a href="/" className="Logo">
                        <img src={logo} alt="logo Little Lemon" />
                    </a>
                </li>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/">About</a>
                </li>
                <li>
                    <a href="/">Reservations</a>
                </li>
                <li>
                    <a href="/order-online">Order Online</a>
                </li>
                <li>
                    <a href="/">Login</a>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;
