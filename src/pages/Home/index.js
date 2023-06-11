import Header from '../../components/Header.js'
import Cart from '../../components/Cart.js'
import Footer from '../../components/Footer.js'
import background from '../../assets/background.png'
import Banner from '../../components/Banner';

function Home() {
    return (
      <div>
        <Header />
        <Banner background={background} showText={true}/>
        <Cart />
        <Footer />
      </div>
    );
  }
 
export default Home
