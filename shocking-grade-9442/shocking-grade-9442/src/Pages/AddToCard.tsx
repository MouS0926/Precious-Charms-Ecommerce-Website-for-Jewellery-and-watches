// import { Img } from '@chakra-ui/react';
import React,{useEffect,useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { styled } from 'styled-components';
import { ProductObject } from '../constrain';
import B4 from "../Images/B4.jpg"
import { Box, Image, Text, Heading, Flex, IconButton, useToast, HStack, VStack, Spacer, Grid } from '@chakra-ui/react';
import { FaTrash } from 'react-icons/fa';
import Navbar from '../Components/Navbar';
import { DELETE_ITEM, LOGIN_SUCCESS } from '../Redux/AuthReducer/actionType';
import { ActionToDelete, getUsers } from '../Redux/AuthReducer/action';
import axios from 'axios';
import { Navigate } from 'react-router';
import { Link } from 'react-router-dom';

import Footer from '../Components/Footer';

import Navbar2 from '../Components/Navbar2';

const AddToCard = () => {
  const toast = useToast();
  const dispatch:any = useDispatch();
  const ActiveUser=useSelector((store:any)=>store.authReducer.ActiveUser);
  const userId =useSelector((store:any)=>store.authReducer.ActiveUser.id);
  const cartItem =useSelector((store:any)=>store.authReducer.ActiveUser.addToCart);
  const [total,setTotal]=useState<number>(0);
  const [tax,setTax]=useState<number>(0);
  const AllUser =useSelector((store:any)=>store.authReducer.Users)
  //  console.log(cartItem)
  useEffect(() => {
  
  dispatch(getUsers())
  // getUsers(dispatch)
  
  },[])
  // console.log(userId);
  useEffect(()=>{
    let sum=0;
for(let i=0;i<cartItem.length;i++){
sum+=cartItem[i].price;
}
setTotal(sum);
let taxcut=sum/10;
setTax (taxcut)
  },[cartItem])
  
  const handleDelete = (id:number) => {
  //  console.log(userId,id)
    // dispatch(ActionToDelete(product));
    axios
      .put(`https://monkeyapi-2-0.onrender.com/users/${userId}`, {...ActiveUser,
        addToCart: cartItem.filter((item:ProductObject) => item.id !== id)
      })
      .then((response) => {
        dispatch({type:LOGIN_SUCCESS,payload:response.data});
        // console.log('Data updated successfully:', response.data);
        // setData(response.data.addToCart);
      })
      .catch((error) => {
        console.error('Error updating data:', error);
      });
    toast({
      title: ` product removed from bag.`,
      status: 'success',
      duration: 2000,
      isClosable: true,
    });
  };

  // console.log(cartItem)
  return (<>
   <div>
   <Navbar2/>
   </div>
  
    <Div>
     <div className='List'>
<div className="free">
<h1>GET FREE SHIPPING ON EVERY ORDER, EVERY TIME</h1>
<p>Non member get free shipping on the purchse above the ₹.99999</p>
</div>
<div className='cart'>
  <h1>YOUR CART({cartItem.length})</h1>
</div>
<div>
{cartItem==undefined ||cartItem.length==0?<div className='emptycart'>YOUR BAG IS EMPTY</div>: cartItem?.map((el:ProductObject)=>{
  return <Box borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="md" p={4}>
  <div style={{display:"flex",flexDirection:"row", justifyContent:"space-between"}} >
    <Box width="200px" p="10px" >
   <Image src={el.avatar} alt={el.name}  boxSize="200px" objectFit="cover" mr={4} />
    </Box>
   
<Box mt={4} width="200px" p="10px" >
 <Heading as="h1" mt="10px" size="lg">{el.about}</Heading>
 <Text fontSize="md" mt="10px">{el.name}</Text>
 <Text fontSize="md" mt="10px">{el.brand}</Text>
 <Text fontSize="md" mt="10px">₹{el.price}</Text>
 <Text fontSize="md" mt="10px">{el.rating}★</Text>
</Box>
    </div>
  <IconButton
    icon={<FaTrash />}
    colorScheme="red"
    aria-label="Delete"
    onClick={()=>handleDelete(el.id)}
    mt={4}
  />
</Box>
  
 })}
</div>

     </div>
     <div className='checkout'>
      <div>
      <h1>SUMMARY</h1>
      </div>
      <div>
      <h1>DO YOU HAVE A PROMO CODE</h1>
      </div>
     <div id = "IK">
      <div >SUBTOTAL</div><div>₹{total}</div>
     </div>
     <div id = "IK">
      <div>ESTIMATED SHIPPING CHARGES</div><div>₹ 0.00</div>
     </div>
     <div id = "IK">
      <div>TAX</div><div>₹ {tax}</div>
     </div>
     <div id="IK">
      <div>TOTAL</div><div>₹ {total + tax}</div>
     </div>
     <div>
      <Link to={"/address"}>
      <button>
        CHECKOUT
      </button>
      </Link>
     </div>
     </div>
    </Div>
    <div>
    <Footer/>
    </div>
    </>
  )
}

export default AddToCard


const Div = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding-top :70px;
  .emptycart{
    border-radius:10px;
    background-image: url(${B4});
    height:600px;
    font-size:25px;
    text-align:center;
    
  }
  #IK {
    /* border:1px solid; */
    display:flex;
    flex-direction:row;
    justify-content:space-between;
  }
  .List {
    width:80%;
  }
.checkout{
  padding:25px;
  border-radius:10px;
  background-image: url(${B4});

}
.free{
  width:100%;
background-color:#e5dfdf;
border-radius:10px;
padding:20px;
}
.cart{
  width:100%;
background-color:#e5dfdf;
border-radius:10px;
padding:20px;
}
  h1 {
    font-size: 20px;
    font-weight: bold;
  }

  p {
    font-size: 16px;
    color: #555;
  }

  button {
    width:100%;
    padding: 10px 20px;
    font-size: 18px;
    font-weight: bold;
    background-color: black;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  div {
    display: flex;
    flex-direction: column;
  }

  div > div {
   
    margin-bottom: 10px;
  }
`;