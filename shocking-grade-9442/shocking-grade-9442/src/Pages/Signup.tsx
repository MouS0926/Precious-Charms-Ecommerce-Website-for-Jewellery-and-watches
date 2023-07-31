import React, { useState,useEffect, Dispatch } from 'react';
import { styled } from 'styled-components';
import B1 from "../Images/B2.jpg";
import { Link, useNavigate } from "react-router-dom";
import { RootauthState, UserObject } from '../constrain';
import {useDispatch,useSelector} from "react-redux"
import { getUsers, SignUp } from '../Redux/AuthReducer/action';
import {  useToast } from '@chakra-ui/react';
import Navbar from '../Components/Navbar';

const Signup = () => {
  const toast = useToast();
 const [user,setUser] = useState<UserObject>({ name:"",
email: "",password: "",addToCart:[],
orderPlaced:[],address:[]

});
const navigate=useNavigate();
const dispatch: Dispatch<any> =useDispatch();
const AllUser =useSelector((store:any)=>store.authReducer.Users)
// console.log(AllUser)
useEffect(() => {

dispatch(getUsers())
// getUsers(dispatch)

},[])
  const handleChange =(e:React.ChangeEvent<HTMLInputElement>)=>{
const {name,value}=e.target;
const newUser = {...user,[name]:value};
setUser(newUser);
  }
  
const handleSubmit =()=>{
    // console.log("Submit",user)
    if(user.email === "" || user.password === "" ){
      // alert("Please enter valid data");
      toast({
        title: 'valid email',
        description: 'give valid data.',
        status: 'warning', 
        duration: 2000,  
        isClosable: true, 
      });


    }else if (Array.isArray(AllUser)) {

    
let userPrasent = AllUser.find((el:UserObject)=>{
  return el.email==user.email;
})
// console.log(userPrasent,"user")
     if(userPrasent){
      // alert("You already have a account with this email address")
      toast({
        title: 'already registered email',
        description: 'You already have a account with this email address.',
        status: 'error', 
        duration: 2000,  
        isClosable: true, 
      });
      setUser({ name:"",
    email: "",password: "",addToCart:[],
    orderPlaced:[],address:[]
    
    })
     }else{
      dispatch(SignUp(user))
      // alert("your registration is successful")
      setUser({ name:"",
    email: "",password: "",addToCart:[],
    orderPlaced:[],address:[]
    
    })
      toast({
        title: 'Signup Success',
        description: 'your registration is successful.',
        status: 'success', 
        duration: 2000,  
        isClosable: true, 
      });
      navigate("/login");
     }
    }
    
  }
  return (<>  
 
    <Div>
      <h1>PRECIOUS CHARMS</h1>
      <h2>JEWELRY SHOP</h2>
      <div>
        <h2>SIGNUP PAGE</h2>
       
        <input type="text" name="name" placeholder='Full Name' value={user.name}onChange={handleChange} />
        <br />
        <input type="email" name="email" value={user.email}placeholder='Email' onChange={handleChange} />
        <br />
        
        <input type="password" name="password" value={user.password}placeholder='Password' onChange={handleChange} />
        <br />
       
       
        <input type="submit" value="SIGNUP" onClick={handleSubmit}/>
        <br />
        <br />
        <span><Link to="/login">Login</Link></span>
      </div>
    </Div>
    </>
  );
}

export default Signup;


const Div = styled.div`
padding-top:70px;
text-align: center;
  background-image: url(${B1});
  background-size: cover;
  background-position: center;
  width: 100vw;
  height: 130vh;
  margin-top: 0;
  border: 1px solid black;
  color: black;

  h1{
   margin-top:20px;
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

  div {
   
    margin :auto;
    width: 500px;
    height: 400px;

    h2 {
      margin-left: 10px;
    }

    input[type="text"],[type="email"],[type="password"] {
      width: 80%;
      height: 40px;
      margin: auto;
      margin-bottom: 20px;
      box-shadow: rgb(246, 248, 250) 0px 20px 30px -10px;
    }

    input[type="text"],[type="email"],[type="password"]::placeholder {
      padding-left: 20px;
      color: #999999; /* Placeholder text color */
      font-style: italic; /* Placeholder text style */
    }

    input[type="submit"] {
      width: 80%;
      height: 40px;
      font-weight: bold;
      background-color: #f6f8f6;
      color: #090909;
      font-size: 16px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }

    input[type="submit"]:hover {
      border: 2px solid black;
    }

    span {
      margin: 20px;
      cursor: pointer;
      color: black;
      text-decoration: none;

      a {
        color: black;
        border: none;
      }
    }

    span:hover{
   background-color:white;
  }
  
  }
  :hover{
   box-shadow: rgba(255, 253, 253, 0.966) 0px 54px 55px, rgba(250, 249, 249, 0.966) 0px -12px 30px, rgba(251, 250, 250, 0.943) 0px 4px 6px, rgba(253, 252, 252, 0.916) 0px 12px 13px, rgba(249, 248, 248, 0.961) 0px -3px 5px;
   }
`;