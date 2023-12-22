import React from 'react'
import styles from "./About.module.css"
function About() {
  return (
    <div>
        <div className={styles.Conatinar}>
              <h2 className={styles.about_name}>About</h2>
              <div className={styles.about_dess}>
                <div className={styles.about_des}>
                <h2>👶 Meet Baby Grok</h2>
                     <div className={styles.about_text}>
                     Baby Grok isn't just a coin; it's a movement. Born from the visionary mind of Elon Musk, Baby Grok combines the power of DeFi with the brilliance of AI.
                     </div>
                </div>
                <div  className={styles.about_des}>
                <h2>🌌 Inspired by Elon</h2>
                  <div  className={styles.about_text}>
                  Baby Grok is not just another project; it's a groundbreaking innovation inspired by the genius of Elon Musk and powered by the latest AI technology.
                  </div>
          
                </div>
                <div className={styles.about_des} >
                <h2>🌐 Community-Driven</h2>
                <div className={styles.about_text}>
                At Baby Grok, we believe in the strength of community. Join us as we create a decentralized ecosystem that empowers every holder. Your journey with Baby Grok is as important as the destination.
                </div>

                </div>
              </div>
        </div>
    </div>
  )
}

export default About