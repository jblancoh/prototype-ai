"use client";
import { PokemonSearch } from "@/components/PokemonSearch";
import { useState } from "react";

export default function Home() {
  const [team, setTeam] = useState([]);
  
  const addToTeam = (pokemon) => {
    if (team.length < 6 && !team.find(p => p.name === pokemon.name)) {
      setTeam([...team, pokemon]);
    } else {
      alert("Tu equipo ya tiene 6 Pokémon o este Pokémon ya está en tu equipo.");
    }
  };

  return (
    <div className="grid items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col items-center justify-center gap-8">
        <h1 className="text-4xl font-bold">Construye tu Equipo Pokémon</h1>
        <PokemonSearch onAddToTeam={addToTeam} />
        <h2 className="text-2xl font-bold">Mi Equipo</h2>
        <div className="flex flex-wrap gap-4">
          {team.map(pokemon => (
            <div key={pokemon.name}>
              <h4>{pokemon.name}</h4>
              <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
