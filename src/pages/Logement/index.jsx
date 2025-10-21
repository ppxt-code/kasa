import { useParams } from 'react-router-dom';
import { useContext, useState } from 'react'
import { LogementsContext } from '../../components/LogementProvider'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import arrowBack from '../../assets/arrow_back.png'
import arrowForward from '../../assets/arrow_forward.png'
import starActive from '../../assets/star-active.png'
import starInactive from '../../assets/star-inactive.png'
import arrowUp from '../../assets/arrow_up.png'

function Logement() {
    const { id } = useParams();
    const { logements } = useContext(LogementsContext);
    const logement = logements.find(item => item.id === id);
    if (!logement) {
      return (
      <div class="kasaWrapper">
        <Header />
        <h1>Pas de logement trouvé</h1>
        <Footer />
      </div>);
    } 
    const images = logement.pictures;
    const hasButton = images.length > 1;
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
      <div class="kasaWrapper">
        <Header />
        <div class="kasaBody">
          <div class="carousel">
            {hasButton &&(
            <button class="carouselBtn btnPrev" onClick={prev} aria-label="Précédent" >
              <img src={arrowBack} alt="fleche precedente" />
            </button>
            )}
            {hasButton && (
            <p class="carouselLabel">
              {currentIndex + 1}/{images.length}
            </p>
            )}
            <img class="carouselImg" src={images[currentIndex]} alt={`${logement.title}`} />
            {hasButton &&(
            <button class="carouselBtn btnNext" onClick={next} aria-label="Suivant" >
              <img src={arrowForward} alt="fleche suivante" />
            </button>
            )}
          </div>
          <div>
            <div class="logementBloc1">
              <div class="logementBloc2">
                <h1 class="logementTitle">{logement.title}</h1>
                <p>{logement.location}</p>
                <div class="logementBloc3"> 
                {logement.tags.map(tag =>(
                    <div class="tag">{tag}</div>
                ))}
                </div>
              </div>
              <div class="hostRating">
                <div class="logementBloc4">
                    <h2 class="hostTitle">{logement.host.name}</h2>
                    <img class="hostImg" src={logement.host.picture} alt={logement.host.name} />
                </div>
                <div class="logementBloc3">{stars}</div>
              </div>
            </div>
            <div class="details">
              <div class="detail">
                <input type="checkbox" class="detailToggle" />
                <div class="detailTitle">
                  <p>Description</p>
                  <div class="detailArrow">
                    <img src={arrowUp} alt="detail arrow" />
                  </div>
                </div>
                <div class="detailContent">	
                  {logement.description}
                </div>
              </div>
              <div class="detail">
                <input type="checkbox" class="detailToggle" />
                <div class="detailTitle">
                  <p>Equipements</p>
                  <div class="detailArrow">
                    <img src={arrowUp} alt="detail arrow" />
                  </div>
                </div>
                <div class="detailContent">	
                    <ul class="detailList">
                      {logement.equipments.map((equipement, i)=>(<li key={i}>{equipement}</li>))}
                    </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
}
export default Logement