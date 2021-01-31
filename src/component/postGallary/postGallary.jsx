import React,{useState} from 'react'
import postGallaryData from './postGallaryData'
import love from '../assets/love.svg'
import loveBlue from '../assets/heart-blue.svg'
import bookmark from '../assets/bookmark.svg'
import bookmarkBlue from '../assets/bookmark-blue.svg'
import speech from '../assets/speech-bubble.svg'
import speechBlue from '../assets/speech-bubble-blue.svg'
import svg from '../assets/speech-bubble-blue.svg'

import Comment from '../commentContainer/commentContainer'
import './postGallary.css'

const PostGallary =()=>{
    
    // let like = 106
    return(
    <div>
        <h3 className="picsText">
            13 POSTS
        </h3>

        {postGallaryData.map(post=>(
            <Post post={post} key={post.id} />
        ))}
    </div>)
}

const Post =({post})=>{
    const [state, setState] = useState(true)
    const [bookmarkState, setBookmarkState] = useState(true)


    const stateHandler=()=>setState(!state)
    const stateBookMarkHandler=()=>setBookmarkState(!bookmarkState)

    const {imgData,name,username,caption,postImg,comment, like} = post

    const incrementLike = like + 1
    

    return (
        <div className="postGallary">
            <div className="postContainer">
            
        <div className="pics_text">

            <div className="DpImg"
            style={{
                backgroundImage:`url(${imgData})`
            }}
            />

            <div className="nameUsername">
                <div className="postName">{name}</div>
                <p className="postUsername">{username}</p>
            </div>

        </div>
        <p className="postCaption">{caption} </p>
            </div>

            <div className="postImg"
            style={{
                backgroundImage:`url(${postImg})`
            }} 
           />
           
        <div className="comment">
            <div className="commentBox">
            <div className="svg_Container">
            <div className="left_svg_Container">

            <div className="commentSvg"
            onClick={ stateHandler}
            style={{
                backgroundImage: `url(${state ? love : loveBlue})`
            }}
            />

            <div className="commentSvg"
            style={{
                backgroundImage: `url(${speech})`
            }}
            />
            </div>
            <div className="right_svg_Container">

            <div className="commentSvg"
            onClick={stateBookMarkHandler}
            style={{
                backgroundImage: `url(${bookmarkState ? bookmark : bookmarkBlue})`
            }}
            />
            </div>
            </div>
            <div className="comment_text">
                <p className="postCaption">{state ? like : incrementLike } likes</p>
                <p className="postCaption">{comment} comments</p>
            </div>
            </div>
        </div>
    
       {/* <Comment/> */}

        <div className="line"/>

        </div>
    )
}

export default PostGallary