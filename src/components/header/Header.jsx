import BurgerBtn from "../UI/BurgerBtn/BurgerButton.jsx";
import MyInput from "../UI/input/MyInput";
import InformationHeader from "./Information/InformationHeader";
import SignUpAndBasket from "./SignUpAndBasket/SignUpAndBasket.jsx";
import "./header.css";

function Header({nameLogo}) {

  return (
    <header>
      <InformationHeader />

      <div className="bace_header">
        
        <div className="logo">
          <a className="link_logo" href="/">
            {nameLogo}
          </a>
        </div>

        <BurgerBtn/>

        <MyInput placeholder="Найти на Wildberries" />

        <SignUpAndBasket/>

      </div>

    </header>
  );
}

export default Header;
