import "./menu.css";
import { useDispatch, useSelector } from "react-redux";
import { changeStateMenu } from "../../store/navbarSlice";

function Menu({listMenu}) {

  const dispatch = useDispatch()
  const stateMenu = useSelector(state => state.navBar.active);

  return (
    <div className="NavBar">
      <div onClick={() => dispatch(changeStateMenu())} className={stateMenu ? 'blur active' : 'blur'}/>
      <nav className={stateMenu ? 'menu active' : 'menu'}>
        <ul className='main_menu'>

          {listMenu.map((list, index) => 
            <li key={index} className="list_menu">
              <span>{list.logo}</span>
              <p>{list.name}</p>
            </li>
          )}

        </ul>
      </nav>
    </div>
  );
}

export default Menu;
