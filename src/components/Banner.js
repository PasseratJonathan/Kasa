import '../styles/Banner.css'

function Banner (props) {
    const { background, showText } = props;    
return(
        <div className='background'>
        <img src={background} alt="paysage" />
        {showText && (
            <div className="background-text">
            <p>Chez vous, partout et ailleurs</p>
            </div>
         )}
        </div>
)}

export default Banner