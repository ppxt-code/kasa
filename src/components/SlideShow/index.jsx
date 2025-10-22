
import { useState } from 'react'
import arrowBack from '../../assets/arrow_back.png'
import arrowForward from '../../assets/arrow_forward.png'

function SlideShow({images, title}) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const hasButton = images.length > 1;
    const next = () => {setCurrentIndex((currentIndex + 1) % images.length);};
    const prev = () => {setCurrentIndex((currentIndex - 1 + images.length) % images.length);};
    return (
              <div className="carousel">
                {hasButton &&(
                <button className="carouselBtn btnPrev" onClick={prev} aria-label="Précédent" >
                  <img src={arrowBack} alt="fleche precedente" />
                </button>
                )}
                {hasButton && (
                <p className="carouselLabel">
                  {currentIndex + 1}/{images.length}
                </p>
                )}
                <img className="carouselImg" src={images[currentIndex]} alt={title} />
                {hasButton &&(
                <button className="carouselBtn btnNext" onClick={next} aria-label="Suivant" >
                  <img src={arrowForward} alt="fleche suivante" />
                </button>
                )}
              </div>)
}
export default SlideShow