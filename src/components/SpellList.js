// SpellList.js
import React from 'react';
import { Link } from 'react-router-dom';
import './css/SpellList.css'; // Import CSS file for styling

const SpellList = ({ spells, addToFavorites }) => {
  return (
    <div className="spell-list">
      <h2>All Spells</h2>
      <ul>
        {spells.map((spell, index) => (
          <li key={index}>
            <Link to={`/spell/${spell.index}`}>{spell.name}</Link>
            <button onClick={() => addToFavorites(spell)}>Add to Favorites</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SpellList;
