import React, { useEffect } from 'react'
import { fetchUserData } from '../Redux/AdminReducer/action'
import { useDispatch, useSelector } from 'react-redux'
import UserCard from './UserCard'
import { ProductObject, UserObject, UserObjectNew } from '../constrain'
import styled from "styled-components"
import Navbar from './AdminNavbar'

// interface UserObjectNew {
//   name:string;
//   email:string;
  
//   password:string;
//   id?:number;
//   addToCart:ProductObject[];
//   orderPlaced:ProductObject[];
//   }

const UserDetails = () => {

const dispatch=useDispatch()
const users = useSelector((state: any) => state.data.user);

console.log(users);




  useEffect(()=>{
    dispatch(fetchUserData)

  },[])


  return (
<div>


<Navbar/>


    <DIV>
     
     <div className="useSection">
     {
      users && users.map((el:UserObjectNew)=>(
        <UserCard key={el.id} {...el}/>
      ))
     }



     </div>
   


    </DIV>

    </div>
  )
}

export default UserDetails

const DIV = styled.section`
width: 90%;
margin: 0 auto;
padding: 40px 0;


.useSection{
  display: grid;
  grid-template-columns: repeat(4,1fr);
  gap: 10px;
}


`