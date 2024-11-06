"use client";
import { PokemonSearch } from "@/components/PokemonSearch";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button";

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
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Tu Equipo Pokémon</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-4">
            {team.map((pokemon, index) => (
              <Card key={index} className="w-full">
                <CardContent className="flex flex-col items-center p-4">
                  <img src={pokemon.image} alt={pokemon.name} className="w-24 h-24 mb-2" />
                  <span className="text-lg">{pokemon.name}</span>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => removeFromTeam(index)}
                    className="mt-2">
                    Eliminar
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
      <div className="flex justify-center">
        <Button 
          onClick={getSuggestion}
          disabled={team.length === 0}
        >
          Obtener Sugerencia de OpenAI
        </Button>
      </div>
      {suggestion && (
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Sugerencia de OpenAI</CardTitle>
          </CardHeader>
          <CardContent>
            <p>{suggestion}</p>
          </CardContent>
        </Card>
      )}
    </div>
    
  );
}
