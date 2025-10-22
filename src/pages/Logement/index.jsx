import { useParams } from 'react-router-dom';
import { useContext } from 'react'
import { LogementsContext } from '../../components/LogementProvider'
import Error from '../../pages/Error'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Gallery from '../../components/Gallery'
import Collapse from '../../components/Collapse'
import starActive from '../../assets/star-active.png'
import starInactive from '../../assets/star-inactive.png'

function Logement() {
    const { id } = useParams();
    const { logements } = useContext(LogementsContext);
    const logement = logements.find(item => item.id === id);
    if (!logement) {
      return (<Error />);
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
              <Collapse title="Description" content={logement.description}/>
              <Collapse title="Equipements" content={
                    <ul className="detailList">
                      {logement.equipments.map((equipement, i)=>(<li key={i}>{equipement}</li>))}
                    </ul>}/>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
}
export default Logement