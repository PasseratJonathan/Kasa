import { Link } from 'react-router-dom';
import '../styles/Cart.css';
import data from '../datas/logement.json';

function Cart() {
  return (
    <div className='center-container'>
      <div className='container-cart'>
        {data.map((item) => (
          <Link key={item.id} to={`/Fichelogement/${item.id}`} className='cart' style={{ backgroundImage: `url(${item.cover})`, backgroundSize: 'cover' }}>
            <div className='cart-name'>
              <p>{item.title}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Cart;