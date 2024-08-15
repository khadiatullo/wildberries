import BasketSectionItem from "./BasketSectionItem";

function BasketSectionList({carts, deleteCart}) {

  return (
    <>
      <h2 className="basket_section_header">
        Корзина <span>{carts.length}</span>
      </h2>

      {carts.map((cart) => (
        <BasketSectionItem deleteCart={deleteCart} key={cart.id} cart={cart} />
      ))}
      
    </>
  );
}

export default BasketSectionList;
