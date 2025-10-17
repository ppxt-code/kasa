import { useParams } from 'react-router-dom';
import { useContext, useState } from 'react'
import { LogementsContext } from '../../components/LogementProvider'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import arrowBack from '../../assets/arrow_back.png'
import arrowForward from '../../assets/arrow_forward.png'

function Logement() {
    const { id } = useParams();
    const { logements } = useContext(LogementsContext);
    const logement = logements.find(item => item.id === id);
    const images = logement.pictures;
    
    const [currentIndex, setCurrentIndex] = useState(0);
    const next = () => {setCurrentIndex((currentIndex + 1) % images.length);};
    const prev = () => {setCurrentIndex((currentIndex - 1 + images.length) % images.length);};
    return (
      <div class="homeWrapper">
        <Header />
        <div class="homeBody">
            <div class="carousel">
                <button class="carouselBtn btnPrev" onClick={prev} aria-label="Précédent"> 
                    <img src={arrowBack} alt="fleche precedente"/>
                </button>
                <img class="carouselImg" src={images[currentIndex]} alt={`${logement.title}`} />
                <button class="carouselBtn btnNext"  onClick={next} aria-label="Suivant"> 
                    <img src={arrowForward} alt="fleche suivante"/>
                </button>
            </div>
            <h1>{logement.title}</h1>
        </div>
        <Footer />
      </div>
    )
}
export default Logement