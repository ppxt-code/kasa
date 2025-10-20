import Header from '../../components/Header'
import Footer from '../../components/Footer'
import arrowUp from '../../assets/arrow_up.png'

function Apropos() {
    return (
      <div class="homeWrapper">
        <Header />
        <div class="aproposWrapper">
          <div>
            <div class="apropos">
              <div class="detail">
                <input type="checkbox" class="detailToggle" />
                <div class="detailTitle">
                  <p>Fiabilité</p>
                  <div class="detailArrow">
                    <img src={arrowUp} alt="detail arrow" />
                  </div>
                </div>
                <div class="detailContent">
                  Les annonces postées sur Kasa garantissent une fiabilité
                  totale. Les photos sont conformes aux logements, et toutes les
                  informations sont régulièrement vérifiées par nos équipes.
                </div>
              </div>

              <div class="detail">
                <input type="checkbox" class="detailToggle" />
                <div class="detailTitle">
                  <p>Respect</p>
                  <div class="detailArrow">
                    <img src={arrowUp} alt="detail arrow" />
                  </div>
                </div>
                <div class="detailContent">
                  La bienveillance fait partie des valeurs fondatrices de Kasa.
                  Tout comportement discriminatoire ou de perturbation du voisinage 
                  entrainera une exclusion de notre plateforme.
                </div>
              </div>

              <div class="detail">
                <input type="checkbox" class="detailToggle" />
                <div class="detailTitle">
                  <p>Service</p>
                  <div class="detailArrow">
                    <img src={arrowUp} alt="detail arrow" />
                  </div>
                </div>
                <div class="detailContent">
                    La qualité du service est au coeur de notre engagement chez Kasa.
                    Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes
                    ou nos locataires, soit empreinte de respect et de bienveillance.
                </div>
              </div>

              <div class="detail">
                <input type="checkbox" class="detailToggle" />
                <div class="detailTitle">
                  <p>Sécurité</p>
                  <div class="detailArrow">
                    <img src={arrowUp} alt="detail arrow" />
                  </div>
                </div>
                <div class="detailContent">
                    La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les 
                    voyageurs, chaque logement correspond aux critères de sécurité établis par 
                    nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela 
                    permet à nos équipes de vérifier que les standards sont bien respectés. Nous 
                    organisons également des ateliers sur la sécurité domestique pour nos hôtes.
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