'use client'
import { useState } from 'react'
import { cn, getPokemonColor } from '@/lib/utils';
import { Input } from './ui/input';
import { Button } from './ui/button';
import PokemonCard from './PokemonCard';

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
  
  const handleAddToTeam = () => {
    onAddToTeam(pokemonData);
    setPokemonData(null);
    setPokemonName('');
  }

  return (
    <div className="flex w-full max-w-sm items-center space-x-2 flex-col gap-8">
      <div className="flex items-center justify-center gap-4">
        <Input
          type="text"
          placeholder="Nombre del Pokémon"
          value={pokemonName}
          onChange={(e) => setPokemonName(e.target.value)}
      />
        <Button onClick={fetchPokemon}>Buscar</Button>
      </div>
      {pokemonData && (
        <PokemonCard pokemon={pokemonData} onAddToTeam={handleAddToTeam} />
      )}
    </div>
  )
}
