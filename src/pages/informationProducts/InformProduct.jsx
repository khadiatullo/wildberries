import './informProduct.css'
import { FaArrowLeft } from "react-icons/fa6";
import { IoMdHeartEmpty } from "react-icons/io";
import { FaShareAlt } from "react-icons/fa";
import { GrCircleInformation } from "react-icons/gr";
import { FaArrowsRotate } from "react-icons/fa6";
import { FaLongArrowAltDown } from "react-icons/fa";
import Button from '../../components/UI/button/Button';
import { IoCubeOutline } from "react-icons/io5";
import { FaStore } from "react-icons/fa";
import { Link, useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../contex';
import ModalWindow from '../../components/UI/modalWindow/ModalWindow';


function InformProduct(){

    const params = useParams()
    const [product, setProduct] = useState({});
    const [isActive, setIsActive] = useState(false);
    const {addToCart} = useContext(CartContext);
    const price = Math.floor(product.price);
    const [isActiveModal, setIsActiveModal] = useState(false);
    
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${params.id}`)
            .then(response => response.json())
            .then(data => setProduct(data))
    }, [])

    const handleClick = () => {
        addToCart(product);
        setIsActive(true);
        setIsActiveModal(true);
    };

    return(
        <>
            <div className='conteiner_information_products'>
                    <div>
                        <ul className='list_inform_products'>
                        <li><Link to='/'><FaArrowLeft /></Link></li>
                        <ul>
                            <li><IoMdHeartEmpty /></li>
                            <li><FaShareAlt /></li>
                            <li><GrCircleInformation /></li>
                        </ul>
                        </ul>

                        <div className='base_information_products'>
                            <div className='information_product_slider'>
                                <ul className='information_product_slider_detail'>
                                    <li className='information_product_slider_detail_img'><img src={product.image} alt="product" /></li>
                                    <li className='information_product_slider_detail_img'><img src={product.image} alt="product" /></li>
                                    <li className='information_product_slider_detail_img'><img src={product.image} alt="product" /><img src={product.image} alt="product" /></li>
                                    <li className='information_product_slider_detail_img'><img src={product.image} alt="product" /></li>
                                    <li className='information_product_slider_detail_img'><img src={product.image} alt="product" /></li>
                                </ul>
                                <div className='information_product_slider_detail_main'><img src={product.image} alt="product" /></div>
                            </div>

                            <div className='slider_and_aside'>
                                <div className='detail_information_product'>
                                    <div className='detail_information_product_title'>
                                        <h3>{product.title}</h3>
                                        <div><span style={{color: 'orange', marginRight: '.4em'}}>★</span><span>{product.rating && product.rating.rate}</span> <span className='detail_information_product_estimation'>{product.rating && product.rating.count} оценки</span></div>
                                    </div>

                                    <div className='detail_information_product_colors-wrap'>
                                        <div><span style={{color: '#868695'}}>Цвет: </span>синий</div>
                                        <ul>
                                            <li className='information_product_slider_detail_img'><img src={product.image} alt="product" /></li>
                                            <li className='information_product_slider_detail_img'><img src={product.image} alt="product" /></li>
                                            <li className='information_product_slider_detail_img'><img src={product.image} alt="product" /></li>
                                            <li className='information_product_slider_detail_img'><img src={product.image} alt="product" /></li>
                                            <li className='information_product_slider_detail_img'><img src={product.image} alt="product" /></li>
                                            <li className='information_product_slider_detail_img'><img src={product.image} alt="product" /></li>
                                        </ul>
                                    </div>

                                    <div className='detail_information_product_description'>
                                        <ul className='detail_information_product_option'>
                                            <li>Артикул</li>
                                            <li>Наполнитель</li>
                                            <li>Материал игрушки</li>
                                            <li>Эффекты</li>
                                            <li>Вид упаковки</li>
                                            <li>Страна производства</li>
                                            <li>Длина упаковки</li>
                                        </ul>
                                        <ul className='detail_information_product_option_descrip'>
                                            <li>166534031</li>
                                            <li>синтепух</li>
                                            <li>полиэстер; эластан</li>
                                            <li>жмякалка; Мякижи; мялка антистресс</li>
                                            <li>пакет</li>
                                            <li>Китай</li>
                                            <li>18 см</li>
                                        </ul>
                                    </div>

                                    <div className='information_product_about_return'>
                                        <FaArrowsRotate />
                                        <p>14 дней на возврат</p>
                                    </div>
                                </div>

                                <div className='conteiner_aside_information_product'>
                                    <div className='aside_information_product_price_block'>
                                        <div>
                                            <span className='main_price'>{price - 5}$</span>
                                            <span style={{fontWeight: '600'}}>{price}$</span>
                                            <del style={{color: '#868695'}}>{price + 200}$</del>
                                        </div>
                                        <span style={{color: '#a73afd', fontSize: '12px'}}>с WB кошельком</span>
                                    </div>

                                    <div className='stat_price_change'>
                                        <FaLongArrowAltDown/>
                                        <span>91$</span>
                                    </div>

                                    {isActive ? <Link to='/basket'><Button styles={{backgroundColor: 'rgba(167, 58, 253, .12)', color: '#a73afd'}}>Перейти в корзину</Button></Link> : <Button click={() => handleClick()} >Добавить в корзину</Button>}

                                    <div style={{marginTop: '1em', fontSize: '14px'}}>
                                        <p><IoCubeOutline style={{color: '#868695'}}/> 31 марта, <span style={{color: '#868695'}}>склад Алексин WB</span></p>
                                        <p><FaStore style={{color: '#868695'}}/> Лавка игрушек <span style={{color: 'orange', marginRight: '.4em'}}>★</span><span>4.7</span></p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
            </div>

            {isActiveModal ? <ModalWindow description='✔ Товар добавлен в корзину'/> : ''}
        </>
    )

}

export default InformProduct