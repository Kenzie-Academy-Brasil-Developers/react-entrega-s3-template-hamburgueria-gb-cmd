import { MdDelete } from "react-icons/md";
import styles from "./style.module.scss"

export const CartItemCard = ({ product, removeToCard }) => {
   return (
      <li className={styles.cardContainer}>
         
         <div className={styles.cardContent}>
            <div className={styles.imageContainer}>
               <img src={product.img} alt={product.name} /> 
            </div>

            <div className={styles.cardValues}>
               <h3 className="heading3">{product.name}</h3>
               <p className="body--semiBold">{product.price.toLocaleString('pt-BR', { style: "currency", currency: "BRL"})}</p>
            </div>
         </div>

         <button onClick={() => removeToCard(product)} className={styles.deleteCardButton} aria-label="delete" title="Remover item">
            <MdDelete size={21} />
         </button>
      </li>
   );
};
