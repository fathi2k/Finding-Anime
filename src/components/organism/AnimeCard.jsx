import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

const AnimeCard = ({src,onClick, idName,id,addToWishlist}) => {

// const handleClick = ()=>{
    
// }

const navigate = useNavigate();

const cardRef = useRef(null);
const cardText = useRef(null);
const cardOverlayText = useRef(null);

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
      ease: 'power2.out',
      opacity : 1
    })


    gsap.to(cardOverlayText.current,{
      opacity : 1
    })
  
}


const mouseLeave = ()=>{
  gsap.to(cardRef.current,{
    y : 0,
    scale : 1,
    duration : 0.3,
    opacity:1
  })



  
    gsap.to(cardOverlayText.current,{
      opacity : 0
    })
}








  return (
    <div id={id} onClick={onClick} ref={cardRef}  className= '' onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
      <img className='h-[400px] w-[400px]  rounded-[30px]'  src={src} />
            

        <div  className='bg-black/60 rounded-2xl absolute opacity-0  h-full w-full absolute top-0 text-white p-2' ref={cardOverlayText} >
        <div  className='bg-red-300 text-[30px] font-bold flex flex-col  inset-0 left-0 transition-all'>
                    <button onClick={()=> addToWishlist(idName)} className=' cursor-pointer absolute top-0 hover:bg-blue-300 right-0 left-0 '>Add to wishlist</button>
                    <button onClick={()=>navigate(`/detail/${idName}`)} className='text-[50px] cursor-pointer absolute bottom-0 hover:bg-amber-300 right-0 left-0 '>see details</button>
        </div>
        
        </div>





    </div>
  )
}

export default AnimeCard
