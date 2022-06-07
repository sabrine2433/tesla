import React from 'react'
import ReactSwipe from 'react-swipe';
import styled from 'styled-components';
import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs'

function Gallery() {
  let reactSwipeEl;
  return (     
      <div style={{display:"flex", justifyContent:"space-between", width:"100%",alignItems:"center",height: "100%" }}>
        <div onClick={() => reactSwipeEl.next()} className="Left">
            <BsChevronCompactLeft
              color='#171a20'
              size={15} 
              className="Chevrl"
            />
        </div>

        <ReactSwipe
          className="carousel"
          swipeOptions={{ continuous: true }}
          ref={el => (reactSwipeEl = el)}
        >
          <GallerySection>
            <img src="/images/model3/1a.jpeg"  />
          </GallerySection>
        
          <GallerySection>
            <img src="/images/model3/1.jpeg"  />
          </GallerySection>
          
          <GallerySection>
            <img src="/images/model3/2.jpeg"  />
          </GallerySection>

           <GallerySection>
            <img src="/images/model3/3.jpeg"  />
          </GallerySection>

          <GallerySection>
            <img src="/images/model3/4.jpeg"  />
          </GallerySection>
                        
      </ReactSwipe>
        <div onClick={() => reactSwipeEl.prev()}>
          <BsChevronCompactRight
              color='#171a20'
              size={15} 
              className="Chevrl"
            />
        </div>
      </div>
    
  )
}

export default Gallery

const GallerySection = styled.div`
    //transform: translateX(-24px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    //transition: opacity .5s cubic-bezier(0.5,0,0,0.75),visibility .5s .5s,transform .5s cubic-bezier(0.5,0,0,0.75);
    width: 100%;
`

