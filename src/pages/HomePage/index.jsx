import { useEffect, useState } from "react";
import { CartModal } from "../../components/CartModal";
import { Header } from "../../components/Header";
import { ProductList } from "../../components/ProductList";
import { api } from "../../services/api.js"
import { toast } from "react-toastify";

export const HomePage = () => {
   const storedCartList = localStorage.getItem("@CARTLIST")

   const [productList, setProductList] = useState([]);
   const [cartList, setCartList] = useState(storedCartList ? JSON.parse(storedCartList) : [] );
   const [isOpen, setIsOpen] = useState(false);

   useEffect(() => {
      const createProductList = async () => {
         const { data } = await api.get("/products")

         setProductList(data);
      }
      createProductList();
   }, []);

  const addToCart = (product) => {

      if(!cartList.some(cartListProduct => cartListProduct.id === product.id)) {
         setCartList([...cartList, product]) 

      } else {
         //trocar por um toast
         // alert("Produto já adicionado ao carrinho.")
         toast.error("Produto já adicionado ao carrinho.")
      }
   }

   const removeToCard = (product) => {
      const filteredList = cartList.filter(cartProduct => {
         if(cartProduct.id !== product.id) {
            return cartProduct
         }
      })

      setCartList(filteredList)
   }
   
   useEffect(() => {
      if(cartList) {
         localStorage.setItem("@CARTLIST", JSON.stringify(cartList))
      }

   },[cartList])

   return (
      <>
         <Header setIsOpen={setIsOpen} cartList={cartList} />
         <main>
            <ProductList productList={productList} addToCart={addToCart} />

            {isOpen ? <CartModal setIsOpen={setIsOpen} cartList={cartList} removeToCard={removeToCard} setCartList={setCartList} /> : null}
         </main>
      </>
   );
};
