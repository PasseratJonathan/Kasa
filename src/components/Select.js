import '../styles/Select.css'
import FlecheUp from '../assets/Vector.png'

function Select(props) {
    return <div className='dropdown'>
                <div className='container-select'>
                    <div className='dropdown-select'>
                        <span className='select'>{props.texte}</span>
                        <img src={FlecheUp} alt="fleche" className='fleche'/>
                    </div> 
                    <div className='selection-container'>
                        <div className='selection'>
                            <p>Climatisation</p>
                            <p>Wi-Fi</p>
                            <p>Cuisine</p>
                        </div>
                    </div>
                </div>
</div>
}

export default Select