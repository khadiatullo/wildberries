import { useContext, useState } from 'react';
import './product.css'
import { MdOutlineStar } from "react-icons/md";
import { CartContext } from '../../../contex';
import { Link } from 'react-router-dom';
import Button from '../../UI/button/Button';
import { BsCart2 } from "react-icons/bs";

function ProductItem({product, openModal}){
    
    const {image, price, title, description, rating, id} = product;

    const {addToCart} = useContext(CartContext);
    const roundPrice = Math.floor(price);
    const [isActive, setIsActive] = useState(false);
    const handleClick = () => {
        addToCart(product);
        setIsActive(true);
        openModal();
    };

    return(
            <div className='products'>
                        <div className="product">

                            <Link style={{color: 'inherit'}} to={`/informationProduct/${id}`}>

                                <div className="view_product">
                                    <img src={image} alt="product" />
                                    <span className='quick_view'>Быстрый просмотр</span>
                                </div>

                                <div className="description_product">
                                    <b className='product_card_price'>{roundPrice} $ <del>{roundPrice + 570}$</del></b>
                                    <p className='product_card_discount'>с WB кошельком</p>
                                    <p className='product_card_brend'>{title} <span>/ {description}</span></p>
                                    <p className='product_card_rating'><MdOutlineStar style={{color: 'yellow'}}/> {rating.rate}<span>・{rating.count} оценок</span></p>
                                </div>

                            </Link>

                            {isActive ? <Link to='/basket'><Button styles={{backgroundColor: 'rgba(167, 58, 253, .12)', color: '#a73afd'}}>В корзине</Button></Link> : <Button click={() => handleClick()}><span><BsCart2/></span> {isActive ? 'В корзине' : 'Завтра'}</Button>}

                        </div>             
            </div>

    )
}

export default ProductItem