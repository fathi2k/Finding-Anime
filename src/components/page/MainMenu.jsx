import Header from "../header"
import { animeApi } from "../../api/animeApi"
import { useEffect,useState } from "react"
import AnimeCard from "../AnimeCard";

function MainPage() {

  const [animeData,setAnimeData] = useState([]);

  const dataAnime = async ()=>{
    const data = await animeApi();
    setAnimeData(data.data)
  
  }




  useEffect(()=>{
        dataAnime()  //boleh ignore kalau project kecik
  },[])




 
  return (

    <>

    <Header/>


    {/* bahagian anime */}
    
   
  <div className=" p-2 flex m-2 grid grid-cols-5 gap-5 mt-[2%] bg-gray-400">
    { animeData.map((para)=>{

return <AnimeCard src={para.images.jpg.image_url} idName={para.mal_id}  />
    


      })

        

    }

    </div>
     

    
    
    </>
     


  )
}

export default MainPage
