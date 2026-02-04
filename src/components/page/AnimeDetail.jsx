import React, { useEffect } from 'react'
import Header from '../header'
import { animeApi } from '../../api/animeApi'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'




const AnimeDetail = () => {

const {id} = useParams();




const [inputSearch,setInputSearch] = useState('')
const [dataResultSearch,setDataResultSearch] = useState([]);
//untuk tengok ayat panjang//

const [isPanjang,setIsPanjang] = useState(false);



// const handleClick = (e)=>{
// e.preventDefault() 

const clickMore = ()=>{
  console.log('click')
  setIsPanjang(!isPanjang)
}


  
  const handleApi = async ()=>{
    const data = await animeApi();

    const sameId = data.data.filter((para)=>{
      return  Number(id) === para.mal_id;
    })


    if (sameId){
       setDataResultSearch(sameId)
        
       
    }

    // console.log(data.data)


  // console.log(data.data[2].title);
  
      // console.log(dataResultSearch);
      
      // console.log(dataResultSearch)
   

  }


  useEffect(()=>{
        handleApi();
  },[])




// animation///




useGSAP(()=>{
  

      gsap.from('.tajuk',{
        ease : 'back.inOut',
     
        duration : 1
      })


      gsap.from('.container-card',{
        
        y : 300

      })

},[dataResultSearch])










  return (

    <>
            <Header onClick={handleApi} onChange={(e)=>setInputSearch(e.target.value)} value={inputSearch}/>


           {


                dataResultSearch  && (

  dataResultSearch.map((anime)=>{


    return  <div className="flex flex-col justify-center items-center  " >

      

 <h1 className="text-[60px] tajuk">{anime.title}</h1>

<div className=" shadow-2xl  p-4 flex justify-around gap-4 w-[1200px] rounded-2xl container-card">


          <div className=" flex flex-col items-center">
              <img className="h-[600px]" src={anime.images.jpg.large_image_url} alt="" />
              <p className={`max-w-[600px] ${isPanjang?  '' : 'truncate' } mt-[5%] px-2 text-gray-400`}>{anime.synopsis}</p>
              <button onClick={clickMore} className="text-red-300 border bg-black hover:text-red-500">{isPanjang ? 'close' : 'Read More'}</button>
            
          </div>
           


            <div className=" text-2xl p-2 text-[30px] flex flex-col gap-6 ">
              <p>Release Year : <span className="text-gray-400" > {anime.year}</span> </p>
              <p>Rating: <span className="text-gray-400" >  {anime.rating} </span> </p>
              <p>Rank : <span className="text-gray-400" > {anime.rank} </span> </p>
              <p>Score : <span className="text-gray-400" >  {anime.score} </span> </p>
              <p>Popularity : <span className="text-gray-400" >  {anime.popularity} </span> </p>
              <p>Status : <span className="text-gray-400" >  {anime.status} </span> </p>
              <p>Source : <span className="text-gray-400" >  {anime.source} </span> </p>
              <p>Season : <span className="text-gray-400" >  {anime.season} </span> </p>
              <p>Duration : <span className="text-gray-400" >  {anime.duration} </span> </p>
             
            </div>
        
      
         
    </div>

    </div>


  })




)




           } 



            
    </>

  )
}

export default AnimeDetail
