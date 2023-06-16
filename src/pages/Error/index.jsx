import { Link } from 'react-router-dom';
import '../../styles/Error.css'
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function Error() {
    return (
    <div className="error">
        <Header />
        <h1>404</h1>
        <h2>Oups! La page que vous demandez n'existe pas.</h2>
        <Link className='error-home' to="/">Retourner sur la page d’accueil</Link>
        <Footer />
    </div>
)}

export default Error