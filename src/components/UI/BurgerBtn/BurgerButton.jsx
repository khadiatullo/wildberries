import { useDispatch, useSelector } from 'react-redux'
import './BurgerBtn.css'
import { changeStateMenu } from '../../../store/navbarSlice'

function BurgerBtn(){

    const dispatch = useDispatch();
    const stateMenu = useSelector(state => state.navBar.active);

    return(
            <div onClick={() => dispatch(changeStateMenu())} className={stateMenu ? 'header_burger_btn active' : 'header_burger_btn'}>
                <button className='btn_menu'>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
    )
}


export default BurgerBtn