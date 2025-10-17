import footerKasaLarge from '../../assets/Footer_large.png'
import footerKasaSmall from '../../assets/Footer_small.png'

function Footer() {
    return (
        <picture>
            <source media="(max-width: 768px)" srcSet={footerKasaSmall} />
            <img class="footer" src={footerKasaLarge} alt="footer kasa"/> 
        </picture>
    )
}
export default Footer