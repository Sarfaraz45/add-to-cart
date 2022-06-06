import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../logo.svg'
import styled from 'styled-components'
import { ButtonContainer } from './Button';
export default class Navbar extends Component{
    render(){
        return(
       <NavWrapper className='navbar navbar-expand-sm  navbar-dark px-sm-5' 
              /* 
https://www.iconfinder.com/icons/1243689/call_phone_icon
Creative Commons (Attribution 3.0 Unported);
https://www.iconfinder.com/Makoto_msk */>
    <NavLink to="/" className="">
        <img src={logo}  alt='store' className='navbar-brand'/>
    </NavLink>

   <ul className='navbar-nav align-items-center mx-auto'>
            <li className='nav-item py-4'>
<NavLink to="/" className="nav-link"></NavLink>
Products
            </li>
   </ul>

   <NavLink to="/cart" className="me-2"  >
       <ButtonContainer> 
           <span className='pr-4'>
           <i className='fas fa-cart-plus'></i>
           </span>
            My Cart</ButtonContainer>
   </NavLink>
</NavWrapper>

        )
    }
}

const NavWrapper = styled.nav`
    background: var(--mainBlue) !important;
    .nav-link{
        color:var(--mainWhite) !important;
        font-size: 1.3rem;
        text-transform: capitalize;
    }
`


