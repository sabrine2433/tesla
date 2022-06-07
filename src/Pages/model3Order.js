import React from 'react'
import styled from 'styled-components'
import Icon,{SimpleLineIcons} from 'react-web-vector-icons'
import {BsGlobe, BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs'
import Gallery from '../Components/gallery'


function Model3Order() {
  return (
      <Container>
        <Head>
            <a>
                <img src="/images/logo.svg"  />
            </a>
            <Language>
                <BsGlobe
                    color='#171a20'
                    size={25}
                />
                <span style={{padding: "0px 0px 0px 5px", fontSize: "14px", color:"#393c41"}}>US</span>
            </Language>

            <Delivarydate>
                <p>Est. Delivary: June- Aug 2022</p>
            </Delivarydate>

        </Head>

        <Content>
            <main>
                <section role="none" style={{display:"flex",width:"60%", height:"100%" }} >
                   
                        <Gallery />
                                        
                </section>

                <section>
                    <OptionWidget>
                        ndjdndzdlsd;m
                    </OptionWidget>
                </section>
            </main>
        </Content>
        <footer>

        </footer>
    </Container>
    )
}

export default Model3Order

const Container = styled.div`
    padding: 10px 20px 0px 30px;
`


const Content = styled.div`
`

const Wrapper = styled.div`
    display:flex;    
    //align-items: ;
`

const OptionWidget = styled.div`
`

const Language = styled.button`
    background-color: white;
    border-style: none;
    display:flex;
    align-items:center;
    padding:5px;
    height:30px;
    width:60px;
`

const Head = styled.header`
    display: flex;
    justify-content:space-between;
`

const Delivarydate = styled.div`
    position: absolute;
    right: 129px;
    top: 17px;
    opacity: 0;

    @media(){
        opacity: 1;
    }
`




const Chev = styled.div`
    outline: none;
    
    border-style: none;
    //background-color: red;
    height:20px;
    width:15px;
    display: flex;
    align-items:center;

`