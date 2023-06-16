import React, { useState } from 'react'
import '../styles/Select.css'
import FlecheUp from '../assets/Vector.png'
import data from '../datas/logement.json'
import { useParams } from 'react-router-dom';

function Select(props) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isDropdownRotated, setIsDropdownRotated] = useState(false);

    const { id } = useParams();
    const logement = data.find(item => item.id === id);
  
    const toggleDropdown = () => {
      setIsDropdownOpen(!isDropdownOpen);
      setIsDropdownRotated(!isDropdownRotated);
    };
  
    return (
      <div className='form-container'>
        <div className='dropdown'>
          <div className='container-select'>
            <div className={`dropdown-select ${isDropdownRotated ? 'dropdown-rotate' : ''}`} onClick={toggleDropdown}>
              <span className='select'>{props.texte}</span>
              <img src={FlecheUp} alt='fleche' className={`fleche ${isDropdownRotated ? 'img-rotate' : ''}`} />
            </div>
            <div className={`selection-container ${isDropdownOpen ? 'show' : ''}`}>
              {isDropdownOpen && (
                <div className='selection'>
                {props.texte === 'Equipements' ? (
                  logement.equipments.map((equipment, index) => (
                    <p key={index}>{equipment}</p>
                  ))
                ) : props.texte === 'Description' ? (
                  <p>{logement.description}</p>
                ) : (
                  <p>Lorem ipsum dolor sit amet</p>
                )}
              </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Select;