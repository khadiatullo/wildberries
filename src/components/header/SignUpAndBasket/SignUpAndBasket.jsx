import "./SignUpAndBasket.css";
import { MdLocationOn} from "react-icons/md";
import { IoPerson } from "react-icons/io5";
import { BsCart2 } from "react-icons/bs";

function SignUpAndBasket() {
  return (
    <div className="SignUpAndBasket">

      <ul>
        <a href="/">
          <li><MdLocationOn style={{width: '30px', height: '30px', color: 'white'}}/></li>
          <li className="logo_name">Адреса</li>
        </a>
      </ul>

      <ul>
        <a href="/">
          <li><IoPerson style={{width: '30px', height: '30px', color: 'white'}}/></li>
          <li className="logo_name">Войти</li>
        </a>
      </ul>

      <ul>
        <a href="/">
          <li><BsCart2 style={{width: '30px', height: '30px', color: 'white'}}/></li>
          <li className="logo_name">Корзина</li>
        </a>
      </ul>
      
    </div>
  );
}

export default SignUpAndBasket;
