//import React from 'react'
import { CustomInput } from '../customInput'
import styles from './navbar.module.scss'
import { GoBell } from "react-icons/go";
import { IoCopyOutline } from "react-icons/io5";

function Navbar() {
  return (
    <div className={styles.navbarWrapper}>
      <CustomInput
        showSearchIcon
        placeholder="Search for users, groups or settings"
        value={''}
        onChange={() => { }}
      />
      <div className={styles.rightWrapper}>
        <div className={styles.notificationWrapper}>
          <GoBell size={20} />
        </div>
        <div className={styles.agentCodeWrapper}>
          <p>Agent Code: </p><p className={styles.agentCode}>0567735jj377yb343b58</p>
          <IoCopyOutline size={25}/>
        </div>
      </div>
    </div>
  )
}

export default Navbar