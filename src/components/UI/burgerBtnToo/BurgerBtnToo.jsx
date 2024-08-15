import { useDispatch} from 'react-redux';
import { RxHamburgerMenu } from "react-icons/rx";
import { changeStateMenu} from '../../../store/navbarSlice'

function BurgerBtnToo({activeBtn, setActiveBtn}){

    const dispatch = useDispatch();

    function activeButton(){
        dispatch(changeStateMenu());
        setActiveBtn(2)
    }
    return (
        <p><RxHamburgerMenu onClick={() => activeButton()} className={activeBtn === 2 ? 'icon_header_bottom active' : 'icon_header_bottom'}/></p>
    )
}

export default BurgerBtnToo