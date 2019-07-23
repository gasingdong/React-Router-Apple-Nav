import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import styled from 'styled-components';

function SubNav(props) {
    const data = props.data;

    const StyledNavLink = styled(NavLink)`
        text-decoration: none;
        color: #fff;
    `;

    const StyledDiv = styled.div`
        background-color: rgba(242,242,242,0.7); 
        height: 92px;
        width: 100%;
        text-align: center;
        padding: 12px 0;
    `;

    return (
        <StyledDiv>
            {
                data.map(subnavitem => <StyledNavLink key={subnavitem.path} to={`/${subnavitem.path}`}>{subnavitem.name}</StyledNavLink>)
            }
        </StyledDiv>
    );
}

export default SubNav;