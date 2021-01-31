import React, {useState} from 'react'
import './commentContainer.css'

const Comment =()=>{
const [state, setState] = useState(true)

    // const stateHandler=()=>setState(!state)

    let like = 106

    // return(
    //     <div className="comment">
    //         <div className="commentBox">
    //         <div className="svg_Container">
    //         <div className="left_svg_Container">

    //         <div className="commentSvg"
    //         onClick={ stateHandler}
    //         style={{
    //             backgroundImage: `url(${svg})`
    //         }}
    //         />

    //         <div className="commentSvg"
    //         style={{
    //             backgroundImage: `url(${svg})`
    //         }}
    //         />
    //         </div>
    //         <div className="right_svg_Container">

    //         <div className="commentSvg"
    //         style={{
    //             backgroundImage: `url(${svg})`
    //         }}
    //         />
    //         </div>
    //         </div>
    //         <div className="comment_text">
    //             <p className="postCaption">{state ? like ++ : like - 1} likes</p>
    //             <p className="postCaption">100 comments</p>
    //         </div>
    //         </div>
    //     </div>
    // )
}

export default Comment