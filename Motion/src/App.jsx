import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { motion } from 'motion/react'

function App() {
    
   const boxVariants = {
    hidden: { opacity: 0},
    visible: { opacity: 1  , x: 700},
  };


  return (
    <div>
    <motion.div
      variants={boxVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 2, ease: "ease-in-out" }}
      whileHover={{ scale: 1.5 }}
      className="box">
      </motion.div>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ x: 700, opacity: 1 }}
      transition={{ duration: 2, ease: "ease-in-out" }}
      whileHover={{ scale: 1.5 }}
      className="box">
      </motion.div>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ x: 700, opacity: 1 }}
      transition={{ duration: 2, ease: "ease-in-out" }}
      whileHover={{ scale: 1.5 }}
      className="box">
      </motion.div>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ x: 700, opacity: 1 }}
      transition={{ duration: 2, ease: "ease-in-out" }}
      whileHover={{ scale: 1.5 }}
      className="box">
      </motion.div>

    </div>
  )
}

export default App