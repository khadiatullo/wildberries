import './main.css'
import ImageSlider from "./imageSlider/ImageSlider";
import img1 from '../../images/216tpxxs.png'
import img2 from '../../images/6bh5905m.png'
import img3 from '../../images/9a5o3uzl.png'
import img4 from '../../images/9lmtwpaa.png'
import img5 from '../../images/d5uszxce.png'
import img6 from '../../images/g2i51jp5.png'
import img7 from '../../images/o56i6cgq.png'
import img8 from '../../images/s4getshs.png'
import img9 from '../../images/tufcrknn.png'
import img10 from '../../images/u5g5hilc.png'
import img11 from '../../images/yzb97i4b.png'
import img12 from '../../images/zmiqlhhe.png'
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import { useDispatch } from 'react-redux';
import { fetchProduct } from '../../store/productSlice';
import { useEffect } from 'react';
import ProductList from './products/ProductList';

function Main(){

    const slides = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12];
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProduct())
    }, [dispatch])

    return(
        <main>
            <ImageSlider slides={slides} leftArrow={<FaArrowLeftLong/>} rightArrow={<FaArrowRightLong/>}/>
            <ProductList/>
        </main>
    )
}

export default Main