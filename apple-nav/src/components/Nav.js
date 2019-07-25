import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

function Nav(props) {
    const { name, path } = props.data;

    const StyledNavLink = styled(NavLink)`
        text-decoration: none;
        color: #fff;

        &:hover {
            opacity: 0.65;
        };

        transition: opacity 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    `;

    return (
        <StyledNavLink activeClassName="active-nav" to={`/${path}`}>{name}</StyledNavLink>
    );
}

export default Nav;