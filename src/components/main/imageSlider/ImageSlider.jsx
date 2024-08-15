import { useEffect, useState } from 'react'
import './ImageSlider.css'

function ImageSlider({slides, leftArrow, rightArrow}){
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimation, setIsAimation] = useState(false)

    const goToPrevious = () => {
        const firstSlide = currentIndex === 0;
        const newIndex = firstSlide ? slides.length - 1 : currentIndex - 1;

        if(!isAnimation){
            setIsAimation(true);
            setTimeout(() => {
                setCurrentIndex(newIndex);
                setIsAimation(false);
            }, 400)
        }
    }

    const goToNext = () => {
        const lastSlide = currentIndex === slides.length - 1;
        const newIndex = lastSlide ? 0 : currentIndex + 1;

        if(!isAnimation){
            setIsAimation(true);
            setTimeout(() => {
                setCurrentIndex(newIndex);
                setIsAimation(false);
            }, 400);
        }
    }

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex)
    }
    
    useEffect(() => {
        let interval = setInterval(() => setCurrentIndex(prevState => prevState === slides.length - 1 ? 0 : prevState + 1), 10000)
        return () => {
            clearInterval(interval)
        }
    })

    return (
        <div className='container_slider'>
            <div className='slider'>

                <div className='arrows'>
                    <div className='leftArrow' onClick={goToPrevious}>{leftArrow}</div>
                    <div className='rightArrow' onClick={goToNext}>{rightArrow}</div>
                </div>

                <div className='slide' style={{backgroundImage: `url(${slides[currentIndex]})`}}></div>

                <div className='dots_container'>
                    {slides.map((slide, slideIndex) => <div key={slideIndex} style={{color: currentIndex === slideIndex ? 'white' : 'gray'}} onClick={() => goToSlide(slideIndex)}>•</div>)}
                </div>

            </div>
        </div>
    )
}

export default ImageSlider