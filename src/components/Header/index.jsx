import { useState } from "react";
import Logo from "../../assets/Logo.svg";
import { MdSearch, MdShoppingCart } from "react-icons/md";
import styles from "./style.module.scss";

export const Header = ({ setIsOpen, cartList }) => {

   return (
      <header className={styles.headerContainer}>

         <div className={styles.headerContent}>
            <img src={Logo} alt="Logo Kenzie Burguer" />
            <div className={styles.cartContent}>
               <button onClick={() => setIsOpen(true)}>
                  <MdShoppingCart className={styles.cartIcon} size={21} />
                  <span>{cartList.length}</span>
               </button>
            </div>
         </div>
         
      </header>
   );
};
