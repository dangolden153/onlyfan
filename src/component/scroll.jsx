import React from 'react'
import {motion, motionValue, useMotionValue, useTransform, useViewportScroll} from 'framer-motion'


const Scroll =()=>{
    const {scrollYProgress} = useViewportScroll()
    const scale = useTransform(scrollYProgress, [0,1],[3,1])
    const opacity = useTransform(scrollYProgress, [0,1],[1,0])
    const xValue = useTransform(scrollYProgress, [0, 1],[0,-100])
    const yValue = useTransform(scrollYProgress, [0, 1],[100,200])
    const header = useTransform(scrollYProgress, [0,-44, -45],[0,0,1], 
        {clamp:false})

    

    return (
        <motion.div className="scroll" 
          
        >
            <div className="scrollheadCont">
            <motion.div style={{  opacity:opacity}}
             className="scrollhead">
             </motion.div>
             </div>

            <div className="scrollSubCont">
            <motion.h1  className="scrollSub"
            style={{ scale: scale}}>
                hey
            </motion.h1>
            </div>

        </motion.div>
   )
}

export default Scroll