import { Link } from 'react-router-dom'
import Button from '../../components/UI/button/Button'
import './addresses.css'

function Addresses(){
    return(
        <>
            <div className='addresses'>
                <div className='addresses_content'>
                    <img src="https://avatars.mds.yandex.net/i?id=b302f3406658c06738db32b0a442d82b_l-9094097-images-thumbs&n=13" alt="Страница в стадии разработки" />
                </div>
            </div>

            <Link className='addresses_btn' to='/'><Button>На главную</Button></Link>
        </>
    )
}

export default Addresses