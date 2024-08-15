import Button from '../../components/UI/button/Button'
import './signUp.css';

function SignUp(){
    return(
        <form className='form_sign_up'>
            <div>
                <h2 className='signUpTitle'>Войти или создать профиль</h2>
                <div className='form_sign_up_input_btn'>
                    <input className='form_sign_up_input' type="number" placeholder='+7 000 000-00-00'/>
                    <Button type='submit'>Получить код</Button>
                </div>
                <p className='form_sign_up_description'><span className='check_mark'>✓</span> <span style={{color: 'gray'}}>Соглашаюсь</span> с правилами пользования торговой площадкой <span style={{color: 'gray'}}>и</span> возврата</p>
            </div>
        </form>
    )
}

export default SignUp;