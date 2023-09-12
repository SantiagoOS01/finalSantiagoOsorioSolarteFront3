import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../Context/context';

const Detail = () => {
  const { id } = useParams();
  const { state } = useContext(AppContext);
  const { users } = state;

  const dentist = users.find((user) => user.id === Number(id));

  return (
    <div className='card-grid'>
     <h2>Dentist Profile</h2>
    <div className='card-grid'>      
      {dentist && (
        <div className='card'>
          <img src="" alt="imagen dentista" />
          <p>Name: {dentist.name}</p>
          <p>Email: {dentist.email}</p>
          <p>Phone: {dentist.phone}</p>
          <p>Website: {dentist.website}</p>
        </div>
      )}
    </div>
    </div>
  );
};

export default Detail;
