import '../styles/Caroussel.css'
import data from '../datas/logement.json'
import React, { useState } from 'react';
import FlecheLeft from '../assets/ArrowLeft.png'
import FlecheRight from '../assets/ArrowRight.png'
import { useParams } from 'react-router-dom';


function Caroussel () {

    const { id } = useParams();
    const [currentIndex, setCurrentIndex] = useState(0);
    const logement = data.find(item => item.id === id);
    const totalImages = logement.pictures.length;


    const goToPrevious = () => {setCurrentIndex((prevIndex) => prevIndex === 0 ? totalImages - 1 : prevIndex - 1)}
    
      const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages)}
  return (
    <div className='logement'>
      <div className='container-caroussel'>
      <div className='carousel-image'>
          <img src={logement.pictures[currentIndex]} alt='paysage' />
          {totalImages > 1 && (
            <div className='carousel-text'>
              <p>{`${currentIndex + 1}/${totalImages}`}</p>
            </div>
          )}
        </div>
        {totalImages > 1 && (
        <div className='carousel-buttons'>
          <button onClick={goToPrevious}><img src={FlecheLeft} alt="fleche precedent" /></button>
          <button onClick={goToNext}><img src={FlecheRight} alt="fleche suivant" /></button>
        </div>
        )}
      </div>
    </div>
  );
}

export default Caroussel