import "../styles/InfoLogement.css"
import data from '../datas/logement.json'
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import Select from '../components/Select'

function InfoLogement() {

    const { id } = useParams();
    const logement = data.find(item => item.id === id);

    const ratingStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
        if (i < rating) {
            stars.push(<FontAwesomeIcon key={i} icon={faStar} className='star-icon' />)
        } else {
            stars.push(<FontAwesomeIcon key={i} icon={faStar} className='star-icon-grey' />)
        }
        }
    return stars
    }

    return (
    <div className="info-container">
        <div className='titre'>
            <div className="left-side">
                <div>
                    <h1>{logement.title}</h1>
                </div>
                <div className='lieu'>
                    <p>{logement.location}</p>
                </div>
                <div className="tags-note">
                    <div className="tags">
                    {logement.tags.map((tag, index) => (
                    <p key={index}>{tag}</p>
                    ))}</div>
                    
                </div>
            </div>
            <div className="right-side">
                <div className='name-picture'>
                    <div className='name'>
                        <p>{logement.host.name}</p>
                    </div>
                    <div className='picture'>
                        <img src={logement.host.picture} alt=""/>
                    </div>
                </div>
                    <div className="note">
                    {ratingStars(logement.rating)}
                    </div>                
            </div>
        </div>             
                
                <div className="select-fiche">
                    <Select texte='Description'/>
                    <Select texte='Equipements' />
                </div>
    </div>
)}

export default InfoLogement