import Header from '../../components/Header'
import Footer from '../../components/Footer'
import img1 from '../../assets/img_src1.png'
import React, { useState, useEffect } from 'react';

function Home() {
    const [logements, setLogements] = useState([]);
    useEffect(() => {
    fetch('/logements.json')
      .then(response => response.json())
      .then(data => setLogements(data))
      .catch(error => console.error('Erreur lors du fetch :', error));
    }, []);
    return (
      <div class="homeWrapper">
        <Header />
        <div class="homeBody">
          <div class="imgWrapper">
            <img class="homeImg" src={img1} alt="la mer pres des cotes" />
            <div class="imgOverlay"></div>
            <h1 class="homeTitle">Chez vous, partout et ailleurs</h1>
          </div>
          <div class="galleryWrapper">
            {logements.map((item, index) => (
              <div key={index} className="imgGallery">
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