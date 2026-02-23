"use client";

import React from "react";
import styles from "./customInput.module.scss";
import { CiSearch } from "react-icons/ci";

interface IFormInput {
  placeholder: string;
  labelText?: string;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  className?: string;
  checked?: boolean;
  disabled?: boolean;
  showAsterisk?: boolean;
  note?: string;
  showSearchIcon?: boolean;
}


export const CustomInput = ({ placeholder, labelText, onChange, showSearchIcon, showAsterisk = true, note, ...rest }: IFormInput) => {
  return (
    <div className={styles.InputComp}>
      {labelText && (
        <label className={styles.label}>
          {labelText} {showAsterisk && <span className={styles.asterisks}>*</span>}{<span className={styles.note}>{note}</span>}
        </label>
      )}

      <div className={styles.inputWrapper}>
        {showSearchIcon && (
          <CiSearch className={styles.searchIcon} />
        )}
      <input className={`${styles.input} ${showSearchIcon ? styles.inputWithIcon : ""}`} placeholder={placeholder} onChange={onChange} {...rest} />
    </div>
    </div>
  );
};
