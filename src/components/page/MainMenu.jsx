import Header from "../header"
import { animeApi } from "../../api/animeApi"
import { useEffect,useState } from "react"
import AnimeCard from "../AnimeCard";

function MainPage() {

  const [animeData,setAnimeData] = useState([]);
  const [searchInput,setSearchInput] = useState('')

  const dataAnime = async ()=>{
    const data = await animeApi();
    setAnimeData(data.data)
    console.log(data.data);
  }




  useEffect(()=>{
        dataAnime()  //boleh ignore kalau project kecik
        
  },[])



  //filter search anime///


const filterAnime = animeData.filter((nama)=>nama.title.toLowerCase().includes(searchInput.toLowerCase()) )


const handleFilter = ()=>{
      console.log('searching tajuk..',{searchInput})
}







 
  return (

    <>

      <Header onClick={handleFilter}  searchQuery={searchInput} setSearchQuery={setSearchInput}/>


    {/* bahagian anime */}
    
   
  {/* <div  className=" p-2 flex m-2 grid grid-cols-5 gap-5 mt-[2%] bg-gray-400">

    { animeData.map((para)=>{

return <AnimeCard key={para.mal_id} src={para.images.jpg.image_url} idName={para.mal_id}  />
    


      })

        

    }

    </div>
      */}


        {/* Display filtered anime */}
      <div className="p-2 m-2 grid grid-cols-5 gap-5 mt-[2%] bg-gray-400">
        {filterAnime.length > 0 ? (
          filterAnime.map((para) => (
            <AnimeCard 
              key={para.mal_id}  // ✅ Always add key in map!
              src={para.images.jpg.image_url} 
              idName={para.mal_id}  
            />
          ))
        ) : (
          <div className="col-span-5 text-center text-white text-xl py-10">
            No anime found for "{searchInput}" 😢
          </div>
        )}
      </div>

    
    
    </>
     


  )
}

export default MainPage
