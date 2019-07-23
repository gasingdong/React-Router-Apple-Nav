import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import styled from 'styled-components';

function SubNav(props) {
    const data = props.data;

    const StyledNavLink = styled(NavLink)`
        text-decoration: none;
        color: #000;
        font-size: 11px;
    `;

    const StyledDiv = styled.div`
        background-color: rgba(242,242,242,0.7); 
        height: 92px;
        width: 100%;
        text-align: center;
        padding: 12px 0;
    `;

    const StyledSubNav = styled.div`
        display: flex;
        flex-flow: column;
    `;

    return (
        <StyledDiv>
            {
                data.map(subnavitem => {
                    return (
                        <StyledNavLink key={subnavitem.path} to={`/${subnavitem.path}`}>
                            <StyledSubNav>
                                <img alt={subnavitem.path} src={subnavitem.logo} />
                                {subnavitem.name}
                            </StyledSubNav>
                        </StyledNavLink>
                    )})
            }
        </StyledDiv>
    );
}

export default SubNav;