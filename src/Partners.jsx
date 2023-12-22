import React from 'react'
import image_11 from "./assets/11.png";
 import image_12 from "./assets/12.png";
 import image_13 from "./assets/13.png";
 import image_14 from "./assets/14.png";
 import image_15 from "./assets/15.png";
 import image_16 from "./assets/16.png";

 import styles from "./Partners.module.css"
function Partners() {
  return (
    <div>
        <div className={styles.partners_all}>
            <h2>Partners</h2>
            <div className={styles.partners}>
            <a href="#" target="_blank">
                <img src={image_11} alt="" /></a>
            <a href="https://www.dextools.io/app/en/bnb/pair-explorer/0xda574013e8e67e822d0547d9cd9e8e1075827e3a" target='_block'>
                <img src={image_12} alt="" /></a>
            <a href="https://www.dexview.com/bsc/0x88DA9901B3A02fE24E498e1eD683D2310383E295" target="_blank">
                <img src={image_13} alt="" /></a>
            <a href="https://www.pinksale.finance/launchpad/0xD788a7ad7A6db3688814A7B5103dfE6D4Feb91eC?chain=BSC" target='_block'>
                <img src={image_14} alt="" /></a>
            <a href="https://flooz.xyz/" target="_blank">
                <img src={image_15} alt="" /></a>
            <a href="" target='_block'>
                <img src={image_16} alt="" /></a>
           
            </div>
        </div>
    </div>
  )
}

export default Partners