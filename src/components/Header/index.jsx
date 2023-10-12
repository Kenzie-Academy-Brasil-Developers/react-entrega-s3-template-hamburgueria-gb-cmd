import { useState } from "react";
import Logo from "../../assets/Logo.svg";
import { MdSearch, MdShoppingCart } from "react-icons/md";
import styles from "./style.module.scss"

export const Header = ({ setIsOpen, cartList }) => {
   const [value, setValue] = useState("");

   return (
      <header className={styles.headerContainer}>
         <img src={Logo} alt="Logo Kenzie Burguer" />
         <div>
            <button onClick={() => setIsOpen(true)}>
               <MdShoppingCart className={styles.cartIcon} size={21} />
               <span>{cartList.length}</span>
            </button>
            {/* <form>
               <input
                  type="text"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
               />
               <button type="submit">
                 <MdSearch size={21} />
               </button>
            </form> */}
         </div>
      </header>
   );
};
