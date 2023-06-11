import '../styles/Cart.css'
import data from '../datas/logement.json'

function Cart() {

return <div className='center-container'>
            <div className='container-cart'>
            {data.map((item) => (
            <div key={item.id}
            className='cart'
            style={{ backgroundImage: `url(${item.cover})`, backgroundSize: 'cover' }}>
                <div className='cart-name'>
                <p>{item.title}</p>
                </div>
            </div>
    ))}
            </div>
       </div>

}

export default Cart