import { useState } from "react";

function ExampleComponent() {
  const [pokemonId, setPokemonId] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchPokemonById = async () => {
    if (pokemonId) {
      setLoading(true)
      try {
        const response = await fetch(`/api/pokemon/${pokemonId}`);
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error("Error al recuperar los datos del Pokémon:", error);
      } finally {
        setLoading(false);
      }
    } else {
      console.error("Por favor, ingrese un ID de Pokémon válido.");
    }
  }

  return (
    <div>
      <h1>Buscar Pokémon por ID</h1>
      <input
        type="text"
        value={pokemonId}
        onChange={(e) => setPokemonId(e.target.value)}
        placeholder="Ingrese el ID del Pokémon"
        disabled={loading}
      />
      <button onClick={fetchPokemonById} disabled={loading}>Buscar</button>
      {loading && <p>Cargando...</p>}
    </div>
  );
}

export default ExampleComponent;
