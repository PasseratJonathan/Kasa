import React, { useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Caroussel from '../../components/Caroussel';
import data from '../../datas/logement.json';
import InfoLogement from '../../components/InfoLogement';

function FicheLogement() {
  const { id } = useParams();
  const navigate = useNavigate();
  const isIdValidRef = useRef(false);

  isIdValidRef.current = data.some((cart) => cart.id === id);

  useEffect(() => {    
    if (!isIdValidRef.current) {
      navigate('/Error');
    }
  }, [id, navigate]);

  if (!isIdValidRef.current) {
    return <redirect to="/Error" />;
  }

  return (
    <div>
      <Header />
      <Caroussel />
      <InfoLogement />
      <Footer />
    </div>
  );
}

export default FicheLogement;