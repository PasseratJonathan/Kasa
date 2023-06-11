import logo from '../assets/logo.png'
import '../styles/Header.css'
import { Link, useLocation } from 'react-router-dom';

function Header() {
    const location = useLocation();
    const isActive = (pathname) => {
      return location.pathname === pathname ? 'active' : '';
    };

    return  <div>
                <div className='haut-de-page'>
                    <img src={logo} alt='logo kasa' className='kasa-logo'/>
                    <nav className='nav-ul'>
                        <Link className={`nav-li ${isActive('/')}`} to="/">Accueil</Link>
                        <Link className={`nav-li ${isActive('/A-Propos')}`} to="/A-Propos">A Propos</Link>
                    </nav>
                </div>
            </div>

}

export default Header
