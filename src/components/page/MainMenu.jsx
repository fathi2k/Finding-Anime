import Header from "../organism/Header"
import { animeApi } from "../../api/animeApi"
import { useEffect,useState } from "react"
import AnimeCard from "../organism/AnimeCard";

function MainPage() {

  const [animeData,setAnimeData] = useState([]);
  const [searchInput,setSearchInput] = useState('');
  const [animeWishList,setAnimeWishList] = useState([]);





  useEffect(()=>{

  const dataAnime = async ()=>{
    const data = await animeApi();
    setAnimeData(data.data)
    console.log(data.data);
  }




        dataAnime()  //boleh ignore kalau project kecik
        
  },[])



  //filter search anime///


const filterAnime = animeData.filter((nama)=>nama.title.toLowerCase().includes(searchInput.toLowerCase()) )


const handleFilter = ()=>{
      console.log('searching tajuk..',{searchInput})
}


// --------------------ADD TO WISHLIST--------------//

const handleAddToWish = (idName)=>{
  const selectedAnime = animeData.find((cari)=>(
        cari.mal_id === idName
  ))


  //if statment//

    if (selectedAnime) {
      // Get existing wishlist from localStorage
      const existingWishlist = JSON.parse(localStorage.getItem('wishData') || '[]')
      
      // Check if already exists kena guna some sebab return booleon
      const alreadyExists = existingWishlist.some((item) => item.mal_id === idName)
      
      if (!alreadyExists) {
        // ✅ ADD to wishlist (not replace!)
        const updatedWishlist = [...existingWishlist, selectedAnime]
        localStorage.setItem('wishData', JSON.stringify(updatedWishlist))
       
      } else {
        alert(`${selectedAnime.title} is already in your wishlist! 📝`)
      }
    }


}


//remove from wishlist//


const removeWishList = ()=>{
      
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
              addToWishlist={handleAddToWish}
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
