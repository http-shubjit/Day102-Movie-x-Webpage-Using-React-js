import axios from "axios";

const BASE_URL="https://api.themoviedb.org/3";

const TMDB_TOKEN=import.meta.env.VITE_APP_TMDB_TOKEN;//"eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZDA1NmRlYzczNTYwY2VmMmRkOTFjY2IwNjcwZjdlZSIsInN1YiI6IjY1YzE5OWM2MDkyOWY2MDE4MmU0NGY3NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.u2kuPnpo8EIHaJowToRW-gLWo4Z3nujIlJNpocPJ8YM"

const headers={
  Authorization: "bearer " + TMDB_TOKEN,
};
export const fetchDataFromApi=async(url,params)=>{
 
  try {
    
const {data}=await axios.get(BASE_URL+url,{
  headers,
  params
})
return data

  } catch (error) {
    console.log(error)
    return error;
  }
}