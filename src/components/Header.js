import React from 'react'
import logo from '../images/images.png'

export const Header = () => {
    return (
        <nav>
            <div className="center">
                <a className="navigation-brand" href="/">
                    <img src={logo} alt="Staart" />
                </a>
            </div>
        </nav>
    )
}