import React from 'react'
import { motion } from "framer-motion";

function ScheduleAnimation() {
  return (
    <div style={{height:300}}>
      <motion.div className="overflow-hidden bg-gray-800"
      initial= {{
          height: 0
          }}
        animate= {{
          height: 258
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
            <div className="h-16 absolute" style={{marginLeft:1400}}><img src='/svg/tab1.svg' alt="schedule tab" width="222" style={{marginTop:1}} /></div>
            <div className="h-16 ml-64 absolute" style={{marginLeft:250}}><img src='/svg/tab3.svg' alt="schedule tab" width="254" style={{marginTop:1}}/></div>
            <div className="h-16 ml-64 absolute" style={{marginLeft:2200}}><img src='/svg/tab2.svg' alt="schedule tab" width="288" style={{marginTop:1}} /></div>
          </div>
          <div className="relative h-16 border-b border-indigo-700" style={{width:2800}}>
            <div className="h-16 ml-96 absolute" style={{marginLeft:1100}}><img src='/svg/tab4.svg' alt="schedule tab" width="304" style={{marginTop:1}} /></div>
            <div className="h-16 ml-64 absolute" style={{marginLeft:600}}><img src='/svg/tab2.svg' alt="schedule tab" width="288" style={{marginTop:1}} /></div>
            <div className="h-16 ml-64 absolute" style={{marginLeft:1500}}><img src='/svg/tab1.svg' alt="schedule tab" width="222" style={{marginTop:1}} /></div>
          </div>
          <div className="relative h-16 border-b border-indigo-700" style={{width:2800}}>
            <div className="h-16 ml-64 absolute" style={{marginLeft:1000}}><img src='/svg/tab3.svg' alt="schedule tab" width="254" style={{marginTop:1}} /></div>
            <div className="h-16 ml-64 absolute" style={{marginLeft:1800}}><img src='/svg/tab4.svg' alt="schedule tab" width="304" style={{marginTop:1}} /></div>
            <div className="h-16 ml-64 absolute" style={{marginLeft:400}}><img src='/svg/tab4.svg' alt="schedule tab" width="304" style={{marginTop:1}} /></div>
          </div>
          <div className="relative h-16 border-b border-indigo-700" style={{width:2800}}>
            <div className="h-16 absolute" style={{marginLeft:800}}><img src='/svg/tab1.svg' alt="schedule tab" width="222" style={{marginTop:1}} /></div>
            <div className="h-16 ml-64 absolute" style={{marginLeft:150}}><img src='/svg/tab3.svg' alt="schedule tab" width="254" style={{marginTop:1}}/></div>
            <div className="h-16 ml-64 absolute" style={{marginLeft:2300}}><img src='/svg/tab2.svg' alt="schedule tab" width="288" style={{marginTop:1}} /></div>
            <div className="h-16 absolute" style={{marginLeft:1700}}><img src='/svg/tab1.svg' alt="schedule tab" width="222" style={{marginTop:1}} /></div>
          </div>
        </motion.div>
      </motion.div>
      </div>
  )
}

export default ScheduleAnimation
