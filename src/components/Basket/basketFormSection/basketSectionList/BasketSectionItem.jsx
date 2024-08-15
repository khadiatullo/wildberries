import { useState } from 'react';
import './basketSectionList.css'
import { IoMdHeartEmpty } from "react-icons/io";
import { MdOutlineDeleteOutline } from "react-icons/md";

function BasketSectionItem({cart, deleteCart}){
    const {image, price, title, id} = cart;
    const roundPrice = Math.floor(price);  
    const [value, setValue] = useState(1);
    
    const decrement = () => {
        if(value > 1){
            setValue(value - 1)
        }
    };

    const increment = () => {
        if(value < 99){
            setValue(value + 1)
        }
    };


    return(
        <div className="basket_section_list">

            <div className='product_and_increment'>
                <div className="basket_product">

                <div><img  className="basket_section_list_img" src={image} alt="картинка" /></div>

                <div className='basket_section_description'>
                    <div className="basket_section_list_description">
                        {title}
                    </div>
                    <div className="basket_section_list_author">Алексин WB</div>
                </div>

                </div>

                <div className="basket_increment_decrement">
                <button onClick={decrement} type='button'>-</button>
                <input style={{border: 'none'}} onChange={(e) => setValue(e.target.value)} value={value} type="number" name="" id="" readOnly />
                <button onClick={increment} type='button'>+</button>
                </div>
            </div>

            <div className="delete_product_and_price">
                <div className="all_price_basket_product">
                    <h3>{roundPrice * value} $</h3>
                    <del>{(roundPrice + 570) * value} $</del>
                </div>

                <div className="delete_and_favourites_product">
                    <button type='button'><IoMdHeartEmpty className='favourites_product'/></button>
                    <button onClick={() => deleteCart(id)} type='button'><MdOutlineDeleteOutline className='delete_product'/></button>
                </div>
            </div>

        </div>
    )
}

export default BasketSectionItem