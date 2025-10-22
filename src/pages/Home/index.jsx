import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Banner from '../../components/Banner'
import Card from '../../components/Card'
import { useContext } from 'react';
import { LogementsContext } from '../../components/LogementProvider';

function Home() {
    const { logements } = useContext(LogementsContext);
    return (
      <div className="kasaWrapper">
        <Header />
        <div className="kasaBody">
          <Banner />
          <div className="galleryWrapper">           
            {logements.map((item, index) => (
              <Card  key={index} item={item}/>
            ))}
          </div>
        </div>
        <Footer />
      </div>
    );
}
export default Home