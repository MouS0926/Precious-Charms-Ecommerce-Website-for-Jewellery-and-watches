import React, { useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { MdMenu, MdClose } from 'react-icons/md';
// import logo from "../image/logo-white.png"
import styled from "styled-components"
import { Link } from 'react-router-dom';
import { Avatar } from '@chakra-ui/avatar';
import { Button } from '@chakra-ui/button';
import { LOGOUT } from '../Redux/AuthReducer/actionType';
import { Box } from '@chakra-ui/layout';
import { useDispatch } from 'react-redux';
import logo from "../home-image/logo-white.png"

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
  const navigate =useNavigate();
  const dispatch:any =useDispatch()
  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };
const handleClick = () => {
  dispatch({type:LOGOUT})
  navigate("/")
};
  return (
    <DIV>
    <nav className="navbar">
      {/* <div className="navbar__logo">
            <img src={logo} alt="" width="200px" />

      </div> */}

      <div
        className={`navbar__mobile-toggle ${isMobileMenuOpen ? 'active' : ''}`}
        onClick={handleMobileMenuToggle}
      >
        {isMobileMenuOpen ? <MdClose /> : <MdMenu />}
      </div>

      <ul className={`navbar__menu ${isMobileMenuOpen ? 'active' : ''}`}>
      {/* <CustomNavLink to="/a/dashboard" onClick={closeMobileMenu}> */}
     <div className='navbar__logo'>
     <img src={logo} alt=""  />
     </div>
         
            {/* </CustomNavLink>    */}
        <CustomNavLink to="/a/dashboard" onClick={closeMobileMenu}>
          DASHBOARD
        </CustomNavLink>
        <CustomNavLink to="/a/add-product" onClick={closeMobileMenu}>
           ADD PRODUCT
        </CustomNavLink>
        <CustomNavLink to="/a/AllProduct" onClick={closeMobileMenu}>
          ALL PRODUCTS
        </CustomNavLink>


    
        <CustomNavLink to="/a/users" onClick={closeMobileMenu}>
          USER DETAILS
        </CustomNavLink>
        {/* <CustomNavLink to="/" onClick={closeMobileMenu}> */}
        
          <Box
            display="inline-block"
            position="relative"
            _hover={{
              '& button': { display: 'block' },
            }}
          >
            <Avatar name="A" size='xs' src='https://bit.ly/dan-abramov' />
           
            <Button display="none" position="absolute" top="100%" right="0" 
         onClick={handleClick}
          >
          Logout  
            </Button>
            
          </Box>
     
        {/* </CustomNavLink> */}
      </ul>
    </nav>
    </DIV>
  );
};

export default Navbar;



const DIV = styled.section`

*{
  box-sizing: border-box;
}

 .navbar__logo img{
  width:100px
 }
 

 .navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  width: 100%;
  /* position: fixed; */
  background-color:rgb(54, 69, 79)

}



.navbar__mobile-toggle {
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
    background-color: #f1f1f1;
    padding: 10px;
    transition: transform 0.3s ease-in-out;
    transform: translateY(-50%);
    opacity: 0;
    position: absolute;
    top: 80%;
    left: 0;
    width: 100%;
    z-index: 1;
  }

  .navbar__menu.active {
    transform: translateY(0);
    opacity: 1;
  }

  .navbar__mobile-toggle {
    display: block;
  }
}


 
`;