import React from 'react'
import Section from './section'

function CarSection() {
  return (
    <Wrap bgImage={backgroundImg} >
    <Fade>
        <ItemText>
            <h1 >{ title }</h1>
            <p>{description}</p>
        </ItemText>
    </Fade> 
      
    <div>
        

    </div>
  </Wrap>
)
}


export default CarSection

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