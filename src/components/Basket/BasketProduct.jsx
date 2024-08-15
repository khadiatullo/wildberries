import "./basketProduct.css";
import BasketFormSection from "./basketFormSection/BasketFormSection";
import BasketFormSidebar from "./basketFormSidebar/BasketFormSidebar";
import BasketNotProducts from "./basketNotProducts/BasketNotProducts";
import { useContext } from "react";
import { CartContext } from "../../contex";

function BasketProduct() {
  const { carts, setCarts, deleteCart } = useContext(CartContext);


  return (
    <div className="basket">
      {carts.length == 0 ? (
        <BasketNotProducts />
      ) : (
        <form className="basket-page_basket-form">
          <div className="basket_form_content">
            <BasketFormSection deleteCart={deleteCart} carts={carts} />
          </div>

          <BasketFormSidebar carts={carts} />
        </form>
      )}
    </div>
  );
}

export default BasketProduct;
