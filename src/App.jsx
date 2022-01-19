import { useEffect, useState } from 'react';
import Characters from './components/Characters';
import { NavBar } from './components/Navbar';
function App() {
  const [characters, setCharacters] = useState([]);

  const API_KEY = 'https://rickandmortyapi.com/api/character';
  const fecthCharacters = () => {
    fetch(API_KEY)
      .then((response) => response.json())
      .then((data) => setCharacters(data.results))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fecthCharacters();
  }, []);
  return (
    <>
      <NavBar brand={' Rick and Morty App'} />
      <div className="container mt-5">
        <Characters characters={characters} />
      </div>
    </>
  );
}

export default App;
