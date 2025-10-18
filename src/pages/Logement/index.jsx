import { useParams } from 'react-router-dom';
import { useContext, useState } from 'react'
import { LogementsContext } from '../../components/LogementProvider'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import arrowBack from '../../assets/arrow_back.png'
import arrowForward from '../../assets/arrow_forward.png'
import starActive from '../../assets/star-active.png'
import starInactive from '../../assets/star-inactive.png'

function Logement() {
    const { id } = useParams();
    const { logements } = useContext(LogementsContext);
    const logement = logements.find(item => item.id === id);
    const images = logement.pictures;
    // carousel
    const [currentIndex, setCurrentIndex] = useState(0);
    const next = () => {setCurrentIndex((currentIndex + 1) % images.length);};
    const prev = () => {setCurrentIndex((currentIndex - 1 + images.length) % images.length);};
    // rating
    const rating = parseInt(logement.rating);
    const stars=[];
    for (let i=0; i<5; i++) 
        stars.push(<img class="ratingstar" key={i} src={i<rating? starActive : starInactive} alt="rating star"/>);

    return (
      <div class="homeWrapper">
        <Header />
        <div class="homeBody">
          <div class="carousel">
            <button class="carouselBtn btnPrev" onClick={prev} aria-label="Précédent" >
              <img src={arrowBack} alt="fleche precedente" />
            </button>
            <p class="carouselLabel">
              {currentIndex + 1}/{images.length}
            </p>
            <img class="carouselImg" src={images[currentIndex]} alt={`${logement.title}`} />
            <button class="carouselBtn btnNext" onClick={next} aria-label="Suivant" >
              <img src={arrowForward} alt="fleche suivante" />
            </button>
          </div>
          <div>
            <div class="logementBloc1">
              <div class="logementBloc2">
                <h1 class="colorRed size36px">{logement.title}</h1>
                <p class="size18px">{logement.location}</p>
                <div class="logementBloc3"> 
                {logement.tags.map(tag =>(
                    <div class="tag backgroundRed">{tag}</div>
                ))}
                </div>
              </div>
              <div class="hostRating">
                <div class="logementBloc4">
                    <h2 class="colorRed size18px">{logement.host.name}</h2>
                    <img class="hostImg" src={logement.host.picture} alt={logement.host.name} />
                </div>
                <div class="logementBloc3">{stars}</div>
              </div>
            </div>
            <div class="details">
                <div class="detail backgroundRed">Description</div>
                <div class="detail backgroundRed">Equipements</div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
}
export default Logement