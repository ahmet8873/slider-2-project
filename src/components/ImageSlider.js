import React, { useState } from 'react'

const ImageSlider = ({images}) => {

const[currentIndex,setCurrentIndex]=useState(0)




const sliderStyle={
    height:'100%',
    position:'relative'
}

const slideStyle={
    width:'100%',
    height:'100%',
    backgroundImage:`url(${images[currentIndex].url})`,
    backgroundSize:'cover',
    bacgroundPosition:'center',
    borderRadius:'10px',
    
}




const leftArrowStyle={
  position:'absolute',
  top:'50%',
  transform:'translate(0,-50%)',
  left:'32px',
  fontSize:'45px',
  zIndex:'1',
  cursor:'pointer',
  color:'white'

}

const rightArrowStyle={
 position:'absolute',
  top:'50%',
  transform:'translate(0,-50%)',
  right:'32px',
  fontSize:'45px',
  zIndex:'1',
  cursor:'pointer',
  color:'white'
}
const dotContainer={
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    position:'absolute',
    top:'80%',
    left:'50%',
    transform:'translate(-50%,0)'
}



const goToPrev=()=>{
    const isFirstSlide=currentIndex===0
    const newIndex=isFirstSlide?images.length-1:currentIndex-1
    setCurrentIndex(newIndex)
}
const goToNext=()=>{
    const isLastSlide=currentIndex===images.length-1
    const newIndex=isLastSlide?0:currentIndex+1
    setCurrentIndex(newIndex)
}

    



  return (
    <div style={sliderStyle}>
        <div style={leftArrowStyle} onClick={goToPrev}>◀︎</div>
        <div style={rightArrowStyle} onClick={goToNext}>►</div>
        
        <div style={slideStyle}></div>
        
        <div style={dotContainer}>{
            images.map((image,index)=>(
                <div style={{ height:'30px',
                width:'30px',
                borderRadius:'50%',
                backgroundImage:`url(${image.url})`,
                backgroundSize:'cover',
                bacgroundPosition:'center',
                margin:'5px 5px',
                border:'1px solid white',
                cursor:'pointer'
                }}  onClick={()=>setCurrentIndex(index)}>
                    
                </div>
            ))
            }</div>
    </div>
  )
}

export default ImageSlider