import React,{useEffect,useState} from 'react'
import axios from './axios'
import Netflix_Items from './netflixItems'
import './row.css'

const Row =({fetchUrl,isLargeRow,title})=>{

const [movie, setMovie] = useState([])
    
useEffect(()=>{
    async function fetchData(){
        const request = await axios.get(fetchUrl)
        console.log(request)
        setMovie(request.data.results)
        return request
    }

    fetchData();
},[])

const base_url = 'https://image.tmdb.org/t/p/original/'


    return (
        <div className="netflixRow_container">
        <h3 className="netflixHeader">{title}</h3>
        <div className='netflix_rows'>
{
    movie.map(movie => (
            <img 
            key={movie.id}
            movie={movie}
            className={`netflix_image ${isLargeRow && 'netflix_image_large'}`}
            src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
            alt={movie.title}/>
            
                 ))
}
        </div>
        </div>
    )
}
export default Row