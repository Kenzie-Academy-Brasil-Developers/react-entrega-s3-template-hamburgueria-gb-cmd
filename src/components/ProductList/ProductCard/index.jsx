import styles from "./style.module.scss"

export const ProductCard = ({ product, addToCart }) => {

    return(
        <li tabIndex={1} className={styles.cardContainer}>
            <img src={product.img} alt={product.name} />
            <div className={styles.cardContent}>
                <h3 className="heading3">{product.name}</h3>
                <span className={`caption ${styles.cardCategory}`}>{product.category}</span>
                <span className={`body--semiBold ${styles.cardPrice}`}>{product.price.toLocaleString('pt-BR', { style: "currency", currency: "BRL"})}</span>
                <button onClick={() => addToCart(product)} className="body--semiBold">Adicionar</button>
            </div>
        </li>
    )
}