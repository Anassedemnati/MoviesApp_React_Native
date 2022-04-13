const API_TOKEN = '8ed027e1fbaca998228ba40a13ae73fc';

//const url = "http://www.omdbapi.com/?i=tt3896198&apikey=5d1a7305"

export const getMoviesFromApi = async (title,page)=>{
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_TOKEN}&language=fr&query=${title}&page=${page}`;
   const res  =  await fetch(url);
   const data = res.json();
   
   return data;
}
export const getImageFromApi=(name)=>{
    return `https://image.tmdb.org/t/p/w300${name}`
}