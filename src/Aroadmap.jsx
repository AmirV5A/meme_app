import React from 'react'
 import imageRoadmap from "./assets/roadmap-mob.png"
 import styles from "./Aroadmap.module.css";
function Aroadmap() {
  return (
    <div>
         <div className={styles.roadmap}>
        <h2>Roadmap 🛣 Our Journey Ahead:</h2>
           <img src={imageRoadmap} alt="" />
        </div>
    </div>
  )
}

export default Aroadmap