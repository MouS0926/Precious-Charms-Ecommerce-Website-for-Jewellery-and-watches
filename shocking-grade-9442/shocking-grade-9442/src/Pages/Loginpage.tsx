import React, { useState,useEffect} from 'react'
import { styled } from 'styled-components'
import B1 from "../Images/B2.jpg"

import {Link, useLocation, useNavigate} from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { RootauthState } from '../constrain'
import {  getUsers } from '../Redux/AuthReducer/action'
import { Dispatch } from 'redux'
import { ADMIN_SUCCESS, LOGIN_SUCCESS } from '../Redux/AuthReducer/actionType'
import { useToast } from '@chakra-ui/react'
import Navbar from '../Components/Navbar'

const Loginpage = () => {
   const toast = useToast();
   const [credentials,setCredentials] = useState({email:"",password:""});
   const dispatch: Dispatch<any> =useDispatch();
   const AllUser =useSelector((store:any)=>store.authReducer.Users);
   const navigate = useNavigate()
   const location = useLocation();
  console.log(AllUser,"log");
   useEffect(() => {
   
   dispatch(getUsers())
   // getUsers(dispatch)
   
   },[])
   // const store =useSelector((store)=>store)
   // console.log(store)
  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
const {name,value} =e.target;
let newCredentials ={...credentials,[name]:value}
setCredentials(newCredentials);
  };

   const handleSubmit = ()=>{
// console.log("credential",credentials)

if(credentials.email==="admin123@gmail.com"|| credentials.password==="admin123"){
   dispatch({type:ADMIN_SUCCESS})
   navigate("/a/dashboard");
   
   setCredentials({email:"",password:""})
   toast({
      title: 'welcome Admin to admin panel',
      description: 'Admin Login successful.',
      status: 'success', 
      duration: 2000,  
      isClosable: true, 
    });


}else if(credentials.email===""|| credentials.password===""){
   // alert("Please enter valid data");
   toast({
      title: 'valid credentials',
      description: 'Please enter valid data.',
      status: 'warning', 
      duration: 2000,  
      isClosable: true, 
    });
 }
else {
   if (AllUser) {
   let isprasent = AllUser.find((el:any)=>{return el.email===credentials
   .email && el.password===credentials.password});
   console.log(isprasent,"prasent")
   if(isprasent){
   //   dispatch(Login({...isprasent}))
dispatch({type:LOGIN_SUCCESS,payload:{...isprasent}});
// alert("Login successfull")
toast({
   title: 'Login Success',
   description: ' successfully loged In.',
   status: 'success', 
   duration: 2000,  
   isClosable: true, 
 });
 
 if(location.state == null){
   navigate("/")
 }else{
   navigate(location.state,{replace:true});
 }
setCredentials({email:"",password:""})
   }
   else{
      toast({
         title: 'Wrong credentials',
         description: 'wrong email address or Password.',
         status: 'error', 
         duration: 2000,  
         isClosable: true, 
       });
       setCredentials({email:"",password:""})
      // alert("Please enter valid credentials for login")
   }
}
   
}


   }
  return (<> 
   
    <Div>
     <div className='form'>
      <h1>PRECIOUS CHARMS</h1>
      <h2>JWELLARY SHOP</h2>

      <h2>LOGIN PAGE</h2>
      <input type="email" name="email" placeholder='email'
      onChange={handleChange} 
      />
      <br />
      <input type="password" name="password" placeholder='Password'  onChange={handleChange} />
      <br />
      <input type="submit" value="LOGIN" onClick={handleSubmit}/>
      <br />
      <br />
      <span><Link to="/signup"><b>Create An Account</b> </Link> </span>
      </div> 

    </Div>
    </>
  )
}

export default Loginpage




const Div = styled.div`
padding-top:80px;
 background-image: url(${B1});
  background-size: cover;
  background-position: center;
  width: 100vw;
  height: 100vh;
  margin-top:0; 
  border:1px solid black;
  color: black;
  text-align: center;

.form{
   width:40%;
   margin:0 auto;
   padding: 10px;
    background-color: #ffffff8c;
    border: 1px solid #d3d3d3;
}
input{
   border: 1px solid #a1a1a1;
}

  h1{
  
   margin-bottom:20px;
   font-size:30px;
   font-weight:bold;
  }
  h2{
   margin-top:20px;
   margin-bottom:20px;
   font-size:20px;
   font-weight:bold;
  }
 
   h2 {
      margin-left:10px;
   }
   input[type="email"],[type="password"]{
   width:80%;
   height :40px;
  
margin:auto;
margin-bottom:20px;
   box-shadow: rgb(246, 248, 250) 0px 20px 30px -10px;
  }
  input[type="email"],[type="password"]::placeholder {
   padding-left:20px;
  color: #2d2c2c; /* Placeholder text color */
  font-style: italic; /* Placeholder text style */
}
   /* border:1px solid white; */

  input[type="submit"]{
   width: 80%;
  height: 40px;
  font-weight: bold;
  background-color: #333533;
  color: #dcd7d7;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  
  }
  input[type="submit"]:hover{
   border:2px solid black;
  }
  span {
   margin:20px;
   cursor: pointer;
   color:black;
   text-decoration: none;
   Link{
      color:black;
      border:none;
   }
  }
  span:hover{
   background-color:white;
  }
  /* :hover{
   box-shadow: rgba(255, 253, 253, 0.966) 0px 54px 55px, rgba(250, 249, 249, 0.966) 0px -12px 30px, rgba(251, 250, 250, 0.943) 0px 4px 6px, rgba(253, 252, 252, 0.916) 0px 12px 13px, rgba(249, 248, 248, 0.961) 0px -3px 5px;
   } */



   @media screen and (min-device-width: 320px) and (max-device-width: 767px) { 
    /* STYLES HERE */
    .form{
      width:100%;
    }
}

 `