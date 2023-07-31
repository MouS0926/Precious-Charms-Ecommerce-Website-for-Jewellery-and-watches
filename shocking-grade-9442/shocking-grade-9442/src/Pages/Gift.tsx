import React from 'react'
import { styled } from 'styled-components'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

export default function Gift() {
  return (

    <div>
<Navbar/>
   
    <DIV>
    
    <div  className="background-image" style={{ backgroundImage: `url("https://cdn.pixabay.com/photo/2016/02/16/19/54/jewellery-1203951_1280.jpg")`,
    backgroundRepeat:"no-repeat",
    backgroundSize:"cover",
    height:"800px",
     border:"1px solid black",
 }}>
    <div className='write'>
    <h1>Gift</h1>
    <p>Your Girlfriend With Name and</p>
  
    
    <p className='ex'>Unforgettable</p>
    <p className='ex'> Love</p>
    </div>
    
    </div>
    <div  className="con" >
        <div  className="ten">
            <img src='https://i.etsystatic.com/16445009/r/il/c5eee5/3862521275/il_1080xN.3862521275_b96y.jpg'/>
        </div>
        <div className="ten">
        <img src='https://m.media-amazon.com/images/I/61HRjJo-C+L._AC_UY1000_.jpg'/>
        </div>
        <div className="ten">
        <img src='https://i.etsystatic.com/9079236/r/il/d002d3/4179886483/il_570xN.4179886483_1yif.jpg'/>
        </div>
        <div className="ten">
        <img src='https://cdn1.bigcommerce.com/n-ou1isn/rhvn12h/products/712/images/2988/CMN906RG_1__89349.1403038592.1280.1280.jpg?c=2'/>
        </div>
        <div className="ten">
        <img src='https://i.etsystatic.com/19864879/r/il/7243b7/3847439292/il_fullxfull.3847439292_5kmt.jpg'/>
        </div>

    </div>
    
    
    </DIV>

 
<Footer/>
    </div>
  )
}
const DIV=styled.div`
  .ten{
    width: 300px;
    height: 300px;
    margin-left: 1px;
   
  }


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
    width: 100%;
}
.next{
    color: black;
}

.con{
   margin-top: 1px;
   
    
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
