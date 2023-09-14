import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../Context/context";

const Favs = () => {
  const {state, dispatch } = useContext(AppContext);  
  const fontColor = state.theme.font;
  
  const [favCards, setFavCards] = useState([]);
  
  const removeFromFavs = (id) => {
    const updatedFavCards = favCards.filter((favCard) => favCard.id !== id);
    localStorage.setItem("favCards", JSON.stringify(updatedFavCards));    
    
    setFavCards(updatedFavCards);    
    
    dispatch({ type: "SET_FAV_CARDS", payload: updatedFavCards });
  };
 
  useEffect(() => {
    const favCardsFromLocalStorage = JSON.parse(localStorage.getItem("favCards")) || [];
    setFavCards(favCardsFromLocalStorage);
  }, []);

  return (
    <>
      <h1>Dentistas Destacados Por Ti</h1>
      <div className="card-grid">
        {favCards.map((favCard) => (
          <div key={favCard.id} className="card">
            <img className="imagen" src="../src/Utils/Desntist.png" alt="imgen dentista" />
            <p>Nombre: {favCard.name}</p>
            <p>Username: {favCard.username}</p>
            <p>Website: {favCard.website}</p>
            <p>Telefono: {favCard.phone}</p>
            <button
              onClick={() => removeFromFavs(favCard.id)} 
              className="favButton"
            >
              Ya no es mi favorito
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Favs;
