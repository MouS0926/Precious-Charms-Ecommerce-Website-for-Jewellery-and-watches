import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import banner from '../home-image/bannerv1.jpg';
import best1 from '../home-image/best1.jpg';
import best2 from '../home-image/best2.jpg';
import best3 from '../home-image/best3.jpg';
import best4 from '../home-image/best4.jpg';
import gift from "../home-image/gift-wrap.jpeg"
import categoryimg from "../home-image/category.jpg"
import abtImg from "../home-image/home-about.png"
import meetImg from "../home-image/meet.jpeg"
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { NavLink } from 'react-router-dom';


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

const Homepage = () => {
 

  return (
 <DIV>
<Navbar/>
      <div className="banner">
        <img src={banner} alt="" />
      </div>

{/************************   new-collection-section-start  ********************* */}
<div className="collectSection">
      <div className="newHead">
        <p className="newHead-Capt">New Collection</p>
        <p className="newHead-desc">Check out the New Collection of famous Brand</p>
      </div>
      <div className="newCollection">
        <div>
          <img src={best1} alt="" />
          <h4>Messika</h4>
          <p>Diamond Collection</p>
        </div>
        <div>
          <img src={best2} alt="" />
          <h4>Messika</h4>
          <p>Diamond Collection</p>
        </div>
        <div>
          <img src={best3} alt="" />
          <h4>Messika</h4>
          <p>Diamond Collection</p>
        </div>
        <div>
          <img src={best4} alt="" />
          <h4>Messika</h4>
          <p>Diamond Collection</p>
        </div>
      </div>
</div>
  {/************************   new-collection-section-start-end  ********************* */}

{/************************   category-section-start  ********************* */}

<div className="categorySec">
      <div className="newHead">
          <p className="newHead-Capt">Categories</p>
          <p className="newHead-desc">Discover Our Collection of Jewelleryby Categories</p>
      </div>


<div className="catMainSec">
    <div className="catText">

          
    <div className="allcat">
      <ul>

        <li><CustomNavLink to="/product/Jewelry?category=Rings">Rings</CustomNavLink></li>
        <li><CustomNavLink to="/product/Jewelry?category=Brecelets">Brecelets</CustomNavLink></li>
        <li><CustomNavLink to="/product/Jewelry?category=Earrning">Earrings</CustomNavLink></li>
        <li><CustomNavLink to="/product/Jewelry?category=Necklaces+%26+Pendants">Necklaces & Pendants</CustomNavLink></li>

        <li><Link to="/product/Watches">Watches</Link></li>
        <li><Link to="/product/Jewelry?category=Men's jewelry">Men's Jewellery</Link></li>

      </ul>
      
      <p className="shoText" style={{color:"#262525"}}>A L L &nbsp;&nbsp; C A T E G O R I E S</p>
    </div>

    </div>
    <div className="catImg">
      <img src={categoryimg} alt="" />

    </div>

</div>


</div>
{/************************   category-section-end  ********************* */}






  {/************************   gift-section-start  ********************* */}
<div className="giftSec">
  <img src={gift} alt="" />

  <div className="gifttext">

<p className='giftCapt'>Gifts</p>
  <p className="giftdesc">
  Looking for the perfect Gift?
   Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias facere repellendus provident
    nesciunt fuga? 
   Sapiente nihil animi officia debitis non?Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, excepturi blanditiis qui natus 
   dolores similique voluptates! Quos adipisci porro sit!
    </p> 

    <p className="shoText" style={{color:"#dfdfdf"}}>S H O P &nbsp;&nbsp;  G I F T S</p>
    

  </div>

</div>

  {/************************  gift-section-end  ********************* */}





{/************************  about-section-start  ********************* */}

<div className="about">

   

      <div className="abtMSec">

           <div className="abtText">


           <div className="abthead">
          <p className="newHead-Capt">About</p>
          <p className="newHead-desc">Precious Charms is more than just Gilding</p>
      </div>

          <p className='abtp'><br/>
    <p>Our company is an exclusive supplier of jewelry from the world's best brands. We take pride in offering our customers only the highest quality products created from precious metals and stones by the most experienced master jewelers</p>
    {/* <br/> */}
    <p>We are constantly expanding our range to meet the needs of our customers and offer them the latest and most fashionable trends in jewelry. We are confident that our collection of jewelry will allow everyone to express their individual style and create a unique image</p>
    {/* <br/> */}
    </p>

            <p className='abtp'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quasi animi 
            ipsum optio nostrum ab commodi pariatur minima laborum dignissimos 
            impedit reiciendis veniam quo, sit vero sapiente sunt molestiae eos.</p>
          </div>
          <div className="abtImg">
            <img src={abtImg} alt="" />
          </div>

      </div>
 

</div>


{/************************  about-section-end  ********************* */}






{/********************* * arrange-meeting-section ***************/}

<div className="arrange">

    <div className="arrangeSec">
      <div className="arrimg">

        <img src={meetImg} alt="" />
      </div>
      <div className="arrText">
      <div className="abthead">
          <p className="newHead-Capt">Arrange a Meeting</p>
          <p className="newHead-Capt">with Personal Consultant</p>

          <p className="newHead-desc">Find a Boutique Near Your or Visit Our Flagship store</p>
          <br /><br /><br />
          <p className="shoText" style={{color:"#2d2c2c"}}>L E A R N &nbsp;&nbsp;  M O R E</p>
      </div>

      </div>
    </div>

</div>
{/********************* * arrange-meeting-section-end ***************/}

<Footer/>

    </DIV>
  );
};

export default Homepage;

const DIV = styled.section`
  @import url('https://fonts.googleapis.com/css2?family=Pathway+Gothic+One&display=swap');
background-color:#f8f8f8;
  .banner img {
    width: 100%;
  }
.collectSection{
  padding: 100px 0;
}
 

  .newCollection{
    width: 90%;
    margin: 0 auto;
 display:grid ;
 grid-template-columns: repeat(4,1fr);
 gap: 20px;
}

 

  .newCollection div img {
    width: 100%;
  }

  .newHead {
    width: 90%;
    margin: 0 auto;
    padding: 10px 0px 25px 10px;
  }

  .newHead-Capt {
    font-family: 'Pathway Gothic One', sans-serif;
    font-size: 34px;
    font-weight: 600;
    color: #0a0a0a;
    margin: 0;
  }

  .newHead-desc {
    font-family: Arial,sans-serif;
    margin: 6px 0;
    color: #6a6a6a;
  }
  .newCollection div h4{
    color:#1a1919;
    margin:15px 0 0 0;
    font-weight: 500;
  }
  .newCollection div p{
    font-size: 14px;
    color: #565555;
    margin: 0;
  }
  .giftSec{
    position:relative;
    text-align: center;
  color: white;
  }

  .giftSec img{
    width: 100%;
    height: 500px;
    object-fit: cover;
  }
  .gifttext{
    position: absolute;
   width: 40%;
  bottom: 39%;
  right: 16px;
  font-family: 'Pathway Gothic One', sans-serif;
  text-align: left;
  }
  .giftCapt{
    font-family: 'Pathway Gothic One', sans-serif;
    font-size: 34px;
    font-weight: 600;
  }
.giftdesc{
  font-family: Arial,sans-serif;
    color: #c1c1c1;
  
    line-height: 22px;

}

 .categorySec{
 padding: 50px 0;
  background-color:#fff;
 }
 .catMainSec{
  width: 90%;
  margin: 0 auto;
  display: flex;
 }

 .catText{
  width: 50%;
 }

 .catImg {
  width: 50%;
}
.catImg img{
 
  width: 100%;
    height: 500px;
    object-fit: cover;
}

.allcat ul{
  list-style-type: none;
}

.allcat ul li{
  list-style-type: none;
    padding: 15px 5px;
    font-size: 19px;
}
.allcat ul li a{
  text-decoration: none;
    color: #4e4e4e;
    font-weight: 500;
}
   

/************** * about ***********************/
.about{
  padding: 50px;
  background-color:#fff;
}
.abtMSec{
  width:90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
.abtText{
text-align: justify;
padding-top: 60px;
width:50%;
}
.abtp{
font-size: 18px;
color:#282828;
}
.abtImg{
  width:50%
}
/********************* meeting  **********/
.arrange{
  background-color:#fff;
  padding: 30px;
}

.arrangeSec{
  background-color:#fff;
  display: flex;
  width: 90%;
  margin: 0 auto;
  justify-content: space-around;
}
.arrimg{
  width:50%;
}

.arrimg img{
  width:100%;
}

@media screen and (min-device-width: 310px) and (max-device-width: 480px) { 
 .catMainSec,.abtMSec,.arrangeSec {
   
    display: flex;
    flex-direction: column;
   
}

.newCollection{
 display:grid ;
 grid-template-columns: repeat(2,1fr);
 gap: 20px;
}
.abtImg img{
  width:100%;
}
 .giftdesc
 {
  display: none;
 }
 .newCollection div {
    width: 100%;
}
 .collectSection {
    padding: 70px 0;
}

 .newHead-Capt {
    font-family: 'Pathway Gothic One',sans-serif;
    font-size: 23px;
    font-weight: 600;
    color: #0a0a0a;
    margin: 0;
}

 .abtText {
    padding-top: 30px;
    width: 100%;
}
 .abtp {
    font-size: 14px;
    }
  .abtImg {
    width: 100%;
}
.arrimg {
    width: 100%;
}
.catImg {
    width: 100%;
}

}


`
