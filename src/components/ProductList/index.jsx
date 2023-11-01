import { ProductCard } from "./ProductCard";
import styles from "./style.module.scss";

export const ProductList = ({ productList, addToCart }) => {
   return (

      <div className={styles.productContainer}>
         <ul className={styles.productList}>
            {productList.map((product) => (
               <ProductCard key={product.id} product={product} addToCart={addToCart} />
            ))}
         </ul>
      </div>
   );
};
