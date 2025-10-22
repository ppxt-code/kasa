import { useNavigate } from 'react-router-dom';

function Card ({item}) {
    const navigate = useNavigate();
    return (<div className="imgGallery"
               onClick={() => navigate(`/logement/${item.id}`)}>
                <img src={item.cover} alt={item.title} />
                <div className="imgGalleryOverlay"></div>
                <h2 className="imgGalleryTitle">{item.title}</h2>
            </div>)
}
export default Card