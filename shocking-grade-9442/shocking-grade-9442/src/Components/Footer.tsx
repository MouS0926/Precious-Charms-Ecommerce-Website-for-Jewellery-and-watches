import React from 'react'
import styled from 'styled-components';
import logo from "../home-image/logo-white.png"
import { FaFacebookF ,FaInstagram,FaPinterest,FaTelegramPlane} from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <DIV>
      
<div className="footerSec">
      <div className="logosec">

        <img src={logo} alt="" />
        <br /><br /><br />  <br /><br />
      <div className='socialUl'>
            <FaFacebookF/>
          <FaInstagram/>
          <FaPinterest/>
          <FaTelegramPlane/> 
      </div>
        
      </div>



      <div className="link">
          <div className="first">
                <ul>
                <Link to="/about">About Us</Link>
                  <li>Service</li>
                  <li>Return</li>
                  <li>Terms of Use</li>
                  <li>How to Order</li>
                </ul>
          </div>
            <div className="second">
            <ul>
                 <Link to="/product/Jewelry?category=Rings"><li>Rings</li></Link> 
                 <Link to="/product/Jewelry?category=Brecelets"><li>Bracelets</li></Link> 
                 <Link to={"/product/Jewelry?category=Earrning"}><li>Earrings</li></Link> 
                 <Link to="/product/Jewelry?category=Necklaces+%26+Pendants"><li>Necklace & Pendants</li></Link> 
                 <Link to="/product/Watches"><li>Watches</li></Link> 
           </ul>


            </div>
      </div>




      <div className="last">

        <h1>Discover The latest Collection , news and exclusive launches</h1>
        <br /><br /><br /><br /><br />
        <p>@ 2023 by Precious Charms</p>
      </div>

</div>


    </DIV>
  )
}

export default Footer

const DIV = styled.section`
background-color:#242424;
padding: 30px 0;
  .footerSec{
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
  }

  .logosec,.link,.last{
    width:33%
  }
.logosec img{
  width:200px
}
.socialUl {
    color: #e1e1e1;
    list-style: none;
    font-size: 21px;
    display: flex;
    justify-content: space-between;
    width: 57%;
}

.socialUl li{
  display: inline;
    padding: 10px 17px;
}


.link{
  display: flex;
  justify-content: space-between;
}
.first,.second{
width:50%
}

.link ul{
  list-style-type: none;
    color: #c1c1c1;
    font-size: 18px;
}

.link ul li{
padding: 12px 0;
}
.last h1,.last p{
  color:#c1c1c1;
}
@media screen and (min-device-width: 310px) and (max-device-width: 480px) { 
  .footerSec{
    flex-direction: column;
  }
  .logosec,.link,.last{
    width:90%
  }
}
`

