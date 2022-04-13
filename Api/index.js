const url = "http://www.omdbapi.com/?i=tt3896198&apikey=5d1a7305"

export const getMoviesFromApi = async (title)=>{
   const res  =  await fetch(`${url}&s=${title}`);
   const data = res.json();
   return data;
}