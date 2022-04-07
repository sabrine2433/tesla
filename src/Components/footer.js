import React from 'react'
import styled from '@emotion/styled'

function Footer() {
  return (
    <Container>
        <li><a>Tesla © 2022</a></li>
        <li><a>Privacy & Legal</a></li>
        <li><a>Vehicle Recalls</a></li>
        <li><a>Contact</a></li>
        <li><a>Careers</a></li>
        <li><a>News</a></li>
        <li><a>Engage</a></li>
        <li><a>Locations</a></li>
    </Container>
  )
}

export default Footer


const Container = styled.div`
  //min-height: 30px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 0;
  width: 100vw;
  z-index: 1;
  list-style-type: none;
  li{
    padding: 15px 0;  

    a{
      font-weigth: 600; 
      font-size: 12px;
      color: #5c5e62;
      margin: 0px 14px 0px 0px;
      padding: 8px 0px;
      cursor: pointer;
      
    }

  }

`
