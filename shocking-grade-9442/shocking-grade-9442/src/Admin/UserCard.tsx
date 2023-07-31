import { Avatar, Button, Wrap, WrapItem } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from "styled-components"
import { ProductObject } from '../constrain';
interface userObj{
  name:string;
  email:string;
  
  password:string;
  id?:number;
  addToCart:ProductObject[];
  orderPlaced:ProductObject[];
}


export default function UserCard({id,name,email}:userObj) {
  return (
    <DIV>

              <Wrap>
                <WrapItem>
                  <Avatar name={name} src="https://bit.ly/broken-link" />
                </WrapItem>
              </Wrap>

      <h5><b>User Name :</b>{name}</h5>
      <p><b>Email :</b>{email}</p>

      <Button colorScheme='teal' size='xs' >

<Link to={`/a/users/details/${id}`}>Details</Link>

      </Button>
    </DIV>
  )
}


const DIV = styled.section`
box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
padding: 7px;
h4{
  font-size: 20px;
  font-weight: 600;
  color:#282727
}

`