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
      <div class="kasaWrapper">
        <Header />
        <div class="kasaBody">
          <div class="imgWrapper">
            <img class="homeImg" src={img1} alt="la mer pres des cotes" />
            <div class="imgOverlay bgopacity60pct"></div>
            <h1 class="homeTitle">Chez vous, partout et ailleurs</h1>
          </div>
          <div class="galleryWrapper">
            {logements.map((item, index) => (
              <div key={index} className="imgGallery"
               onClick={() => navigate(`/logement/${item.id}`)}>
                <img src={item.cover} alt={item.title} />
                <div class="imgGalleryOverlay"></div>
                <h2 class="imgGalleryTitle">{item.title}</h2>
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </div>
    );
}
export default Home