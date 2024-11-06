'use client'
import { useState } from 'react'
import { cn, getPokemonColor } from '@/lib/utils';

export function PokemonSearch({
  onAddToTeam,
}) {
  const [pokemonName, setPokemonName] = useState('');
  const [pokemonData, setPokemonData] = useState(null);

  const fetchPokemon = async () => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`);
    if (response.ok) {
      const data = await response.json();
      setPokemonData(data);
    } else {
      alert("Pokémon no encontrado");
    }
  };

  return (
    <div className="flex w-full max-w-sm items-center space-x-2 flex-col gap-8">
      <div className="flex items-center justify-center gap-4">
        <input
          type="text"
          placeholder="Nombre del Pokémon"
          value={pokemonName}
          onChange={(e) => setPokemonName(e.target.value)}
      />
        <button onClick={fetchPokemon}>Buscar</button>
      </div>
      {pokemonData && (
        <div 
          // inline-style
          style={{
            backgroundColor: getPokemonColor(pokemonData.types[0].type.name)
          }}
          className={"flex flex-col items-center justify-center gap-4 p-4 rounded-lg"}
          onClick={() => onAddToTeam(pokemonData)}
        >
          <h2 className="text-2xl font-bold">{pokemonData.name}</h2>
          <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
          <p className="text-lg">Tipo: {pokemonData.types.map(type => type.type.name).join(', ')}</p>
        </div>
      )}
    </div>
  )
}
