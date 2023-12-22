import React from 'react'
 import styles from "./Home.module.css"
 import { BsTelegram } from "react-icons/bs";
 import { BsTwitterX } from "react-icons/bs";
 import { SiYoutube } from "react-icons/si";
 import { IoLogoTiktok } from "react-icons/io5";
 import imageHome from "./assets/hero_bg.png"


function Home() {
  return (
      <div className={styles.Conatinar}>
         <div className={styles.homeText}>
          <h1>
          Welcome to Baby Grok  <br />
          The Future of DeFi!
          </h1>
          <div className={styles.home_des}>
          🚀 Ride the Crypto Wave with Baby Grok, the next big thing in the decentralized finance (DeFi) space!
          </div>
          <div className={styles.btn_buy}>
            <a href="https://flooz.xyz/swap?refId=HtwiZx&tokenAddress=0x88da9901b3a02fe24e498e1ed683d2310383e295&network=bsc" target="_blank" rel="noopener noreferrer">
              BUY BABYGROK
            </a>
          </div>

          <div className={styles.socialAll}>
            <a href="https://t.me/babygrok" target='_blank'>
              <BsTelegram className={styles.tel} /></a>
            <a href="https://twitter.com/babygrok_bsc"target='_blank' ><BsTwitterX className={styles.x} /></a>
            <a href="https://www.youtube.com/@BabyGrokOfficial" target='_blank'>
              <SiYoutube className={styles.youtube} /></a>
            <a href="https://www.tiktok.com/@babygrokofficial" target='_blank'>
              <IoLogoTiktok className={styles.tiktok} /></a>
          </div>


         </div>
          
          <div className={styles.imageHome}>
            <img src={imageHome} alt="" />
          </div>

        </div>
  );
}

export default Home