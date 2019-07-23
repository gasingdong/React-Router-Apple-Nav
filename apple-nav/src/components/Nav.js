import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import styled from 'styled-components';

function Nav(props) {
    const { name, path, subnav } = props.data;

    const StyledNavLink = styled(NavLink)`
        text-decoration: none;
        color: #fff;
    `;

    return (
        <StyledNavLink to={`/${path}`}>{name}</StyledNavLink>
    );
}

export default Nav;