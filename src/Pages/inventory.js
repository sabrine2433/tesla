import styled from "styled-components";
import React, { useState } from 'react';
import GridViewSharpIcon from '@mui/icons-material/GridViewSharp';
import ViewAgendaIcon from '@mui/icons-material/ViewAgenda';
import FilterModal from '../Components/filterModal'
import { style } from "@mui/system";


function Inventory() {
    const [MenuClick,setMenu] = useState(1);
    
    
    return (
        <Container >
            {/*head of the page */}
            <Head> 
                <div style={{alignItems:"center", display:"flex", justifyContent: "space-between",width:"100vw"}}>
                    {/*Title */}
                    <div style={{display:"flex"}}>
                        
                        <CustomText>New&nbsp;</CustomText>                                                    
                        <h1 style={{color:"#171a20", fontSize: '40px'}}> Inventory </h1>                                                   
                       
                    </div>
                    

                    <div menu={MenuClick} style={{display:"flex", padding: "0px 50px"}}>
                        {/*Buttons */}
                        <ButtonGroup>
                                {/*<LeftButton>FILTER </LeftButton>*/}
                                <FilterModal />

                                <RigthButton>
                                    <select style={{width:"240px", height: "30px", backgroundColor: "#f4f4f4", borderWidth:"0px", padding :"0px 40px 0px 15px", fontSize:"16px", color: "#171a20"}}>
                                        <option selected value="Relevance">Relevance</option>
                                        <option value="PHL">Price: High to Low </option>
                                        <option value="PLH">Price: Low to High</option>
                                        <option value="MHL">Mileage: High to Low</option>
                                        <option value="MLH">Mileage: Low to High</option>
                                    </select>
                                </RigthButton>
                                                        
                        </ButtonGroup>

                        {/*choose grid type*/}
                        <div style={{display:"flex",alignItems:"center",flexGrow:"1", minWidth:"100px", transition:"border 0.3s ease", padding:"0px 0px 0px 10px" }}>
                            <GridViewSharpIcon
                                color = "black"
                                size={25}
                                
                            />
                            <text style={{fontSize:"20px", color: "grey"}}>&nbsp;|&nbsp;</text>
                            <ViewAgendaIcon
                                onClick={() => setMenu(2)}  
                                size={25}                   
                                
                            />
                        </div>
                    </div>
                </div>  
            </Head>

            {/*content */}
            <FilterCar>
                ddedede
            </FilterCar>




        
        </Container>
    )
}

export default Inventory;

const CustomText = styled.h1`
    font-size: 40px;
    color:"#171a20" ;  
    //padding: 0px 0px 0px 30px;    
    @media(min-width: 900px){
        display: none;
        
    }

`

const Container = styled.div`
    background-color: white;
    padding: 50px 0px 0px 30px;
    height: 100vh;
    width: 100vw;
    display: grid;
    z-index: 30;
    align-items:flex-start;
    justify-content: space-between;    
`

const ButtonGroup = styled.div`
    display: flex;
    //position: sticky;
    //margin-bottom: 30px;
    padding: 0px 40px 0px 0px;
    @media (max-width: 900px){
        flex-direction:column;
        display: grid;
        z-index:30;
        
    };    
`


const RigthButton = styled.div`
    Background-color: #F4F4F4;
    height: 40px;
    width: 260px;
    color: #171a20;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    text-transform: uppercase;
    cursor: pointer;
    margin: 8px;  
    @media(max-width: 900px){
        width:300px;
    }
    
`

const Content = styled.main`
    background-color: #F4F4F4;
    width: 100vw;
    position:fixed;
    display:flex;

`

const Head = styled.section`
    display: flex; 
    justify-content: space-between;
    align-items: flex-end; 
    height: 20vh;
    padding: 0px 0px;
    position: fixed;

`

const FilterCar = styled.aside`
    background-color: #F4F4F4;
    //width: 100vw;
    //position: fixed;
    display:flex;
    
`

