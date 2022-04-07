import React, {useState} from 'react'
import styled from "styled-components"
import LanguageIcon from '@mui/icons-material/Language';
import CloseIcon from '@mui/icons-material/Close';
import { Translate } from '@mui/icons-material';
import {selectCars} from "../features/car/carSlice";
import { useSelector } from "react-redux"
import Home from '../Screens/home'




function Header() {
  const [burgerOpen, setBurgerOpen] = useState(false); 
  const cars = useSelector(selectCars);
  
  return (
    <Container>
      <a>
        <img src="/images/logo.svg"  />
      </a>
      <Menu>
        {cars && cars.map((car, index)=>(
          <a key={index} href='#'>{ car }</a>
        ))}
        
      </Menu>

      <RigthMenu>
        <a href='#'>Shop</a>
        <a href='#'>Account</a>
        
        <CustomMenu onClick={()=> setBurgerOpen(true)} onFocus={()=>"opacity: 0.7"}>
          <a href='#'>Menu</a>
        </CustomMenu>
       
      <BurgerNav show={burgerOpen}>
        <CloseWrapper  >
          <CustomClose onClick={()=> setBurgerOpen(false)}/>
        </CloseWrapper>
       
          <ModelCar>
            {cars && cars.map((car, index)=>(
              <li><a key={index} href='#'>{ car }</a></li>
            ))}
          </ModelCar>
          
          <li><a href="">Existing Inventory</a></li>
          <li><a href="">Used Inventory</a></li>
          <li><a href="">Trade-In</a></li>
          <li><a href="">Test Drive</a></li>
          <li><a href="">Powerwall</a></li>
          <li><a href="">Commercial Energy</a></li>
          <li><a href="">Utilities</a></li>
          <li><a href="">Charging</a></li>
          <li><a href="">Find Us</a></li>
          <li><a href="">Support</a></li>
          <li><a href="">Investor Relations</a></li>
          <li><a href="">Shop</a></li>
          <li><a href="">Account</a></li>
          <li><a href="">More</a></li>
          <li><a href="">Cybertruck</a></li>
          <li><a href="">Semi</a></li>
          <li><a href="">Roadster</a></li>
          <Language>
            <Translate 
            color="grey"/>  
          </Language>



      </BurgerNav>
    
     </RigthMenu>
    </Container>
  )
}

export default Header

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  top: 0;
  left: 0;
  rigth: 0;
  width: 100vw;
  z-index: 1;
  
  

`

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  
  a{
    font-size: 14px
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }

  @media(max-width: 1200px){
    display: none;
  }
`

const RigthMenu = styled.div`
display: flex;
align-items: center;
color: #171a20;

a{
  font-size: 14px
  text-transform: uppercase;
  padding: 0 23px;
  flex-wrap: nowrap;transition

  
}
a:hover,
a:focus{
  background-color: rgba(0,0,0, 0.05);
  border-radius: 30px;
  
}
`

const CustomMenu = styled.div`
  cursor: pointer;
  
  a {    
    transition: all 1s ease-out;
    border-radius: 30;
    //padding: 4px 8px;
  }
  a:hover,
  a:focus{
    background-color: rgba(0,0,0, 0.05);
    heigth:30px; 

  }

`

const BurgerNav = styled.div`
  position: fixed; 
  overflow-y: scroll;
  top: 0;
  bottom: 0;
  rigth:0;
  background: white;
  width: 300px;
  z-index: 16;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${props => props.show ? 'translateX(0)' :' translateX(100%)'};
  transition: transform 0.2s ease-in ;
  
  li{
    padding: 15px 0;  

    a{
      font-weigth: 600; 
      
    }

  }

`

const CustomClose = styled(CloseIcon)`
  cursor: pointer;
  //background-color: black;
  color: black;
  //margin: 5px 10px;  
  
`

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  background: white;    
  
`

const ModelCar = styled.div`
  @media(min-width: 1200px){
    display: none;}
`

const Language = styled.div`

`
