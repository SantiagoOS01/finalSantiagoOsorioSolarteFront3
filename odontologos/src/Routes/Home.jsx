import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Card from '../Utils/Card'
import { AppContext } from '../Context/context';

const Home = () => {
  const { state } = useContext(AppContext);
  const { users } = state;
  
  return (          
      <div>        
        <h1>Inicio</h1>        
        {users?.map((user) => (
         <Link key={user.id} to={`/dentist/${user.id}`}>
          <Card
            key={user.id}
            id={user.id}
            name={user.name}
            username={user.username}
            website={user.website}
            phone={user.phone}
          />
         </Link> 
        ))}
       
      </div>    
    );
};

export default Home;
