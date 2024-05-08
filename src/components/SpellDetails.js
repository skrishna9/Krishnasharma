// SpellDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';
import './css/SpellDetails.css'; // Import CSS file for styling

const SpellDetails = ({ spells, addToFavorites }) => {
  const { id } = useParams();
  const spell = spells.find(spell => spell.index === id);
  console.log('Spell:', spell); // Log the spell object

  return (
    <div className="spell-details">
      {spell && (
        <div>
          <h2>{spell.name}</h2>
          <div className="spell-info">
            <p><strong>Spell Level:</strong> {spell.level}</p>
            {spell.desc && ( // Check if desc array exists before rendering
              <p><strong>Description:</strong> {spell.desc.join(' ')}</p> // Joining desc array elements
            )}
           <p><strong>URL:</strong> <a href={spell.url} target="_blank" rel="noopener noreferrer">{spell.url}</a></p>
          </div>
          <button onClick={() => addToFavorites(spell)}>Add to Favorites</button>
        </div>
      )}
    </div>
  );
};

export default SpellDetails;
