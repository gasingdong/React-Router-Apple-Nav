import React from 'react';
import styled from 'styled-components';

function NavWrapper() {

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
                    <li><img alt="apple logo" src="https://www.apple.com/ac/globalnav/4/en_US/images/globalnav/apple/image_large.svg"></img></li>
                    <li>Mac</li>
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