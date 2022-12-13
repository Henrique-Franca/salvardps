import React from "react";
import logo from '../../assets/imgs/logo2.png'
import './Logo.css'

export default props => {
    return (
        <aside className="logo">
            <a href="/" className="logo">
                <img src={logo} alt="logo" />
            </a>
        </aside>
    )
}

