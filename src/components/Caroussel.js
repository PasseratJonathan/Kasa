import background from '../assets/background.png'
import '../styles/Caroussel.css'


function Caroussel () {
    return (
        <div className='logement'>
            <div className='container-caroussel'>
                <img src={background} alt="paysage" />
                <div className='titre'>
                    <div>
                    <h1>Titre</h1>
                    </div>
                    <div className='name-picture'>
                        <div className='name'>
                            <p>Alexandre Dumas</p>
                        </div>
                        <div className='picture'>
                            <p>O</p>
                        </div>
                    </div>
                </div>
                <div className='lieu'>
                    <p>Adresse, lieu</p>
                </div>
            </div>
        </div>
)}

export default Caroussel