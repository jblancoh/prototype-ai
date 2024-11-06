'use client'
import { useState } from 'react'
import { Input } from './ui/input';
import { Button } from './ui/button';
import PokemonCard from './PokemonCard';

export function PokemonSearch({
  onAddToTeam,
}) {
  const [pokemonName, setPokemonName] = useState('');
  const [pokemonData, setPokemonData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchPokemon = async () => {
    setLoading(true);
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`);
      if (!response.ok) {
        throw new Error('Pokémon no encontrado');
      }
      const data = await response.json();
      setPokemonData(data);
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };
  
  const handleAddToTeam = () => {
    onAddToTeam(pokemonData);
    setPokemonData(null);
    setPokemonName('');
  }

  return (
    <div className="flex w-full items-center space-x-2 flex-col gap-8">
      <div className="flex items-center justify-center gap-4">
        <Input
          type="text"
          placeholder="Nombre del Pokémon"
          value={pokemonName}
          onChange={(e) => setPokemonName(e.target.value)}
      />
        <Button onClick={fetchPokemon}>Buscar</Button>
      </div>
      <div className="flex justify-center w-1/5">
        {pokemonData && (
          <PokemonCard pokemon={pokemonData} onAddToTeam={handleAddToTeam} loading={loading} />
        )}
      </div>
    </div>
  )
}
