import {Link} from 'react-router-dom'
import logoKasa from '../../assets/LOGO_large.png'

function Header() {
    return (
        <div class="headerWrapper">
            <img src={logoKasa} alt="logo kasa"/>  
            <div class="linksWrapper">
                <Link to="/">Accueil</Link>
                <a href="#">A propos</a>
            </div> 
        </div>
    )
}
export default Header