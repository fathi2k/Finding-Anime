

export const animeApi =  async ()=>{
    const res = await fetch('https://api.jikan.moe/v4/anime');
    const resJson = await res.json();
    return resJson
} 