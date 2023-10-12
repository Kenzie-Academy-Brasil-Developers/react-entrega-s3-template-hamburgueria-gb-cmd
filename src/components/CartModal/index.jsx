import { MdClose } from "react-icons/md";
import { CartItemCard } from "./CartItemCard";
import styles from "./style.module.scss"

export const CartModal = ({ setIsOpen, cartList, removeToCard, setCartList }) => {
   const total = cartList.reduce((prevValue, product) => {
      return prevValue + product.price;
   }, 0);

   return (
      <div className={styles.modal} role="dialog">
         <div className={styles.modalContainer}>
            <div className={styles.modalHeader}>
               <h2 className="heading3">Carrinho de compras</h2>
               <button onClick={() => setIsOpen(false)} aria-label="close" title="Fechar">
                  <MdClose size={21} />
               </button>
            </div>
            <div className={styles.modalMain}>
               <ul>
                  {cartList.map((product) => (
                     <CartItemCard key={product.id} product={product} removeToCard={removeToCard} />
                  ))}
               </ul>
            </div>

            <hr />

            <div className={styles.footerContainer}>
               <div className={styles.footerContent}>
                  <span className={`body--semiBold ${styles.totalCost}`}>Total</span>
                  <span className={`body--semiBold ${styles.totalValue}`}>{total.toLocaleString('pt-BR', { style: "currency", currency: "BRL"})}</span>
               </div>
               <button onClick={() => setCartList([])}>Remover todos</button>
            </div>
         </div>
         
      </div>
   );
};
