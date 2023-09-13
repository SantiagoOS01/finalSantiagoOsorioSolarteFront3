import React, { useContext } from "react";
import { AppContext } from "../Context/context";

  const Card = ({ name, username, id, website, phone }) => {
    const { state, dispatch } = useContext(AppContext);
  
    const addFav = () => {
      const { users } = state;
      const selectedUser = users.find((user) => user.id === id);
      const favCards = JSON.parse(localStorage.getItem("favCards")) || [];
  
      if (selectedUser) {
        const cardIds = favCards.map((favCard) => favCard.id);
        const isCardInFav = cardIds.includes(id);
  
        if (!isCardInFav) {
          favCards.push(selectedUser);
          localStorage.setItem("favCards", JSON.stringify(favCards));
          alert("Card agregada a favoritos");
          // Si deseas actualizar el estado en el contexto, puedes hacerlo así:
          dispatch({ type: "SET_FAV_CARDS", payload: favCards });
        } else {
          alert("Esta Card ya está en favoritos");
        }
      }
    };

  return (
    <div className="card-grid">
      <div className="card">
       <img className="imagen" src="src/Utils/Desntist.png" alt="Profe, si ve esto, es que no me quiere renderizar la imagen" />
       <p>Nombre: {name}</p>
       <p>Username: {username}</p>  
       <p>Website: {website}</p>
       <p>Telefono: {phone}</p>          
       <button onClick={addFav} className="favButton">
          Añadir Dentista a Favoritos
       </button>
      </div>
    </div>
  );
};

export default Card;
