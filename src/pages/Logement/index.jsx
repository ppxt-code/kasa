import { useParams } from 'react-router-dom';
import { useContext } from 'react'
import { LogementsContext } from '../../components/LogementProvider'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Gallery from '../../components/Gallery'
import starActive from '../../assets/star-active.png'
import starInactive from '../../assets/star-inactive.png'
import arrowUp from '../../assets/arrow_up.png'

function Logement() {
    const { id } = useParams();
    const { logements } = useContext(LogementsContext);
    const logement = logements.find(item => item.id === id);
    if (!logement) {
      return (
      <div className="kasaWrapper">
        <Header />
        <h1>Pas de logement trouvé</h1>
        <Footer />
      </div>);
    } 
    const images = logement.pictures;
    // rating
    const rating = parseInt(logement.rating);
    const stars=[];
    for (let i=0; i<5; i++) 
        stars.push(<img className="ratingstar" key={i} src={i<rating? starActive : starInactive} alt="rating star"/>);

    return (
      <div className="kasaWrapper">
        <Header />
        <div className="kasaBody">
          <Gallery images={images} title={logement.title}/>
          <div>
            <div className="logementBloc1">
              <div className="logementBloc2">
                <h1 className="logementTitle">{logement.title}</h1>
                <p>{logement.location}</p>
                <div className="logementBloc3"> 
                {logement.tags.map((tag, index) =>(
                    <div key={index} className="tag">{tag}</div>
                ))}
                </div>
              </div>
              <div className="hostRating">
                <div className="logementBloc4">
                    <h2 className="hostTitle">{logement.host.name}</h2>
                    <img className="hostImg" src={logement.host.picture} alt={logement.host.name} />
                </div>
                <div className="logementBloc3">{stars}</div>
              </div>
            </div>
            <div className="details">
              <div className="detail">
                <input type="checkbox" className="detailToggle" />
                <div className="detailTitle">
                  <p>Description</p>
                  <div className="detailArrow">
                    <img src={arrowUp} alt="detail arrow" />
                  </div>
                </div>
                <div className="detailContent">	
                  {logement.description}
                </div>
              </div>
              <div className="detail">
                <input type="checkbox" className="detailToggle" />
                <div className="detailTitle">
                  <p>Equipements</p>
                  <div className="detailArrow">
                    <img src={arrowUp} alt="detail arrow" />
                  </div>
                </div>
                <div className="detailContent">	
                    <ul className="detailList">
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