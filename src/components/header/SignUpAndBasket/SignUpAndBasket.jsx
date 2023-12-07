import "./SignUpAndBasket.css";

function SignUpAndBasket() {
  return (
    <div className="SignUpAndBasket">

      <ul>
        <a href="/">
          <li>
            <img
              width="30"
              height="30"
              src="https://img.icons8.com/material-sharp/24/FFFFFF/marker.png"
              alt="marker"
            />
          </li>
          <li>Адреса</li>
        </a>
      </ul>

      <ul>
        <a href="/">
          <li>
            <img
              width="30"
              height="30"
              src="https://img.icons8.com/pastel-glyph/64/FFFFFF/person-male--v3.png"
              alt="person-male--v3"
            />
          </li>
          <li>Войти</li>
        </a>
      </ul>

      <ul>
        <a href="/">
          <li>
            <img
              width="30"
              height="30"
              src="https://img.icons8.com/ios-glyphs/30/FFFFFF/shopping-cart--v1.png"
              alt="shopping-cart--v1"
            />
          </li>
          <li>Корзина</li>
        </a>
      </ul>
      
    </div>
  );
}

export default SignUpAndBasket;
