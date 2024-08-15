import { Link } from 'react-router-dom'
import './basketNotProducts.css'
import Button from '../../UI/button/Button'

function BasketNotProducts(){
    return(
        <div className='basket_page'>
            <div className='basket_conteiner'>
                <h2>В корзине пока пусто</h2>
                <p className='basket_text'>Загляните на главную, чтобы выбрать товары или найдите нужное в поиске</p>
                <Link to='/' className='btn_main'><Button>Перейти в главную</Button></Link>
            </div>
        </div>
    )
}

export default BasketNotProducts