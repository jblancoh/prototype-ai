"use client";
import { PokemonSearch } from "@/components/PokemonSearch";
import { useState } from "react";
import PokemonTeam from "@/components/PokemonTeam";
import SuggestionIA from "@/components/SuggestionIA";
import { useCompletion } from 'ai/react';

export default function Home() {
  const [team, setTeam] = useState([]);
  const { completion, complete, isLoading } = useCompletion({
    api: '/api/suggestPokemon',
  });

  const getSuggestion = async () => {
    const teamNames = team.map((pokemon) => pokemon.name).join(', ');
    try {
      await complete(teamNames);
    } catch (error) {
      alert(error.error?.message || error.error);
    }
  };
  
  const removeFromTeam = (index) => {
    setTeam(team.filter((_, i) => i !== index))
  }
  
  const addToTeam = (pokemon) => {
    if (pokemon && team.length < 6) {
      if (team.find(p => p.name === pokemon.name)) {
        alert("Este Pokémon ya está en tu equipo.");
      } else {
        setTeam([...team, pokemon])
      }
    }
  }

  return (
    <div className="container h-full mx-auto p-4 space-y-6 flex flex-col justify-center">
      <h1 className="text-3xl font-bold text-center">Creador de Equipo Pokémon</h1>
      <div className="flex space-x-2 justify-center">
        <PokemonSearch onAddToTeam={addToTeam} />
      </div>
      <PokemonTeam team={team} removeFromTeam={removeFromTeam} />
      <SuggestionIA suggestion={completion} getSuggestion={getSuggestion} team={team} isLoading={isLoading}/>
    </div>
    
  );
}
