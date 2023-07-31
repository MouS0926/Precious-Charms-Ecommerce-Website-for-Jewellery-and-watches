// import React, { useEffect, useState } from 'react'
// import Navbar from './AdminNavbar'
// import {
//   FormControl,
//   FormLabel,
//   FormErrorMessage,
//   FormHelperText,
//   Input,
//   Select,
//   NumberInput,
//   NumberInputField,
//   NumberIncrementStepper,
//   NumberInputStepper,
//   NumberDecrementStepper,
//   Button,
// } from '@chakra-ui/react'
// import { useDispatch, useSelector } from 'react-redux';
// import { useParams } from 'react-router';
// import axios from 'axios';


// const EditPage = () => {
//   let  {id}=useParams();
//    let itemId=Number(id)
//   const data = useSelector((state: any) => state.data.data);
//   const [Display,setDisplay]=useState([])
//   const[ avatar,setavatar]=useState("")
//   const [price,setPrice]=useState(0);
//   const [about,setabout]=useState("");
//   const [category,setCategory]=useState("");
//   const [brand,setBrand]=useState("");
//   const [rating,setRating]=useState(0);
//   const [name,setName]=useState("")


//   const [updatedData,setUpdatedData]=useState([])
//   const dispatch=useDispatch()
//   useEffect(()=>{
//       let Data=data.find((el:any)=>el.id==itemId);
//     setavatar(Data.avatar)
//     setPrice(Data.price);
//     setabout(Data.about);
//     setCategory(Data.category);
//     setBrand(Data.brand);
//     setRating(Data.rating);
//     setName(Data.name)
//     // setDisplay(Data)
//   },[])
  
//   const handleUpdate=()=>{
//     const newData={price:+price,name:name,avatar:avatar,category:category,brand:brand,rating:+rating};
//     axios
//     .patch(`https://monkeyapi-2-0.onrender.com/products/${id}`,newData)
//     .then((res)=>{
//       console.log(res.data)
//     })
//     console.log(newData,"NewData")
// }

//   console.log(updatedData,"upadtedDaat")
//   return (
//     <div style={{backgroundColor:"rgb(54, 69, 79)"}}>
//       <Navbar />
//       <div style={{paddingTop:"50px",width:"1000px",paddingLeft:"300px",}}>
//         {/* <img src={avatar} alt="" /> */}
//       <FormControl isRequired  style={{paddingLeft:"200px",boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",borderRadius:"20px",backgroundColor:"white"}}>
//       <FormLabel>Image</FormLabel>
//         <Input placeholder='Url' width='20.5rem' value={avatar} name='avatar' onChange={(e)=>setavatar(e.target.value)}/>
//         <FormLabel>Name</FormLabel>
//         <Select placeholder='Select Name' width='20.5rem' value={name} name='name' onChange={(e)=>setName(e.target.value)}>
//           <option value="Jewelry">Jewelry</option>
//           <option value="Watches">Watches</option>
//         </Select>
//         <br />
        
//         <FormLabel>Category</FormLabel>
//         <Select placeholder='Select Category' width='20.5rem' value={category} name='category' onChange={(e)=>setCategory(e.target.value)}>
//           <option value="Rings">Rings</option>
//           <option value="Bracelets">Bracelets</option>
//           <option value="Earrning">Earrning</option>
//           <option value="Necklaces & Pendants">Necklaces & Pendants</option>
//           <option value="Accessories">Accessories</option>
//           <option value="Men's jewelry">Men's Jewelry</option>
//         </Select>
//         <br />
        
//         <FormLabel>Brands</FormLabel>
//         <Select placeholder='Select Brands' width='20.5rem' value={brand} name='brand' onChange={(e)=>setBrand(e.target.value)}>
//           <option value="Messica">Messica</option>
//           <option value="Cartier">Cartier</option>
//           <option value="Garrand">Garrand</option>
//           <option value="David Yurman">David Yuman</option>
//           <option value="Johan Hardy">Johan Hardy</option>
//           <option value="Graff">Graff</option>
//           <option value="Roberto Coin">Roberto Coin</option>
//           <option value="Mikimoto">Mikimoto</option>
//           <option value="Tiffani">Tiffani</option>
//         </Select>
//         <br />
        
//         <FormLabel>About</FormLabel>
//         <Input placeholder='about' width='20.5rem' value={about} name='about'  onChange={(e)=>setabout(e.target.value)}/>
//         <br />
//         <br />
//         <FormLabel>Price</FormLabel>
//         <Input placeholder='Price' width='20.5rem' value={price} name='price' onChange={(e:any)=>setPrice(e.target.value)}/>
       
//         <br />
        
//         <FormLabel>Rating</FormLabel>
//         <Input placeholder='rating' width='20.5rem' value={rating} name='rating' onChange={(e:any)=>setRating(e.target.value)}/>
        
//         <Button onClick={handleUpdate}>Save Changes</Button>
//       </FormControl>

//     </div>
//     </div>
//   )
// }

// export default EditPage
export{}
