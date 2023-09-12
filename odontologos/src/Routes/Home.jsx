import React, { useContext } from 'react';
import Card from '../Utils/Card'
import { AppContext } from '../Context/context';

const Home = () => {
  const { state } = useContext(AppContext);
  const { users } = state;
  
  return (          
      <div>
        <h1>Home</h1>        
        {users.map((user) => (
          <Card
            key={user.id}
            id={user.id}
            name={user.name}
            username={user.username}
            website={user.website}
            phone={user.phone}
          />
        ))}
      </div>    
  );
};

export default Home;
