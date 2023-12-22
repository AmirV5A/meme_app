import React, { useState } from 'react'
import styles from "./Header.module.css"
import { GoSun } from "react-icons/go";
import { FaMoon } from "react-icons/fa";
import imageLogo from "../assets/header-logo.png"

function Header() {
  const [isDarkmode , isSetdarkmode] = useState(false)
   
  const darkmodeHandler = () => {
    isSetdarkmode(isDarkmode => !isDarkmode)
  }



  return (
    <div className={styles.Header}>
      <img src={imageLogo} alt="" />
        <div className={styles.btn_dark} onClick={darkmodeHandler}>
        {isDarkmode == false ?<GoSun className={styles.sun}/> :
         <FaMoon className={styles.moon}/>
      }
        </div>
      </div>
  )
}

export default Header