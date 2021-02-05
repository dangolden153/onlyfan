import React,{useState,useEffect} from 'react'
import request from './request'
import './netflix.css'
import Row from './row'


const NetflixApp =()=>{

    

    return(
        <div className="netflixContainer">
            <Row title="Trending Now" fetchUrl={request.fetchTrending} isLargeRow />
            <Row title="Netflix Originals" fetchUrl={request.fetchNetflixOriginals} />
            <Row title="Top Rated" fetchUrl={request.fetchTopRated} />
            <Row title="Action Movies" fetchUrl={request.fetchActionMovies} />
            <Row title="Comedy movies" fetchUrl={request.fetchComedyMovies} />
            <Row title="Horror Movies" fetchUrl={request.fetchHorrorMovies} />
            <Row title="Romance Movies" fetchUrl={request.fetchRomanceMovies} />
            <Row title="Documentries" fetchUrl={request.fetchDocumentries} />
            
        </div>
    )
}

export default NetflixApp 