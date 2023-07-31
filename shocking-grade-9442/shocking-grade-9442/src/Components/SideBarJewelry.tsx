// import { Search2Icon } from "@chakra-ui/icons";
import { Checkbox, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { string } from "yargs";

export const SideBarJewelry = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialBrand = searchParams.getAll("brand");
  const initalCategory = searchParams.getAll("category");
  const initalOrder = searchParams.get("order");
  const initalSearch=searchParams.getAll("search")
  // const [gender, setGender] = useState(initialGender || []);
  const [brand, setBrand] = useState(initialBrand|| []);
  const [order, setOrder] = useState(initalOrder || "");
  const [category,setCategory]=useState(initalCategory || []);
  const [search,setSearch]=useState("")
  const{name}:any=useParams()
 console.log(name,"NAme")

// console.log(order,"Category")
  useEffect(() => {
   
    const params:any = {
      category,
      brand,
      
      order,
    };
 if(search){
  params.search=search
 }

    setSearchParams(params);
  }, [category, brand, order,search]);

  const handleCategory = (e:any):void => {
    let { value } = e.target;
    // value=name
    

    let newCategory = [...category];
    if (newCategory.includes(value)) {
      newCategory = newCategory.filter((el) => el !== value);
    } else {
      newCategory.push(value);
    }
   setCategory(name)
      setCategory(newCategory);
   
   
    
  };

  const handleBrand = (e:any):void => {
    const { value } = e.target;
    let newBrand = [...brand];
    if (newBrand.includes(value)) {
      newBrand = newBrand.filter((el) => el !== value);
    } else {
      newBrand.push(value);
    }
    setBrand(newBrand);
  };
  const handleSearch=(e:any):void=>{
    setSearch(e.target.value)
  }

  const handleOrder = (e:any):void => {
    setOrder(e.target.value);
  };

  const handleReset = () => {
    setCategory([]);
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
        <h3>Filter by Category</h3>
        <CheckboxGroup>
        <CheckboxLabel>
            <input
              type="checkbox"
              value={"Rings"}
              onChange={handleCategory}
              checked={category.includes("Rings")}
            />
            Rings
          </CheckboxLabel>

          <CheckboxLabel>
            <input
              type="checkbox"
              value={"Brecelets"}
              onChange={handleCategory}
              checked={category.includes("Brecelets")}
            />
            Bracelets
          </CheckboxLabel>

          <CheckboxLabel>
            <input
              type="checkbox"
              value={"Earrning"}
              onChange={handleCategory}
              checked={category.includes("Earrning")}
            />
            Earrning
          </CheckboxLabel>

          <CheckboxLabel>
            <input
              type="checkbox"
              value={"Necklaces & Pendants"}
              onChange={handleCategory}
              checked={category.includes("Necklaces & Pendants")}
            />
            Necklaces
          </CheckboxLabel>

          <CheckboxLabel>
            <input
              type="checkbox"
              value={"Accessories"}
              onChange={handleCategory}
              checked={category.includes("Accessories")}
            />
            Accessories
          </CheckboxLabel>
          <CheckboxLabel>
            <input
              type="checkbox"
              value={"Men's jewelry"}
              onChange={handleCategory}
              checked={category.includes("Men's jewelry")}
            />
            Men's Jewelry
          </CheckboxLabel>
        </CheckboxGroup>
      </Section>

      <Section>
        <h3>Filter By Brands</h3>
        <CheckboxGroup>
          <CheckboxLabel>
            <input
              type="checkbox"
              value={"Messika"}
              onChange={handleBrand}
              checked={brand.includes("Messika")}
            />
            Messika
          </CheckboxLabel>

          <CheckboxLabel>
            <input
              type="checkbox"
              value={"Cartier"}
              onChange={handleBrand}
              checked={brand.includes("Cartier")}
            />
            Cartier
          </CheckboxLabel>

          <CheckboxLabel>
            <input
              type="checkbox"
              value={"Garrard"}
              onChange={handleBrand}
              checked={brand.includes("Garrard")}
            />
            Garrard
          </CheckboxLabel>

          <CheckboxLabel>
            <input
              type="checkbox"
              value={"David Yurman"}
              onChange={handleBrand}
              
              checked={brand.includes("David Yurman")}
            />
            David Yurman
          </CheckboxLabel>

          <CheckboxLabel>
            <input
              type="checkbox"
              value={"John Hardy"}
              onChange={handleBrand}
              checked={brand.includes("John Hardy")}
            />
            Johan Hardy
          </CheckboxLabel>

          <CheckboxLabel>
            <input
              type="checkbox"
              value={"Reborto Coin"}
              onChange={handleBrand}
              checked={brand.includes("Reborto Coin")}
            />
            Roberto Coin
          </CheckboxLabel>

          <CheckboxLabel>
            <input
              type="checkbox"
              value={"Graff"}
              onChange={handleBrand}
              checked={brand.includes("Graff")}
            />
            Graff
          </CheckboxLabel>

          <CheckboxLabel>
            <input
              type="checkbox"
              value={"Mikimoto"}
              onChange={handleBrand}
              checked={brand.includes("Mikimoto")}
            />
            Mikimoto
          </CheckboxLabel>

          <CheckboxLabel>
            <input
              type="checkbox"
              value={"Tiffani"}
              onChange={handleBrand}
              checked={brand.includes("Tiffani")}
              // color="green"
            />
            Tiffani
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
   height: 100vh; 
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
    border: 2px;
  }
`;
