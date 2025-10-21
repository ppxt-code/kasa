import Header from '../../components/Header'
import Footer from '../../components/Footer'
import img1 from '../../assets/img_src1.png'
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { LogementsContext } from '../../components/LogementProvider';

function Home() {
    const navigate = useNavigate();
    const { logements } = useContext(LogementsContext);
    return (
      <div className="kasaWrapper">
        <Header />
        <div className="kasaBody">
          <div className="imgWrapper">
            <img className="homeImg" src={img1} alt="la mer pres des cotes" />
            <div className="imgOverlay bgopacity60pct"></div>
            <h1 className="homeTitle">Chez vous, partout et ailleurs</h1>
          </div>
          <div className="galleryWrapper">
            {logements.map((item, index) => (
              <div key={index} className="imgGallery"
               onClick={() => navigate(`/logement/${item.id}`)}>
                <img src={item.cover} alt={item.title} />
                <div className="imgGalleryOverlay"></div>
                <h2 className="imgGalleryTitle">{item.title}</h2>
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </div>
    );
}
export default Home