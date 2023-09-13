import React, { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { AppContext } from '../Context/context';

const Detail = () => {
  const { id } = useParams();
  const { state } = useContext(AppContext);
  const { users } = state;

  const dentist = users.find((user) => user.id === Number(id));

  return (
    <div className='card-grid'>
     <h2>Perfil del Dentista</h2>
    <div className='card-grid'>      
      {dentist && (
        <div className='card'>
          <img className="imagen" src="../src/Utils/Desntist.png" alt="imagen dentista" />
          <p>Name: {dentist.name}</p>
          <p>Email: {dentist.email}</p>
          <p>Phone: {dentist.phone}</p>
          <p>Website: {dentist.website}</p>
          <button><Link to="/">Atras</Link></button>
        </div>
      )}
    </div>
    </div>
  );
};

export default Detail;
