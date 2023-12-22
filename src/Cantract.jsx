import React, { useState } from 'react';
import styles from "./Cantract.module.css";
import { MdOutlineContentCopy } from "react-icons/md";
import { GoCheckCircleFill } from "react-icons/go";
import imageName from "./assets/name.png";
import imageTotal from "./assets/total.png";
import imageDistri from "./assets/distribution.png";
import imageHeader from "./assets/header-logo.png";





function Cantract() {
   const  [isCopy , setIscopy] = useState(false);
   const Ca = "0x88da9901b3a02fe24e498e1ed683d2310383e295";
     
       const copyHandler = ()=> {
        navigator.clipboard.writeText(Ca);
        setIscopy(isCopy => !isCopy)

        setTimeout(()=> {
          setIscopy(isCopy => !isCopy)
        } , 1500)

       }

  return (
    <div>
        <div className={styles.Ca}>
        <h2 className={styles.Ca_h2}>Tokenomics 💸 Token Details</h2>
        <div className={styles.link_ca}>
        <a href="https://bscscan.com/token/0x88da9901b3a02fe24e498e1ed683d2310383e295" target="_blank">CA: 0x88da9...83e295</a>
       
        {isCopy ? <GoCheckCircleFill className={styles.checkBox} /> : <MdOutlineContentCopy onClick={copyHandler} className={styles.copy_ca} /> }
        </div>
        <div className={styles.des_tokens}>
          <div className={styles.des_token}>
            <div><img src={imageName} alt="" />
            <h2>Name</h2>
            <div>Baby Grok</div>
            </div>
          </div>
          <div>
            <div className={styles.des_token}>
            <img src={imageHeader} alt="" />
            <h2>Symbol</h2>
            <div>BabyGrok</div>
            </div>
          </div>
          <div>
            <div className={styles.des_token}>
            <img src={imageTotal} alt="" />
            <h2>Total Supply</h2>
            <div>420,000,000,000,000,000 BGK</div>
            </div>
          </div>
          <div >
            <div className={styles.des_token}>
            <img src={imageDistri} alt="" />
            <h2>Tax</h2>
            <div>5% / 5%</div>
            <br />
            <div>
            1% - LP 
            <br />
            2% - Marketing 
            <br />
            2% - Dev
            </div>
            </div>
          </div>
        </div>
        </div>
    </div>
  )
}

export default Cantract