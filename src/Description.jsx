import React from 'react'
import styles from "./Description.module.css"

function Description() {
  return (
    <div>
        <div className={styles.Conatinar}>
            <div className={styles.Conatinar_1}>
                <div className={styles.des_s}>
                    <div className={styles.des_ss} ><h2>🌐 Revolutionizing DeFi</h2>
                    <div>Baby Grok is not just another project; it's a groundbreaking innovation inspired by the genius of Elon Musk and powered by the latest AI technology.
                        </div></div>
                </div>
                <div className={styles.des_s}>
                    <div className={styles.des_ss} ><h2>🤖 AI Superiority</h2>
                    <div>In a world where AI reigns supreme, Baby Grok stands out. Elon Musk's latest AI creation might be making waves, but Baby Grok is here to redefine the game. Join us on this journey to the future!
                        </div></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Description