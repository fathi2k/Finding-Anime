import React from 'react'
import { useState,useEffect } from 'react'
import { animeApi } from '../../api/animeApi'
import AnimeCard from '../organism/AnimeCard'
import Header from '../organism/Header'


const Wishlist = () => {

// const [animeData,setAnimeData] = useState([])
  const [wishData,setWishData] = useState([]);
  const [inputSearch ,setInputSearch] = useState('')


useEffect(()=>{
      const dataLocalStorage = JSON.parse(localStorage.getItem('wishData') || '[]')

      setWishData(dataLocalStorage)

},[])

//   useEffect(()=>{


//     const apiAnime = async ()=>{
//   const data = await animeApi();
  
//   // const filterAnime = data.data.find((para)=>(
//       setAnimeData(data.data)
//   // ))

   
// }
//    apiAnime()
//   },[])




    




  // const handleAddToWish = (idAnime)=>{
  //       // cari sama dulu//

  //       const selectedAnime = animeData.find((anime)=>(
  //           anime.mal_id === idAnime
  //       ))


  //       //buat if statement//

  //         if (selectedAnime){
  //             setWishData([selectedAnime])
  //             localStorage.setItem('wishData', JSON.stringify([...wishData,selectedAnime]))
  //         }
  // }


  //filter search///


  
const filterAnime = wishData.filter((nama)=>nama.title.toLowerCase().includes(inputSearch.toLowerCase()) )

  return (
  


    <div className=''>




<Header searchQuery={inputSearch} setSearchQuery={setInputSearch} />

    <div className='flex justify-center gap-4  mt-[10%] p-2 m-2 grid grid-cols-5 gap-5 mt-[2%] bg-gray-400'>
           

           {filterAnime.length > 0 ? (

 filterAnime.map((para)=>(
              <AnimeCard key={para.mal_id}   idAnime={para.mal_id} src={para.images.jpg.image_url} idName={para.mal_id} />
            ))

           ) : (

              <div className='text-[30px]'>
                <h1>tajuk untuk "{inputSearch}" tak dijumpai </h1>
              </div>


           )}

           
           
    </div>
      
    </div>


  )
}

export default Wishlist
