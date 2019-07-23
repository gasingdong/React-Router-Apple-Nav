import React from 'react';
import { Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import Nav from './Nav';
import SubNav from './SubNav';

function NavWrapper() {

    const navData = {
        mac: {
            name: "Mac",
            path: "mac",
            subnav: [
                {
                    name: "MacBook Air",
                    path: "macbook-air",
                    logo: "https://www.apple.com/v/mac/home/ah/images/familybrowser/macbookair__ej39du0gz4uq_large.svg",
                },
                {
                    name: "MacBook Pro",
                    path: "macbook-pro",
                    logo: "https://www.apple.com/v/mac/home/ah/images/familybrowser/macbookpro__enfip2k1cxkm_large.svg",
                },
                {
                    name: "iMac",
                    path: "imac",
                    logo: "https://www.apple.com/v/mac/home/ah/images/familybrowser/imac__dkswmjfqeziq_large.svg",
                },
                {
                    name: "iMac Pro",
                    path: "imac-pro",
                    logo: "https://www.apple.com/v/mac/home/ah/images/familybrowser/imac_pro__eer4bfwlutme_large.svg",
                },
                {
                    name: "Mac Pro",
                    path: "mac-pro",
                    logo: "https://www.apple.com/v/mac/home/ah/images/familybrowser/mac_pro__bn92faz71k6a_large.svg",
                },
                {
                    name: "Mac mini",
                    path: "mac-mini",
                    logo: "https://www.apple.com/v/mac/home/ah/images/familybrowser/macmini__c6u0it831y0y_large.svg",
                },
                {
                    name: "Compare",
                    path: "compare",
                    logo: "https://www.apple.com/v/mac/home/ah/images/familybrowser/mac_comp__ee2pokmcxh26_large.svg",
                },
                {
                    name: "Pro Display XDR",
                    path: "prod-xdr",
                    logo: "https://www.apple.com/v/mac/home/ah/images/familybrowser/pro_display_xdr__do0vjpny1kqe_large.svg",
                },
                {
                    name: "Accessories",
                    path: "mac-accessories",
                    logo: "https://www.apple.com/v/mac/home/ah/images/familybrowser/mac_acc__fy6vtx5eqoyi_large.svg",
                },
                {
                    name: "Mojave",
                    path: "mojave",
                    logo: "https://www.apple.com/v/mac/home/ah/images/familybrowser/mac_osx__dntc9ef2limq_large.svg",
                }
            ]
        },
    };

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
                    <Nav data={navData.mac}></Nav>
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
            <Route path="/:category" render={props => <SubNav data={navData[props.match.params.category].subnav} />} />
        </header>
    );
}

export default NavWrapper;