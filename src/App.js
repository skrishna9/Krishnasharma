import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import SpellList from './components/SpellList';
import SpellDetails from './components/SpellDetails';
import FavoriteSpells from './components/FavoriteSpells';
import Navbar from './components/Navbar';

const App = () => {
  const [spells, setSpells] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetchSpells();
    fetchFavorites();
  }, []);

  const fetchSpells = async () => {
    try {
      const response = await axios.get('https://www.dnd5eapi.co/api/spells');
      setSpells(response.data.results);
    } catch (error) {
      console.error('Error fetching spells:', error);
    }
  };

  const fetchFavorites = () => {
    const storedFavorites = localStorage.getItem('favorites');
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  };

  const addToFavorites = (spell) => {
    const updatedFavorites = [...favorites, spell];
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  const removeFromFavorites = (spellIndex) => {
    const updatedFavorites = favorites.filter((spell, index) => index !== spellIndex);
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<SpellList spells={spells} addToFavorites={addToFavorites} />}
        />
        <Route
          path="/spell/:id"
          element={<SpellDetails spells={spells} addToFavorites={addToFavorites} />}
        />
        <Route
          path="/favorites"
          element={<FavoriteSpells favorites={favorites} removeFromFavorites={removeFromFavorites} />}
        />
        <Route path="/spells/:id" component={SpellDetails} />

      </Routes>
    </Router>
  );
};

export default App;
