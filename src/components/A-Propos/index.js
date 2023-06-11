import '../../styles/APropos.css'
import Header from '../../components/Header.js'
import Footer from '../../components/Footer.js'
import Banner from '../Banner.js'
import Select from '../../components/Select.js'
import backgroundfiche from '../../assets/background_fichelogement.png'


function APropos() {
        return (
        <div>
            <Header />
            <Banner background={backgroundfiche} />
            <div className='form-container'> 
                <Select texte="Fiabilité" />   
                <Select texte="Respect" />
                <Select texte="Service" />
                <Select texte="Sécurité" />           
            </div>
            <Footer />
        </div>
    )}
    
    export default APropos