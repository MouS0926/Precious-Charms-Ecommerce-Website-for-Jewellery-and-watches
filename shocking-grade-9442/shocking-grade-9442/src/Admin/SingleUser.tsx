import React from 'react'
import Navbar from './AdminNavbar'
import { useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { UserObjectNew } from '../constrain'
import { Container, HStack, Heading, Text, Wrap, WrapItem } from '@chakra-ui/layout'
import { Card, CardBody } from '@chakra-ui/card'
import { Avatar, Spinner} from '@chakra-ui/react'
import {useEffect } from "react"
import { SingleUserFetch } from '../Redux/AdminReducer/action'


export const SingleUser = () => {
    const { id } = useParams();
  
    const single = useSelector((state: any) => state.data.singleUser);
    const isload = useSelector((state: any) => state.data.singleuserLoad);

    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(SingleUserFetch(id))
    },[])
   
  
    let { name, email, password ,addToCart,orderPlaced,address} = single;
   

 let add=address[address.length-1]
 

    return (
      <div>
        <Navbar />

{

    isload?
    
    <Spinner
        thickness='4px'
        speed='0.65s'
        emptyColor='gray.200'
        color='blue.500'
        size='xl'
        />
    :



        <Container maxW={"90%"} style={{ margin: "0 auto" }}>







          <br />
          <Card>
            <CardBody style={{display:"flex"}}>
              <Wrap>
                <WrapItem>
                  <Avatar name={name} src="https://bit.ly/broken-link" />
                </WrapItem>
              </Wrap>
             
              <Heading as='h3' size='lg' color={"#3f6c9b"}>
                &nbsp;&nbsp;{name}
             </Heading>

            </CardBody>
          </Card>
<br />





{/*****************  address *******************/}


 <HStack spacing='24px' >

 <Card width={"100%"} style={{backgroundColor:"#d2f8d7"}}>
  <CardBody>
              <Heading as='h4' size='md'>
                    Address Details
          </Heading>

          {

                            add ?


                            (
                              <div>
                              
                        
                              <p><b>Name :</b>{add.name}</p>
                              <p><b>Mobile No :</b>{add.mobile_number}</p>
                              <p><b>Pincode :</b>{add.pincod}</p>
                              <p><b>House No :</b>{add.house_no}</p>
                              <p><b>Area :</b>{add.area}</p>

                              <p><b>Town/City :</b>{add.town}</p>
                              </div>
                            )
                            
                           
                            :
                            <p>No Address is added yet</p>
                          } 

  </CardBody>
</Card>

</HStack>


{/*****************  address-end *******************/}
<br />

        <HStack spacing='24px'>
             <Card width={"50%"} style={{backgroundColor:"#f0f7f8",border:"1px solid #cccccc7a"}}>
           
              <CardBody>

              <Heading as='h4' size='md'>
                    Cart Details
             </Heading>
           
              <div style={{display:"flex",flexDirection:"column",gap:"10px"}}>
              {addToCart && addToCart.length > 0 ? (
                              
                              addToCart.map((el: any) => (
                                <div key={el.id} style={{display:"flex",gap:"10px",backgroundColor:"#ffffff"}}>
                                        <div>
                                        <img src={el.avatar} alt="" width={"100px"}/>
                                        </div>
                                        <div>
                                        <b>{el.name}</b> 
                                           <p><b>Price:</b> ₹{el.price}</p>
                                            <p><b>Category:</b> {el.category}</p>
                                             <p><b>About:</b> {el.about}</p>
                                                {
                                                 el.info && (  <p><b>Info:</b> {el.info}</p>)
                                                }
                                            </div>
                                    </div>
                              ))
                            ) : (
                              <p>No items in the cart.</p>
                            )}


              </div>

                          

              

            </CardBody>
             </Card>

              <Card width={"50%"} style={{backgroundColor:"#d2f8d7"}}>
               <CardBody>

               <Heading as='h4' size='md'>
                    Order Details
                 </Heading>



                 <div style={{display:"flex",flexDirection:"column",gap:"10px"}}>
              {orderPlaced && orderPlaced.length > 0 ? (
                              
                              orderPlaced.map((el: any) => (
                                <div key={el.id} style={{display:"flex",gap:"10px",backgroundColor:"#ffffff"}}>
                                        <div>
                                        <img src={el.avatar} alt="" width={"100px"}/>
                                        </div>
                                        <div>
                                        <b>{el.name}</b> 
                                           <p><b>Price:</b> {el.price}</p>
                                            <p><b>Category:</b> {el.category}</p>
                                             <p><b>About:</b> {el.about}</p>
                                                {
                                                 el.info && (  <p><b>Info:</b> {el.info}</p>)
                                                }
                                            </div>
                                    </div>
                              ))
                            ) : (
                              <p>No items in the cart.</p>
                            )}


              </div>

               </CardBody>
                </Card>
            </HStack>













    </Container>
    }
      </div>
    );
  };