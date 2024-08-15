import cl from "./SignUpAndBasket.module.css";
import { MdLocationOn} from "react-icons/md";
import { IoPerson } from "react-icons/io5";
import { BsCart2 } from "react-icons/bs";
import { Link } from "react-router-dom";

function SignUpAndBasket({carts}) {
 
  return (
      <div className={cl.SignUpAndBasket}>

        <ul className={cl.list_header}>
          <Link className={cl.a} to="/addresses">
            <li><MdLocationOn style={{width: '30px', height: '30px', color: 'white'}}/></li>
            <li className={cl.logo_name}>Адреса</li>
          </Link>
        </ul>

        <ul className={cl.list_header}>
          <Link className={cl.a} to="/signUp">
            <li><IoPerson style={{width: '30px', height: '30px', color: 'white'}}/></li>
            <li className={cl.logo_name}>Войти</li>
          </Link>
        </ul>

        <ul className={cl.list_header}>
          <Link className={cl.a} to="/basket">
            <li><BsCart2 style={{width: '30px', height: '30px', color: 'white'}}/></li>
            <li className={cl.logo_name}>Корзина</li>
            <span className={carts.length === 0 ? cl.count_product : cl.count_product_active}>{carts.length}</span>
          </Link>
        </ul>
        
      </div> 
  );
}

export default SignUpAndBasket;
