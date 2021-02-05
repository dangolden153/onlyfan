import React from 'react'

const Netflix_Items =({movie,isLargeRow,base_url})=>{

    const {poster_path,backdrop_path,title}= movie


    return (
        <div className="itemsCOntainer">
            
            <div className="netflixText">{title}</div>
        </div>
    )
}

export default Netflix_Items