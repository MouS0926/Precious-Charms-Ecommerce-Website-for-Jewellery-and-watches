import React, { useState } from 'react'
import Navbar from './AdminNavbar'
import styled from "styled-components"
import { useDispatch } from 'react-redux';
import { postProduct } from '../Redux/AdminReducer/action';
import { Center, Heading, useToast } from '@chakra-ui/react';


export const AddProduct = () => {

    const dispatch = useDispatch();
const toast =useToast();
interface productObj{
    name: string
    price: string
    about: string
    category: string
    brand: string
    rating:string
    avatar:string
    info:string
}

const initialState :productObj={
     name: "",
    price: "",
    about: "",
    category: "",
    brand: "",
    rating:"" ,
    avatar:"",
    info:""
}
const [productData,setProductData]=useState(initialState)

const handleChange=(e:React.ChangeEvent<HTMLSelectElement>)=>{
    const { name, value}=e.target
    setProductData((prev)=>{
      return {...prev,[name]:value}
    })
    
}

const handleTextChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
    const { name, value}=e.target
    setProductData((prev)=>{
        return { ...prev, [name]: name === "price" || name === "rating" ? +value : value };
    })
}

console.log(productData);
const handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    dispatch(postProduct(productData));
    toast({
        title: 'Adding Success',
        description: 'Product Added successfully',
        status: 'success', 
        duration: 2000,  
        isClosable: true, 
      });
   setProductData(initialState)
   
  }


  return (
    <div>
        <Navbar/>

        <DIV>

            <form className='formclass' onSubmit={handleSubmit}>

            <Center  h='50px' >
                    <Heading as='h4' size='md'>
                            Add Products
                </Heading>
            </Center>


               
                <br />
                <select name="name"  value={productData.name} onChange={handleChange}>
                    <option value="">Select Product Name</option>
                    <option value="Jewelry">Jewellery</option>
                    <option value="Watches">Watches</option>
                </select>

                <input type="text" name='price' placeholder='Enter Product Price' 
                value={productData.price} 
                onChange={handleTextChange}
                />
                <input type="text" name="about"   placeholder='Enter Product Description' 
                value={productData.about}
                onChange={handleTextChange}
                />

        {
            productData.name=="Watches" && (
                <select name="category"  value={productData.category}  onChange={handleChange}>
                
                <option value="Men's jewelry">Men's jewelry</option>
            </select>
            )
        }

{
    productData.name=="Jewelry" && (
        <select name="category"  value={productData.category}  onChange={handleChange}>
        <option value="">Select Product Category for jewellery</option>
        <option value="Rings">Rings</option>
        <option value="Brecelets">Brecelets</option>
        <option value="Earrning">Earrning</option>
        <option value="Necklaces & Pendants">Necklaces & Pendants</option>
        <option value="Accessories">Accessories</option>
        <option value="Men's jewelry">Men's jewelry</option>
    </select>
    )
}




                

           {
            productData.name=="Jewelry" && (
                <select name="brand"  value={productData.brand}  onChange={handleChange}>
                <option value="">Select Product Brand for Jewellery </option>
                <option value="Messika">Messika</option>
                <option value="Cartier">Cartier</option>
                <option value="Garrard">Garrard</option>
                <option value="David Yurman">David Yurman</option>
                <option value="John Hardy">John Hardy</option>
                <option value="Reborto Coin">Reborto Coin</option>
                <option value="Graff">Graff</option>
                <option value="Mikimoto">Mikimoto</option>
                <option value="Tiffani">Tiffani</option>
            </select>

            )
           }  


         {
                productData.name=="Watches" && (
                    <select name="brand"  value={productData.brand}  onChange={handleChange}>
                    <option value="">Select Product Brand for Watches </option>
                    <option value="Rolex">Rolex</option>
                    <option value="OMEGA">OMEGA</option>
                    <option value="MEISTERSINGER">MEISTERSINGER</option>
                    <option value="LOUIS MOINET">LOUIS MOINET</option>
                    <option value="GRAND SEIKO">GRAND SEIKO</option>
                    <option value="FREDERIQUE CONSTANT">FREDERIQUE CONSTANT</option>
                    <option value="BOVET">BOVET</option>
                    <option value="ALPINA">ALPINA</option>
                </select>
                )
        }
               

           

        {
            productData.name=="Watches" && (
                <input  type="text" name='info' placeholder='Enter Product Info' 
                value={productData.info}
                onChange={handleTextChange}
                />

            )
        }

                    
                <input  type="number" name='rating' placeholder='Enter Product Rating' 
                value={productData.rating}
                onChange={handleTextChange}
                />

                <input  type="text" placeholder='Enter Image URL' name='avatar'
                 value={productData.avatar}
                 onChange={handleTextChange}
                 />

                <button type='submit'>Add Product</button>
            </form>
            
        </DIV>

    </div>
  )
}


const DIV=styled.div`
.formclass{
    width:50%;
    margin: 0 auto;
    display: flex;
    margin-top:30px;
    flex-direction: column;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
    padding: 10px;
}
input,select,textarea{
    border: 1px solid #cdcdcd;
    padding: 5px;
    font-size: 16px;
    margin-top: 10px;
    border-radius: 5px;
}
button{
    width:100%;
    background-color:#a86535;
    padding: 8px;
    margin-top:10px;
    border-radius: 5px;
    color:#fff;
}
`