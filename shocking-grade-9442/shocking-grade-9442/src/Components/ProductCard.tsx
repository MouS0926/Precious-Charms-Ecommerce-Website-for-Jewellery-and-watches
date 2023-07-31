import { Heading } from '@chakra-ui/layout';
import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { styled } from 'styled-components';

export default function ProductCard({id,price,about,brand,avatar,name}:any) {
  // const isAuth = useSelector((store) => store.authReducer.isAuth);
  console.log(name)
  return (
    <Div key={id} className='product' >
         <Link to={`/product/:name/${id}`}> <img src={avatar} alt={name} style={{ width: "200px" , height:"210px"}} /></Link>
          {/* <p>Name: {ele.name}</p> */}
        
          {/* <h4> {about}</h4> */}
          <Heading as='h3' size='sm'>{about}</Heading>
          <p>{brand}</p>
          <p> ₹{price}</p>
          {/* <Button colorScheme='teal' variant='outline'>Add To Cart</Button> */}
          
        </Div>
  )
}

const Div=styled.div`
  background-color: #ffffff;
  height:350px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding-left: 15px;
  padding-bottom: 10px;
`