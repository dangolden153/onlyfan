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
            <motion.div style={{y: header,  opacity:opacity}}
            
             className="scrollhead">
              
             </motion.div>

            <motion.h1  className="scrollSub"
            style={{ y: yValue}}
            
            >
                hey
            </motion.h1>
        </motion.div>
   )
}

export default Scroll