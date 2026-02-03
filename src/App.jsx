import Header from "./components/header"
import { animeApi } from "./api/animeApi";
import { useState } from "react";


function App() {


const [inputSearch,setInputSearch] = useState('')
const [dataResultSearch,setDataResultSearch] = useState([]);

  const handleApi = async ()=>{
    const data = await animeApi();

    const sameTitle = data.data.filter((para)=>{
      return  Number(inputSearch) === para.mal_id;
    })


    if (sameTitle){
       setDataResultSearch(sameTitle)
        
       
    }

    console.log(data.data)


  // console.log(data.data[2].title);
  
      // console.log(sameTitle);
      
      // console.log(dataResultSearch)
   

  }

// const handleClick = (e)=>{
// e.preventDefault() 



// }

 
  return (

    <>
    
     <Header onChange={(e)=> setInputSearch(e.target.value)} value={inputSearch} onClick={handleApi}/>


{dataResultSearch  && (

  dataResultSearch.map((anime)=>{


    return  <div className="flex flex-col justify-center items-center" key={anime.id}>
          <h1 className="text-[60px]">{anime.title}</h1>
          <div>
            <img src={anime.images.jpg.large_image_url} alt="" />
            <div>
              <p>Release Year : {anime.year}</p>
              <p>Rating: {anime.rating}</p>
              <p>Rank :{anime.rank}</p>
              <p>Score : {anime.score}</p>
             
            </div>
          </div>
    </div>


  })


)}



    
    
    </>
     


  )
}

export default App
