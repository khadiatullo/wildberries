import Button from '../UI/button/Button'
import { Link } from "react-router-dom";
import './notFound.css'

function NotFound(){
    return(
        <div className='notFoundPage'>
            <h1 className="not_found_text">По Вашему запросу ничего не найдено</h1>
            <Link className='not_found_btn' to='/'><Button>На главную</Button></Link>
        </div>
    )
}

export default NotFound