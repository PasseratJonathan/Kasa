import logo_footer from '../assets/logo_footer.png'
import '../styles/Footer.css'

function Footer() {
    return <div className='footer'>
        <div className='logo_footer'>
            <img src={logo_footer} alt='logo kasa' className='logo_kasa_footer'/>
        </div>
        <p>© 2020 Kasa. All rights reserved</p>
    </div>
}

export default Footer