
import React, { useEffect, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../Redux/ProductReducer/action';
import { styled } from 'styled-components';
import { Button } from '@chakra-ui/button';
import { SideBarJewelry } from '../Components/SideBarJewelry';
import { useParams, useSearchParams } from 'react-router-dom';
import { MdProductionQuantityLimits } from 'react-icons/md';
import banner from '../home-image/banner11.jpg';
import SideBarWatches from '../Components/SideBarWatches';
import { Link } from 'react-router-dom';
import ProductCard from '../Components/ProductCard';
import Navbar from '../Components/Navbar';
import ProductImg from '../product-image/ProductImg.png'
import Footer from '../Components/Footer';
import Pagination from '../Components/Pegination';
const ProductPage = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const { name } = useParams()
  const [searchParams, setSearchParams] = useSearchParams()
  // console.log(products)
  let paramsObj = {};
  if (name == "Jewelry" || "Watches") {
    paramsObj = {
      params: {
        _limit: 12,
        _page: page,
        name: name,
        category: searchParams.getAll("category"),
        brand: searchParams.getAll("brand"),
        _sort: searchParams.get("order") && "price",
        _order: searchParams.get("order"),
        q: searchParams.getAll("search"),
      },
    };
  } else {
    paramsObj = {

      params: {
        _limit: 12,
        _page: page,
        category: name,
        // category: searchParams.getAll("category"),
        brand: searchParams.getAll("brand"),
        _sort: searchParams.get("order") && "price",
        _order: searchParams.get("order"),
        q: searchParams.getAll("search"),
      },
    };
  }

  let store = useSelector((store: any) => store.productReducer)
  console.log(store, "data")
  let { products, isError, isLoading, totalPages } = useSelector((store: any) => {
    return {
      products: store.productReducer.products,
      isLoading: store.productReducer.isLoading,
      isError: store.productReducer.isError,
      totalPages: store.productReducer.totalPages
    }
  }, shallowEqual);
  console.log(products)
  // if (name == "Jewelry" || "Watches") {
  //   products = products.filter((ele: any) => ele.name == name)
  // } else {
  //   products = products.filter((ele: any) => ele.category == name)
  // }
  // console.log(products)

  useEffect(() => {
    dispatch(getProducts(paramsObj))

  }, [searchParams, page])

  // const totalPages = Math.ceil(products.length / 12);
  // console.log(totalPages, "total page");



  return (
    <div>
      <Navbar />
      <img src={ProductImg} alt="" style={{ height: "400px", width: "100%" }} />
      <DIV>
        {name == "Watches" ? <div className="sidebar">
          <SideBarWatches />
        </div> : <div className="sidebar">
          <SideBarJewelry />
        </div>}


        <div className="product-list">
          {isError && <h1>Error Occurs</h1>}
          {isLoading && <h1>Loading...</h1>}
          {products.length > 0 &&
            products.map((ele: any) => (<ProductCard key={ele.id} {...ele} />
            ))}

        </div>

      </DIV>
      <Pagination currentPage={page} totalPages={totalPages} onPageChange={setPage} />
      <div>
        <Footer />
      </div>

    </div>
  )
}

const DIV = styled.div`
display: flex;
gap: 10px;
background-color:#f9f9f9;
.sidebar{
  margin-top: 30px;
  margin-bottom: 60px;
 
  width: 15%;
  margin-left: 10px;

}

.product-list{
  width: 85%;
  height:auto;
  display: grid;
  grid-template-columns: repeat(4,1fr);
grid-gap: 40px;
margin: 10px;
margin-top: 30px;
  margin-bottom: 60px; 

}

@media screen and (min-device-width: 320px) and (max-device-width: 567px) { 

  display: flex;
  flex-direction: column;
  .sidebar{
 width:100%;
 }

 .product-list{
  
  grid-template-columns: repeat(1,1fr);
  grid-gap: 30px;
}
}

@media screen and (min-device-width: 568px) and (max-device-width: 776px) { 

display: flex;
flex-direction: column;
.sidebar{
width:100%;
}

.product-list{
width: 85%;
display: grid;
grid-template-columns: repeat(2,1fr);
grid-gap: 20px;
margin: 10px;
margin-top: 30px;
margin-bottom: 60px; 

}
}



`

export default ProductPage
