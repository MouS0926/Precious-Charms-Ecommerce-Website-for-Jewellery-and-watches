import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { MdMenu, MdClose } from 'react-icons/md';
import logo from "../home-image/logo-white.png"
import blackLogo from "../home-image/logo-black.png"
import styled from "styled-components"
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Box } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';
import { Avatar } from '@chakra-ui/avatar';
import { LOGOUT } from '../Redux/AuthReducer/actionType';


interface CustomNavLinkProps {
  to: string;
  onClick?: () => void;
  children: React.ReactNode;
}

const CustomNavLink: React.FC<CustomNavLinkProps> = ({ to, onClick, children }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <li className={`navbar__item ${isActive ? 'active' : ''}`} onClick={onClick}>
      <NavLink to={to}>{children}</NavLink>
    </li>
  );
};

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dispatch:any =useDispatch()
const isAuth =useSelector((store:any)=>store.authReducer.isAuth);
const name =useSelector((store:any)=>store.authReducer.ActiveUser.name);
// console.log("nav",isAuth)
  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };



  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
      if (window.scrollY >= 200) {
          setColorchange(true);
      }
      else {
          setColorchange(false);
      }
  };
  window.addEventListener('scroll', changeNavbarColor);

  return (
    <DIV>
    <nav className={colorChange ? 'navbar colorChange' : 'navbar'}>
      {/* <div className="navbar__logo">
            <img src={logo} alt="" width="200px" />

      </div> */}


<div className="mobileNav">
      <div
        className={`navbar__mobile-toggle ${isMobileMenuOpen ? 'active' : ''}`}
        onClick={handleMobileMenuToggle}>
         {isMobileMenuOpen ? <MdClose color="#adacac"/> : <MdMenu color="#adacac" />}
      </div>

      <Link to='/'>
      <div className="mobile-logo">
            <img src={colorChange ? blackLogo : logo} alt=""  />
          </div>
          </Link>

</div>
    

      <ul className={`navbar__menu ${isMobileMenuOpen ? 'active' : ''}`}>
        <CustomNavLink to="/product/Jewelry" onClick={closeMobileMenu}>
          Jwellery
        </CustomNavLink>
        <CustomNavLink to="/product/Watches" onClick={closeMobileMenu}>
          Watches
        </CustomNavLink>
        <CustomNavLink to="/gift" onClick={closeMobileMenu}>
          Gifts
        </CustomNavLink>

        <Link to='/'>
          <div className="navbar__logo">
            <img src={colorChange ? blackLogo : logo} alt=""  />
          </div>
        </Link>
        


      
        <CustomNavLink to="/about" onClick={closeMobileMenu}>
          About Us
        </CustomNavLink>

{isAuth?(
          <Box
            display="inline-block"
            position="relative"
            _hover={{
              '& button': { display: 'block' },
            }}
          >
            <Avatar name={name} size='xs' src='https://bit.ly/dan-abramov' />
            <Button display="none" position="absolute" top="100%" right="0" onClick={()=>{dispatch({type:LOGOUT})}}>
              Logout
            </Button>
          </Box>
        ) :<CustomNavLink to="/login" onClick={closeMobileMenu}>
          Account
        </CustomNavLink>}

       
        <CustomNavLink to="/cart" onClick={closeMobileMenu}>
          Bag
        </CustomNavLink>
      </ul>
    </nav>
    </DIV>
  );
};

export default Navbar;



const DIV = styled.section`
 .navbar__logo img,.mobile-logo img{
  width:120px
 }
 
.mobile-logo{
  width:60%;
}
 .navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  width: 100%;
  position: fixed;
  z-index: 9999;
}
.colorChange{
  background-color:#fff;
  color:#2e2d2d;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

.colorChange a {
    color: #2e2d2d!important;
}

.navbar__logo {
  font-weight: bold;
  font-size: 24px;
}

.navbar__mobile-toggle {
  width:40%;
  font-size: 24px;
  cursor: pointer;
  display: none; /* Hide by default */
}

.navbar__menu {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
  justify-content: space-around;
}

.navbar__item {
  margin-left: 20px;
}

.navbar__item a {
  text-decoration: none;
  color: #f3f2f2;
}


.navbar__item a.active {
  border: 1px solid #8b80806b;
  padding: 4px 7px 4px 7px;
}


@media (max-width: 768px) {
  .navbar {
    flex-direction: column;
    align-items: flex-start;
  }

  .navbar__menu {
    display: flex;
    flex-direction: column;
    background-color: #2a2929;
    padding: 10px;
    transition: transform 0.3s ease-in-out;
    /* transform: translateY(-50%); */
    opacity: 0;
    position: absolute;
    top: 70px;
    left: 0;
    width: 100%;
    z-index: 1;
    color:#fff;
  }

  .navbar__menu.active {
    transform: translateY(0);
    opacity: 1;
  }

  .navbar__mobile-toggle {
    display: block;
  }
}
@media screen and (min-device-width: 310px) and (max-device-width: 480px) { 
 .navbar__logo
 {
  display: none;
 }
 .navbar__item {
    margin-left: 20px;
    text-align: center;
    border-bottom: 1px solid #3c3a3a52;
    padding: 5px 0;
}

.mobileNav{
  width:100%;
  display: flex;
}
.colorChange a {
    color: #ddd9d9!important;
}
}
@media screen and (min-device-width: 481px) and (max-device-width:768px) { 
 .navbar__logo
 {
  display: none;
 }
 .navbar__item {
    margin-left: 20px;
    text-align: center;
    border-bottom: 1px solid #3c3a3a52;
    padding: 5px 0;
}
.mobileNav{
  width:100%;
  display: flex;
}
.colorChange a {
    color: #ddd9d9!important;
}
}
@media screen and (min-device-width: 769px)  { 
  .mobile-logo{
    display: none;
  }

}

`;