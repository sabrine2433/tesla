import React from 'react'
import { Fade } from 'react-reveal'
import styled from "styled-components"

function Section({title, description, rigth, left, backgroundImg}) {
    
    return (
      
      <Wrap bgImage={backgroundImg} >
        <Fade>
            <ItemText>
                <h1 >{ title }</h1>
                <p>{description}</p>
            </ItemText>
        </Fade> 
          
        <div>
            <Fade>
                <ButtonGroup>
                    <LeftButton>
                            {left}
                    </LeftButton>
                    { rigth &&
                        <RigthButton>
                            {rigth}
                        </RigthButton>
                    }                        
                </ButtonGroup>
            </Fade>

            <DownArroW src="/images/down-arrow.svg" />
        </div>
      </Wrap>
  )
}

export default Section

const Wrap = styled.div`
    z-index: 10;
    width: 100vw ;
    height: 100vh;
    background-size: cover;
    bachground-position: center;
    background-repeat: no-repeat;
    display: flex ;
    flex-direction: column;
    justify-content: space-between; // vertical
    align-items: center ; // horizantal
    background-image: ${props =>`url("/images/${props.bgImage}")`};
`



const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;
    font-size: 20px;
    z-index: 10;
`

const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 30px;
    @media (max-width: 768px){
        flex-direction:column
    };
    
    
`


const LeftButton = styled.div`
    Background-color: #171a20;
    height: 40px;
    width: 256px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    margin: 8px;
    
   
    

`


const RigthButton = styled(LeftButton)`
    
    Background-color: white;
    color: #171a20
`

const DownArroW = styled.img`
    
    height: 40px;
    animation: animateDown infinite 1.5s;
    
`