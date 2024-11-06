"use client";
import { PokemonSearch } from "@/components/PokemonSearch";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button";
import PokemonCard from "@/components/PokemonCard";
import PokemonTeam from "@/components/PokemonTeam";
import SuggestionIA from "@/components/SuggestionIA";

export default function Home() {
  const [team, setTeam] = useState([]);
  const [suggestion, setSuggestion] = useState();
  
  const getSuggestion = async () => {
    const teamNames = team.map((pokemon) => pokemon.name).join(', ');
    setSuggestion(null)
    try {
      const response = await fetch('/api/suggestPokemon', {
        method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ team: teamNames }),
    });
    
    const data = await response.json();
    if (!response.ok){
      throw data
    }
      setSuggestion(data.suggestion);
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
    <div className="container h-screen mx-auto p-4 space-y-6 flex flex-col justify-center">
      <h1 className="text-3xl font-bold text-center">Creador de Equipo Pokémon</h1>
      <div className="flex space-x-2 justify-center">
        <PokemonSearch onAddToTeam={addToTeam} />
      </div>
      <PokemonTeam team={team} removeFromTeam={removeFromTeam} />
      <SuggestionIA suggestion={suggestion} getSuggestion={getSuggestion} team={team} />
    </div>
    
  );
}
