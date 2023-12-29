import cl from "./SignUpAndBasket.module.css";
import { MdLocationOn} from "react-icons/md";
import { IoPerson } from "react-icons/io5";
import { BsCart2 } from "react-icons/bs";

function SignUpAndBasket() {
  return (
    <div className={cl.SignUpAndBasket}>

      <ul className={cl.list_header}>
        <a className={cl.a} href="/">
          <li><MdLocationOn style={{width: '30px', height: '30px', color: 'white'}}/></li>
          <li className={cl.logo_name}>Адреса</li>
        </a>
      </ul>

      <ul className={cl.list_header}>
        <a className={cl.a} href="/">
          <li><IoPerson style={{width: '30px', height: '30px', color: 'white'}}/></li>
          <li className={cl.logo_name}>Войти</li>
        </a>
      </ul>

      <ul className={cl.list_header}>
        <a className={cl.a} href="/">
          <li><BsCart2 style={{width: '30px', height: '30px', color: 'white'}}/></li>
          <li className={cl.logo_name}>Корзина</li>
        </a>
      </ul>
      
    </div>
  );
}

export default SignUpAndBasket;
