import Header from '../../components/Header'
import Footer from '../../components/Footer'
import img1 from '../../assets/img_src1.png'

function Home() {
    return (
        <div class="homeWrapper">
            <Header/>
            <div class="homeBody">
                <div class="imgWrapper">
                    <img class="homeImg" src={img1} alt="la mer pres des cotes"/>
                    <div class="imgOverlay"></div>
                    <h1 class="homeTitle">Chez vous, partout et ailleurs</h1>
                </div>
                <div class="galleryWrapper" id="gallery"></div>
            </div>
            <Footer/>
        </div>
    )
}
export default Home