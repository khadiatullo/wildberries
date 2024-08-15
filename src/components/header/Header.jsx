import { useContext, useState } from "react";
import BurgerBtn from "../UI/BurgerBtn/BurgerButton.jsx";
import MyInput from "../UI/input/MyInput";
import InformationHeader from "./Information/InformationHeader";
import SignUpAndBasket from "./SignUpAndBasket/SignUpAndBasket.jsx";
import "./header.css";
import { Link } from "react-router-dom";
import { CartContext } from "../../contex/index.js";
import { GoHomeFill } from "react-icons/go";
import { BsCart2 } from "react-icons/bs";
import { IoMdHeart } from "react-icons/io";
import { IoPerson } from "react-icons/io5";
import { SlLocationPin } from "react-icons/sl";
import BurgerBtnToo from "../UI/burgerBtnToo/BurgerBtnToo.jsx";
import { changeStateMenu } from "../../store/navbarSlice.js";
import { useDispatch, useSelector } from "react-redux";

function Header({ nameLogo }) {
  const { carts, value, setValue } = useContext(CartContext);

  const stateMenu = useSelector(state => state.navBar.active);
  const dispatch = useDispatch();
  const [activeBtn, setActiveBtn] = useState(1)

  return (
    <>
      <header>
          <div className="header_conteiner">
            <InformationHeader />

            <div className="bace_header">
              <div className="logo">
                <Link className="link_logo" to="/">
                  {nameLogo}
                </Link>
              </div>

              <BurgerBtn />

              <MyInput
                placeholder="Найти на Wildberries"
                value={value}
                setValue={setValue}
              />

              <Link to="/">
                <SlLocationPin className="header_icon" />
              </Link>

              <SignUpAndBasket carts={carts} />
            </div>
          </div>
      </header>

      <div className="header_too">
        <ul className="header_too_conteiner">
          <li onClick={() => stateMenu ? dispatch(changeStateMenu()) : ''}>
            <Link to="/">
              <GoHomeFill  onClick={() => setActiveBtn(1)} className={activeBtn === 1 ? 'icon_header_bottom active' : 'icon_header_bottom'}/>
            </Link>
          </li>

          <li>
            <BurgerBtnToo activeBtn={activeBtn} setActiveBtn={setActiveBtn}/>
          </li>

          <li onClick={() => stateMenu ? dispatch(changeStateMenu()) : ''}>
            <Link className='header_buttom_basket_btn'to="/basket">
              <BsCart2 onClick={() => setActiveBtn(3)} className={activeBtn === 3 ? 'icon_header_bottom active' : 'icon_header_bottom'}/>
              <span className={carts.length === 0 ? 'header_buttom_count_product' : 'header_buttom_count_product_active'}>{carts.length}</span>
            </Link>
          </li>

          <li onClick={() => stateMenu ? dispatch(changeStateMenu()) : ''}>
            <Link to="/signUp">
              <IoMdHeart onClick={() => setActiveBtn(4)} className={activeBtn === 4 ? 'icon_header_bottom active' : 'icon_header_bottom'}/>
            </Link>
          </li>

          <li onClick={() => stateMenu ? dispatch(changeStateMenu()) : ''}>
            <Link to="/signUp">
              <IoPerson onClick={() => setActiveBtn(5)} className={activeBtn === 5 ? 'icon_header_bottom active' : 'icon_header_bottom'}/>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Header;
