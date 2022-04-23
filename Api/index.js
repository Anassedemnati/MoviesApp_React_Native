const API_TOKEN = '';



export const getMoviesFromApi = async (title,page)=>{
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_TOKEN}&language=fr&query=${title}&page=${page}`;
   const res  =  await fetch(url);
   const data = res.json();
   
   return data;
}
export const getImageFromApi=(name)=>{
    return `https://image.tmdb.org/t/p/w300${name}`
}
