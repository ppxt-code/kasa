import Header from '../../components/Header'
import Footer from '../../components/Footer'
import arrowUp from '../../assets/arrow_up.png'
import img2 from '../../assets/img_src2.png'

function Apropos() {
    return (
      <div className="kasaWrapper">
        <Header />
        <div className="aproposWrapper">
          <div className="imgWrapper">
            <img className="homeImg" src={img2} alt="la montagne enneigee" />
            <div className="imgOverlay bgopacity30pct"></div>
          </div>
          <div>
            <div className="apropos">
              <div className="detail">
                <input type="checkbox" className="detailToggle" />
                <div className="detailTitle">
                  <p>Fiabilité</p>
                  <div className="detailArrow">
                    <img src={arrowUp} alt="detail arrow" />
                  </div>
                </div>
                <div className="detailContent">
                  Les annonces postées sur Kasa garantissent une fiabilité
                  totale. Les photos sont conformes aux logements, et toutes les
                  informations sont régulièrement vérifiées par nos équipes.
                </div>
              </div>
              <div className="detail">
                <input type="checkbox" className="detailToggle" />
                <div className="detailTitle">
                  <p>Respect</p>
                  <div className="detailArrow">
                    <img src={arrowUp} alt="detail arrow" />
                  </div>
                </div>
                <div className="detailContent">
                  La bienveillance fait partie des valeurs fondatrices de Kasa.
                  Tout comportement discriminatoire ou de perturbation du
                  voisinage entrainera une exclusion de notre plateforme.
                </div>
              </div>
              <div className="detail">
                <input type="checkbox" className="detailToggle" />
                <div className="detailTitle">
                  <p>Service</p>
                  <div className="detailArrow">
                    <img src={arrowUp} alt="detail arrow" />
                  </div>
                </div>
                <div className="detailContent">
                  La qualité du service est au coeur de notre engagement chez
                  Kasa. Nous veillons à ce que chaque interaction, que ce soit
                  avec nos hôtes ou nos locataires, soit empreinte de respect et
                  de bienveillance.
                </div>
              </div>
              <div className="detail">
                <input type="checkbox" className="detailToggle" />
                <div className="detailTitle">
                  <p>Sécurité</p>
                  <div className="detailArrow">
                    <img src={arrowUp} alt="detail arrow" />
                  </div>
                </div>
                <div className="detailContent">
                  La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes
                  que pour les voyageurs, chaque logement correspond aux
                  critères de sécurité établis par nos services. En laissant une
                  note aussi bien à l'hôte qu'au locataire, cela permet à nos
                  équipes de vérifier que les standards sont bien respectés.
                  Nous organisons également des ateliers sur la sécurité
                  domestique pour nos hôtes.
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
}
export default Apropos