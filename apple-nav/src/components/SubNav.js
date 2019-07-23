import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import styled from 'styled-components';

function SubNav(props) {
    const { data, parent } = props;
    const subnav = data[parent].subnav;

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
        <StyledDiv>
            {
                subnav.map(subnavitem => {
                    return (
                        <StyledNavLink key={subnavitem.path} to={`/${parent}/${subnavitem.path}`}>
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