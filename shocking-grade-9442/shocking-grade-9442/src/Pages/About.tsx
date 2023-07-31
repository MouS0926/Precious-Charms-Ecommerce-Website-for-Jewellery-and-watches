import React from 'react'
import { styled } from 'styled-components'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

export default function About() {
  return (

    <div>
<Navbar/>
   
    <DIV>
    
    <div  className="background-image" style={{ backgroundImage: `url("https://cutewallpaper.org/21/jewelry-wallpaper/3106872-black-and-white-close-up-design-diamond-.jpg")`,
    backgroundRepeat:"no-repeat",
    backgroundSize:"cover",
    height:"800px",
     border:"1px solid black",
 }}>
    <div className='write'>
    <h1>About</h1>
    <p>PRECIOUS CHARMS is More Than Just Jwellary</p>
  
    <br/>
    <p>Our company is an exclusive supplier of jewelry from the world's best brands. We take pride in offering our customers only the highest quality products created from precious metals and stones by the most experienced master jewelers</p>
    <br/>
    <p>We are constantly expanding our range to meet the needs of our customers and offer them the latest and most fashionable trends in jewelry. We are confident that our collection of jewelry will allow everyone to express their individual style and create a unique image</p>
    <br/>
    <br/>
    <p className='ex'>OURS  STORES</p>
    </div>
    <div className='con'>
        <div className='first'>
        <img src='https://media.istockphoto.com/id/664789596/photo/engaging-presentations.jpg?s=612x612&w=0&k=20&c=d4l-pOr8RabwWAhHan0rJoRuDAB4S5RSo55_xyZ3QHc='/>
   
    </div>
    
    <div className='sec'>
        <h1 className='a'>Arrange a Meeting</h1>
        <h1 className='don'>With Personal Consultant</h1>
        
    <p className='next'>Find a Butique Near You Or Visit Our Flagship Store </p>
    <br/>
    <br/>
    <br/>
    <p className='ebx'><ul>LEARN MORE</ul></p>
    </div>
    </div>
    </div>
    
    </DIV>

    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
<Footer/>
    </div>
  )
}
const DIV=styled.div`
  


.write{
    
    margin-left: 300px;
    margin-top: 200px;
    width: 500px;
}
h1{
    color: white;
    font-size: 35px;
    font-weight: bold;
}
p{
    color: white;
}

.ex{
    letter-spacing: 15px;
}
img{
    margin-top: 50px;
    margin-left: 50px;
    width: 600px;
}
.next{
    color: black;
}

.con{
    margin-left: 150px;
    
    display:flex
}
.first{
   
    
}
.sec{
   
 
    margin-left: 100px;
    padding-top: 120px;
    
}
.don{
    color: white;
    font-size: 30px;
    font-weight: bold;
}
.ebx{
    letter-spacing: 15px;
    color: black;

}
.a{
    color: white;
    font-size: 30px;
    font-weight: bold;
}
`
