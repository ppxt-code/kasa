import img1 from '../../assets/img_src1.png'

function Banner() {
    return (  <div className="imgWrapper">
                <img className="homeImg" src={img1} alt="la mer pres des cotes" />
                <div className="imgOverlay bgopacity60pct"></div>
                <h1 className="homeTitle">Chez vous, partout et ailleurs</h1>
              </div>)
}
export default Banner