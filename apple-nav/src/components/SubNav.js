import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

function SubNav(props) {
    const { path, subnav } = props.data;
    const theme = {
        light: "rgba(242,242,242,0.7)",
        dark: "#141414", 
    }

    const StyledNavLink = styled(NavLink)`
        text-decoration: none;
        color: ${(props) => props.color};
        font-size: 11px;
    `;

    const StyledDiv = styled.div`
        background-color: ${(props) => props.theme === "dark" ? theme.dark : theme.light}; 
        height: 92px;
        width: 100%;
        text-align: center;
        padding: 12px 0;
        display: flex;
        justify-content: center;
        align-items: baseline;
    `;

    const StyledSubNav = styled.div`
        display: flex;
        flex-flow: column;
        margin: 0 -0.11765em;
        padding: 0 20px;
    `;

    const StyledImg = styled.img`
        margin-top: 5px;
        margin-bottom: -5px;
    `;

    return (
        <StyledDiv theme={path === "tv" ? "dark" : "light"}>
            {
                subnav.map(subnavitem => {
                    return (
                        <StyledNavLink color={path === "tv" ? "#fff" : "#000"} key={`${path}-${subnavitem.path}`} to={`/${path}/${subnavitem.path}`}>
                            <StyledSubNav>
                                <StyledImg height="54px" alt={subnavitem.path} src={subnavitem.logo} />
                                {subnavitem.name}
                            </StyledSubNav>
                        </StyledNavLink>
                    )})
            }
        </StyledDiv>
    );
}

export default SubNav;