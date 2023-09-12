import React, { useContext } from "react";
import { AppContext } from "../Context/context";

const Card = ({ name, username, id, website, phone  }) => {
  const { state } = useContext(AppContext);

  const addFav = () => {
    const { users } = state;
    const selectedUser = users.find((user) => user.id === id);

    if (selectedUser) {
        const cardIds = favCards.map((favCard) => favCard.id);
        const isCardInFav = cardIds.includes(id);        

      if (!isCardInFav) {
        favCards.push(selectedUser);
        localStorage.setItem("favCards", JSON.stringify(favCards));
        alert("Card agregada a favoritos");
      } else {
        alert("Esta Card ya está en favoritos");
      }
    }
  };

  return (
    <div className="card-grid">
      <div className="card">
       <img src="" alt="Imagen odontologo" />
       <p>Name: {name}</p>
       <p>Username: {username}</p>  
       <p>Website: {website}</p>
       <p>Phone: {phone}</p>          
       <button onClick={addFav} className="favButton">
          Add fav
       </button>
      </div>
    </div>
  );
};

export default Card;
