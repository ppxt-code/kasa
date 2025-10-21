import Header from '../../components/Header'
import Footer from '../../components/Footer'
import {Link} from 'react-router-dom'

function Error() {
    return (
      <div class="kasaWrapper">
        <Header />
        <div class="errorWrapper">
            <h1>404</h1>
            <h2>Oups! La page que vous demandez n'existe pas.</h2>
            <Link to="/">Retourner sur la page d'accueil</Link>
        </div>
        <Footer />
      </div>)
}
export default Error