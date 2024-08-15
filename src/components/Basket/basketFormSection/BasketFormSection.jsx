import "./basketFormSection.css";
import BasketSectionList from "./basketSectionList/BasketSectionList";

function BasketFormSection({carts, deleteCart}) {
  return (
    <>
      <div className="basket_form_section">

        <BasketSectionList deleteCart={deleteCart} carts={carts} />

      </div>

      <div className="basket_form_section">
        <h2 className="basket_section_header">Способ доставки</h2>
        <p>
          <a className="basket_links" href="#">Выбрать адрес доставки</a>
        </p>
      </div>

      <div className="basket_section_wrap">

        <div className="basket_form_section basket_pay">
          <h2 className="basket_section_header">Способ оплаты</h2>
          <p>
            <a className="basket_links" href="#">Войти или зарегистрироваться, </a>
            <span>чтобы выбрать способ оплаты</span>
          </p>
        </div>

        <div className="basket_form_section basket_user_data">
          <h2 className="basket_section_header">Мои данные</h2>
          <p>
            <a className="basket_links" href="#">Войти или зарегистрироваться, </a>
            <span>чтобы оформить заказ</span>
          </p>
        </div>
        
      </div>

    </>
  );
}


export default BasketFormSection