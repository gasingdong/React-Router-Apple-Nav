import React from 'react';
import { Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import Nav from './Nav';

function NavWrapper() {

    const navData = [
        {
            name: "Mac",
            path: "mac",
            subnav: [
                {
                    name: "MacBook Air",
                    path: "macbook-air",
                    logo: "https://www.apple.com/v/mac/home/ah/images/familybrowser/macbookair__ej39du0gz4uq_large.svg",
                }
            ]
        }
    ];

    const StyledNav = styled.nav`
        background-color: #333;
        height: 44px;
        display: flex;
        justify-content: center;
    `;

    const StyledList = styled.ul`
        display: flex;
        justify-content: space-between;
        color: #fff;
        width: 100%;
        max-width: 1000px;
    `;

    return (
        <header>
            <StyledNav>
                <StyledList>
                    <li><Link to="/"><img alt="apple logo" src="https://www.apple.com/ac/globalnav/4/en_US/images/globalnav/apple/image_large.svg"></img></Link></li>
                    <Nav data={navData[0]}></Nav>
                    <li>iPad</li>
                    <li>iPhone</li>
                    <li>Watch</li>
                    <li>TV</li>
                    <li>Music</li>
                    <li>Support</li>
                    <li><img alt="search" src="https://www.apple.com/ac/globalnav/4/en_US/images/globalnav/search/image_large.svg"></img></li>
                    <li><img alt="bag" src="https://www.apple.com/ac/globalnav/4/en_US/images/globalnav/bag/image_large.svg"></img></li>
                </StyledList>
            </StyledNav>
        </header>
    );
}

export default NavWrapper;