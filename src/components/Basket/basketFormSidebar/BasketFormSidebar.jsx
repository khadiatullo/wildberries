import Button from "../../UI/button/Button";
import "./basketFormSidebar.css";

function BasketFormSidebar({carts}) {

  let finalPrice = 0;

  carts.map(cart => {
    finalPrice += Math.floor(cart.price)  
  })

  return (
    <div className="basket_form_sidebar">

      <div className="sidebar_sticky">

        <div className="sidebar_content">
          <p className="delivery_address"><a className="delivery_address_s" href="#">Выбрать адрес доставки</a></p>
          
          <div className="final_price">           
            <p>
              <span>Товары, <span>{carts.length} шт</span></span>
              <span>{finalPrice} $</span>
            </p>

            <p>
              <h2>Итог</h2>
              <h2>{finalPrice} $</h2>
            </p>

          </div>

          <Button>Заказать</Button>

          <p className="agreements">
            <span className="agreements_check">✓</span>
            <p className="agreements_text">Соглашаюсь с <a href="#">правилами пользования торговой площадкой</a> и <a href="#">возварта</a></p>
          </p>

        </div>

      </div>

    </div>
  );
}

export default BasketFormSidebar;
