// FavoriteSpells.js
import React from 'react';
import './css/FavoriteSpells.css'; // Import CSS file for styling

const FavoriteSpells = ({ favorites, removeFromFavorites }) => {
  return (
    <div className="favorite-spells">
      <h2>Favorite Spells</h2>
      <ul>
        {favorites.map((spell, index) => (
          <li key={index}>
            <span>{spell.name}</span>
            <button onClick={() => removeFromFavorites(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FavoriteSpells;
