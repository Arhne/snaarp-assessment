//import React from 'react'
import styles from './header.module.scss'
import { BsLightningCharge } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";


interface HeadersProps {        
icon?: React.ReactNode;
title: string;
isUpgradePlan?: boolean;
}

function Header({icon, title, isUpgradePlan = false}: HeadersProps) {
  return (
    <div className={styles.headerWrapper}>
      <div className={`${icon ? styles.rightWrapper : ''}`}>
        {icon && <div className={styles.iconWrapper}>
          {icon}
        </div>}
        <h3>{title} </h3>
      </div>

      <div className={`${isUpgradePlan ? styles.rightWrapper : ''}`}>
        {isUpgradePlan && <button className={styles.upgradePlanWrapper}>
          <BsLightningCharge />
          Upgrade Plan
        </button>}
        <IoIosArrowDown />
      </div>
    </div>
  )
}

export default Header