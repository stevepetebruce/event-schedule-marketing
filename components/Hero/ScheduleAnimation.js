import React from 'react'
import { motion } from "framer-motion";

function ScheduleAnimation() {
  return (
    <div style={{height:200}}>
      <motion.div className="overflow-x-auto bg-gray-800"
      initial= {{
          height: 0
          }}
        animate= {{
          height: 194
        }}
        transition={{
          delay: 1,
          duration: 0.5,
          type: 'easeout'
        }}>
        <motion.div
        initial= {{
          x: 0
          }}
        animate= {{
          x: -1200
        }}
        transition={{
          delay: 2,
          duration: 38,
          type: 'tween',
          yoyo: Infinity
        }}> 
        
          <div className="relative h-16 border-b border-indigo-700" style={{width:2800}}>
            <div className="h-16 w-32 bg-gray-200 absolute" style={{marginLeft:800}}>block</div>
            <div className="h-16 w-32 bg-gray-200 ml-64 absolute" style={{marginLeft:200}}>block</div>
            <div className="h-16 w-32 bg-gray-200 ml-64 absolute" style={{marginLeft:2200}}>block</div>
          </div>
          <div className="relative h-16 border-b border-indigo-700" style={{width:2800}}>
            <div className="h-16 w-32 bg-gray-200 ml-96 absolute" style={{marginLeft:1100}}>block</div>
            <div className="h-16 w-32 bg-gray-200 ml-64 absolute" style={{marginLeft:600}}>block</div>
            <div className="h-16 w-32 bg-gray-200 ml-64 absolute" style={{marginLeft:1500}}>block</div>
          </div>
          <div className="relative h-16 border-b border-indigo-700" style={{width:2800}}>
            <div className="h-16 w-32 bg-gray-200 ml-64 absolute" style={{marginLeft:1000}}>fgdfgd</div>
            <div className="h-16 w-32 bg-gray-200 ml-64 absolute" style={{marginLeft:1800}}>fgdfgd</div>
            <div className="h-16 w-32 bg-gray-200 ml-64 absolute" style={{marginLeft:400}}>fgdfgd</div>
          </div>
        </motion.div>
      </motion.div>
      </div>
  )
}

export default ScheduleAnimation
