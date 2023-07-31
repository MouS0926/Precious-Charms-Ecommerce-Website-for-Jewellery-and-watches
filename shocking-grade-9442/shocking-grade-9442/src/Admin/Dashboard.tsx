import { styled } from "styled-components"

import img1 from "../AdminImges/img1.png"
import img10 from "../AdminImges/img10.png"
import img11 from "../AdminImges/img11.png"
import img2 from "../AdminImges/img2.png"
import img3 from "../AdminImges/img3.png"
import img4 from "../AdminImges/img4.png"
import img5 from "../AdminImges/img5.png"
import img6 from "../AdminImges/img6.png"
import img7 from "../AdminImges/img7.png"
import img8 from "../AdminImges/img8.png"
import img9 from "../AdminImges/img9.png"
import Navbar from "./AdminNavbar"
const Dashboard = () => {
  return (

    // /Dashboard Componet 
    <div>

    
<div>


<Navbar/>
</div>

    <DIV style={{backgroundColor:"rgb(157, 159, 159)"}}>
      <div>
        <div className='dashboard' style={{ paddingLeft: "20px", width: "100%" }}>
          <img src={img1} alt="error" />
          <img src={img2} alt="error" />
          <img src={img3} alt="error" />
          <img style={{ width: "350px" }} src={img4} alt="error" />
        </div>
        <div className='dashboard1' style={{ paddingLeft: "10px", width: "100%" }}>
          <img src={img5} alt="error" />
          <img src={img6} alt="error" />
          <img src={img7} alt="error" />
        </div>
        <div className='dashboard2' style={{ paddingLeft: "20px", width: "100%",paddingTop:"100px" }}>
          <img src={img8} alt="error" />
        </div>
        <div className='dashboard3' style={{ paddingLeft: "90px", width: "100%", }}> 
          <img src={img9} alt="error" />
          <img src={img10} alt="error" />
          <img src={img11} alt="error" />
        </div>
      </div>
    </DIV>
    </div>
  )
}

export default Dashboard

const DIV = styled.div`



 .dashboard{
  display: flex;
  gap: 10px;
  padding-top:100px
  
 }
 .dashboard{
  display: flex;
  gap: 10px;
  padding-top:100px
  
 }
 .dashboard img{
  width:280px;
  height:200px;
  
 }
.dashboard1{
  display: flex;
  gap: 20px;
  padding-top:100px;
 
 
}
.dashboard1 img{
  width:400px;
  height: 350px;
  border-radius:5px
}
.dashboard3{
  display: flex;
  gap: 20px;
  padding-top:100px;
}
.dashboard2 img{
  width:98%;
}
`