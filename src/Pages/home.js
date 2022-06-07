import React from 'react'
import styled from "styled-components"
import Section from '../Components/section'

function Home(props) {
  return (
    <Container>
        <Section 
          title="Model 3"  
          description="Order online for Touchable Delivery"
          backgroundImg="model-3.jpg"
          left="Custom order"
          rigth="existing inventory"
        />
        <Section 
          title="Model Y"  
          description="Order online for Touchable Delivery"
          backgroundImg="model-y.jpg"
          left="Custom order"
          rigth="existing inventory"
        />
        <Section 
          title="Model S"  
          description="Order online for Touchable Delivery"
          backgroundImg="model-s.jpg"
          left="Custom order"
          rigth="existing inventory"
        />
        <Section 
          title="Model X"  
          description="Order online for Touchable Delivery"
          backgroundImg="model-x.jpg"
          left="Custom order"
          rigth="existing inventory"
        />
        <Section 
          title="Solar Panels"
          description="Lowest Cost Solar Panels in America"
          backgroundImg="solar-panel.jpg"
          left="order now"
          rigth="learn more"
        />
        <Section 
          title="Solar Roof"
          description="Produce Clean Energy
          From Your Roof"
          backgroundImg="solar-roof.jpg"
          left="order now"
          rigth="learn more"
        />
       <Section 
          title="Accessoires"
          description=""
          backgroundImg="accessories.jpg"
          left="shop now"
        />
    </Container>
  )
}

export default Home

const Container = styled.div`
    height: 100vh;
    transform: ${props => props.show ? 'blur(0)' :' blur(4px)'};
    
    
      
`