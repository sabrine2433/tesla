import React from 'react'
import styled from 'styled-components';


function Exclamation() {
  return (
      <DelivaryIcon>
        
        A transportation fee may apply to delivery locations 
        outside of the vehicle’s immediate region.
        Listed fees are estimates and will be confirmed once 
        an order is placed.

    </DelivaryIcon>
  )
}

export default Exclamation;

const DelivaryIcon = styled.div`
    opacity: 1;
    pointer-events: inherit;
    transition: opacity .5s cubic-bezier(0.5,0,0,0.75),
    transform .5s cubic-bezier(0.5,0,0,0.75),
    visibility 0s 0s;
    visibility: inherit;
`