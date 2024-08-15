import { useSelector } from "react-redux";
import ProductItem from "./ProductItem";
import "./product.css";
import Loader from "../../UI/Loader/Loader";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../../contex";
import ModalWindow from '../../UI/modalWindow/ModalWindow';

function ProductList() {
  const { products, isLoading, error } = useSelector((state) => state.products);
  const {filteredCart} = useContext(CartContext);
  const [isActiveModal, setIsActiveModal] = useState(false);

  useEffect(() => {
    const closeModal = () => {
      setIsActiveModal(false);
    };

    if(isActiveModal){
      const animationDuration = 2000;
      setTimeout(closeModal, animationDuration)
    }
  }, [isActiveModal]);

  const handleOpenModal = () => {
    setIsActiveModal(true);
  };

  if (!filteredCart.length) {
    return <h1 style={{ textAlign: "center" }}>Ничего не нашлось по запросу</h1>;
  }
  
  return (
    <>
      <div className="product_list">

        {isLoading ? (
          <Loader />
        ) : error ? (
          <h2>An error occurred: {error}</h2>
        ) : products ? (
          <article>
            {filteredCart.map((product) => (
              <ProductItem key={product.id} product={product} openModal={handleOpenModal}/>
            ))}
          </article>
        ) : (
          <h2>Продукты не найдены</h2>
        )}

      </div>

      {isActiveModal ? <ModalWindow description='✔ Товар добавлен в корзину'/> : ''}
    </>
  );
}

export default ProductList;
