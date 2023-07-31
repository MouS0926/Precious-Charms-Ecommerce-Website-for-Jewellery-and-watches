import { Checkbox, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";

export default function SideBarWatches() {
    const [searchParams, setSearchParams] = useSearchParams();
    const initialBrand = searchParams.getAll("brand");
    const initalOrder = searchParams.get("order");
    const initalSearch=searchParams.getAll("search")
    // const [gender, setGender] = useState(initialGender || []);
    const [brand, setBrand] = useState(initialBrand|| []);
    const [order, setOrder] = useState(initalOrder || "");
    const [search,setSearch]=useState("")
  // console.log(order,"Category")
  console.log(search)
    useEffect(() => {
      const params = {
        brand,
        order,
      };
   if(search){
    params.search=search
   }
  
      setSearchParams(params);
    }, [ brand, order,search]);
  
   
  
    const handleBrand = (e) => {
      const { value } = e.target;
      let newBrand = [...brand];
      if (newBrand.includes(value)) {
        newBrand = newBrand.filter((el) => el !== value);
      } else {
        newBrand.push(value);
      }
      setBrand(newBrand);
    };
    const handleSearch=(e)=>{
      setSearch(e.target.value)
    }
  
    const handleOrder = (e) => {
      setOrder(e.target.value);
    };
  
    const handleReset = () => {
      setBrand([]);
      setOrder("");
      
    };
  return (
    <SidebarContainer>

<input
        style={{marginBottom:"15px",backgroundColor:"lightgray",padding:"3px 3px"}}
        type="text"
        placeholder="Search"
        value={search}
        onChange={handleSearch}
      />
          <Section>
            <h3>Filter By Brands</h3>
            <CheckboxGroup>
              <CheckboxLabel>
                <input
                  type="checkbox"
                  value={"Rolex"}
                  onChange={handleBrand}
                  checked={brand.includes("Rolex")}
                />
                Rolex
              </CheckboxLabel>
    
              <CheckboxLabel>
                <input
                  type="checkbox"
                  value={"OMEGA"}
                  onChange={handleBrand}
                  checked={brand.includes("OMEGA")}
                />
                Omega
              </CheckboxLabel>
    
              <CheckboxLabel>
                <input
                  type="checkbox"
                  value={"MEISTERSINGER"}
                  onChange={handleBrand}
                  checked={brand.includes("MEISTERSINGER")}
                />
                Meistersinger
              </CheckboxLabel>
    
              <CheckboxLabel>
                <input
                  type="checkbox"
                  value={"LOUIS MOINET"}
                  onChange={handleBrand}
                  checked={brand.includes("LOUIS MOINET")}
                />
                Louis Moinet
              </CheckboxLabel>
    
              <CheckboxLabel>
                <input
                  type="checkbox"
                  value={"GRAND SEIKO"}
                  onChange={handleBrand}
                  checked={brand.includes("GRAND SEIKO")}
                />
                Grand Seiko
              </CheckboxLabel>
    
              <CheckboxLabel>
                <input
                  type="checkbox"
                  value={"FREDERIQUE CONSTANT"}
                  onChange={handleBrand}
                  checked={brand.includes("FREDERIQUE CONSTANT")}
                />
                Frederique Constant
              </CheckboxLabel>
    
              <CheckboxLabel>
                <input
                  type="checkbox"
                  value={"BOVET"}
                  onChange={handleBrand}
                  checked={brand.includes("BOVET")}
                />
                Bovet
              </CheckboxLabel>
    
              <CheckboxLabel>
                <input
                  type="checkbox"
                  value={"ALPINA"}
                  onChange={handleBrand}
                  checked={brand.includes("ALPINA")}
                />
                Alpina
              </CheckboxLabel>
    
            </CheckboxGroup>
          </Section>
    
          <Section>
            <h3>Sort By Discount</h3>
            <RadioGroup onChange={handleOrder}>
              <div className="radio">
              <RadioButton>
              <RadioLabel>
                <input  type="radio"
                name="sort"
                value={"asc"}
                checked={order === "asc"}/>
                Ascending</RadioLabel>
              </RadioButton>
              
              </div>
    
              <div className="radio">
                <RadioButton>
                <RadioLabel>
                <input type="radio"
                name="sort"
                value={"desc"}
                checked={order === "desc"} />
                Descending</RadioLabel>
                </RadioButton>
              
              </div>
            </RadioGroup>
          </Section>
    
          <Button onClick={handleReset}>Reset</Button>
        </SidebarContainer>
      );
    };
    
    const SidebarContainer = styled.div`
  /* padding: 0 10px;
  border-right: 1px solid gray;
 
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: flex-start; */

  .radio{
    display: flex;
   
  }
`;

const Section = styled.div`
  margin-bottom: 10px;
  h3{
    font-weight:bold;
    margin-bottom:5px
  }

`;

const CheckboxGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  font-size:13px;
  gap:5px
`;

const RadioGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const RadioLabel =styled.div`
display: flex;
flex-direction:row;
gap:5px
`;

const RadioButton =styled.div`
display: flex;
flex-direction: column;

`;


const Button = styled.button`
  background-color:black;
  color: white;
  border: none;
  padding: 5px;
  width: 170px;
  font-weight: bold;
  cursor: pointer;
  border-radius:5px;
  margin-top:10px;


  &:hover {
    background-color:white;
    color:black;
    border: 2px solid black;
  }
`;
