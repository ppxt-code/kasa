import footerKasaLarge from '../../assets/Footer_large.png'
import footerKasaSmall from '../../assets/Footer_small.png'

function Footer() {
    return (
        <div class="footerWrapper">
             <picture>
                <source media="(max-width: 768px)" srcSet={footerKasaSmall} />
                <img  src={footerKasaLarge} alt="footer kasa"/> 
            </picture>
        </div>
    )
}
export default Footer