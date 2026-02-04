import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'


const AnimeCard = ({src,onClick, idName}) => {

// const handleClick = ()=>{
    
// }

const cardRef = useRef(null);


useGSAP(()=>{
      
      
      gsap.from(cardRef.current,{
        y : 40,
        ease: "power1.inOut",
        stagger : {
          from : 'end',
          axis : 'y',
          
          amount : 1.5
        }
      })
},[])



//animation mouse//



const mouseEnter = ()=>{

    gsap.to(cardRef.current, {
      y: -10,
      scale: 1.05,
      boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
      duration: 0.3,
      ease: 'power2.out'
    })
  
}


const mouseLeave = ()=>{
  gsap.to(cardRef.current,{
    y : 0,
    scale : 1,
    duration : 0.3,
    
  })
}


  return (
    <div ref={cardRef} onClick={onClick} className= ' ' onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
      <a href={`/detail/${idName}`}><img className='h-[400px] w-[400px]  rounded-[30px]'  src={src} /></a>
            

    </div>
  )
}

export default AnimeCard
