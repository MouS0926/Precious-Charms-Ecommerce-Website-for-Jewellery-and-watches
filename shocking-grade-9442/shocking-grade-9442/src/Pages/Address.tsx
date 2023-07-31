import axios from "axios";
import { initial } from "lodash";
import React, { useEffect } from "react";
import  { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { styled } from 'styled-components';

import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useToast } from "@chakra-ui/toast";
import { response } from "express";
import { LOGIN_SUCCESS } from "../Redux/AuthReducer/actionType";



const initalState = {
  name: "",
  mobile_number: "",
  pincod: "",
  house_no: "",
  area: "",
  town: "",
};


export const  Address =()=>{
  const [areaData, setareaData] = useState(initalState);

  console.log("Address")
  const userId =useSelector((store:any)=>store.authReducer.ActiveUser.id);
  const ActiveUser=useSelector((store:any)=>store.authReducer.ActiveUser);
  const navigate=useNavigate();
  const toast = useToast();
const dispatch=useDispatch()

const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
  const {value,name}=e.target;
  setareaData((prev)=>{
      return {...prev,[name]:value}
  })

}

const handleSubmit=(e:React.MouseEvent<HTMLButtonElement> )=>{
  e.preventDefault();
  if (!userId) {
    console.log("Please login first");
    return;
  }

  try {
    const updatedUser = {
      ...ActiveUser,
      address: [...ActiveUser.address, areaData],
    };
   axios.put(`https://monkeyapi-2-0.onrender.com/users/${userId}`, updatedUser)
   .then((res)=>dispatch({type:LOGIN_SUCCESS,payload:res.data})
   )
   

  //  console.log(response)
    // setLoggedInUser(updatedUser);
   
    navigate("/payment")
    toast({
      title: 'Address Success',
      description: 'your address is added successful.',
      status: 'success', 
      duration: 2000,  
      isClosable: true, 
    });
  } catch (error) {
    console.error("Failed to add address to address", error);
  }
  // dispatch(postProduct(productData)) 
  setareaData(initalState)
}
// console.log(areaData,"Area")
console.log(ActiveUser,"userId")


useEffect(()=>{
 const ad=ActiveUser.address
  // console.log(ad[ad.length-1])
  if(ActiveUser.address.length!==0){
    setareaData(ad[ad.length-1])
  }
 
  

},[])
console.log(areaData,"areaData")
    return (

<div>
<Navbar/>


        <DIV>
     
        <div  className="background-image" style={{ backgroundImage: `url("https://thegoldmarket.co.uk/wp-content/uploads/2017/01/jewellery-background.jpg")`,
                 backgroundRepeat:"no-repeat",
                 backgroundSize:"cover",
                 height:"800px",
                  border:"1px solid black",
              }}>
           <div className="address-form">
             <h2>Shipping Address</h2>
             <form>
            
             
               <div className="form-group">
                 <label htmlFor="name" >Full Name</label>
                 <input type="text" id="name" required  name="name" value={areaData.name} onChange={handleChange}/>
               </div>
               <div className="form-group">
                 <label htmlFor="address">Mobile number</label>
                 <input type="text" id="address" required name="mobile_number"  value={areaData.mobile_number} onChange={handleChange}/>
               </div>
               <div className="form-group">
                 <label htmlFor="city">Pincode</label>
                 <input type="text" id="city" required name="pincod"  value={areaData.pincod} onChange={handleChange} />
               </div>
               <div className="form-group">
                 <label htmlFor="zip">Flat, House no., Building, Company, Apartment</label>
                 <input type="text" id="zip" required  name="house_no" value={areaData.house_no} onChange={handleChange}/>
               </div>
               <div className="form-group">
                 <label htmlFor="country">Area, Street, Sector, Village</label>
                 <input type="text" id="country" required name="area"  value={areaData.area} onChange={handleChange}/>
               </div>
               <div className="form-group">
                 <label htmlFor="country">Town/City</label>
                 <input type="text" id="country" required name="town"  value={areaData.town} onChange={handleChange}/>
               </div>
              <Link to={"/payment"}> <button type="submit" onClick={handleSubmit}>Proceed to Payment</button></Link> 
              
             </form>
           </div>
         </div>
         </DIV>
<Footer/>
         </div>
    )
}

const DIV=styled.div`

  
  

  .background-image {
  height: 1000px;
  margin-bottom: 1px;
  }


.address-form {
  padding: 20px;
  padding-right: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  width: 500px;
 
  margin: auto;
  margin-top: 100px;
}

h2 {
  text-align: center;
  margin-bottom: 20px;
  font-size: 20px;
  font-weight:bold
}

.form-group {
  margin-bottom: 15px;
  width: 470px;
}

label {
  display: block;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 5px;
}

input[type="text"] {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  display: block;
  width: 100%;
  padding: 12px;
  background-color: #000;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

button:hover {
  background-color: #444;
}



`
