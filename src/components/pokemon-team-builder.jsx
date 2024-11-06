'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

// Simulación de la API de Pokémon
const mockPokemonAPI = async (name) => {
  // Simula una llamada a la API
  await new Promise(resolve => setTimeout(resolve, 500))
  return {
    name: name,
    image: `/placeholder.svg?height=96&width=96&text=${name}`
  }
}

// Simulación de la API de OpenAI
const mockOpenAI = async () => {
  // Simula una llamada a OpenAI
  await new Promise(resolve => setTimeout(resolve, 1000))
  return "Te sugiero agregar un Pokémon de tipo Agua como Squirtle, uno de tipo Fuego como Charmander, y uno de tipo Planta como Bulbasaur para tener un equipo equilibrado."
}

export function PokemonTeamBuilder() {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResult, setSearchResult] = useState(null)
  const [team, setTeam] = useState([])
  const [suggestion, setSuggestion] = useState('')

  const handleSearch = async () => {
    if (searchTerm) {
      const result = await mockPokemonAPI(searchTerm)
      setSearchResult(result)
    }
  }

  const addToTeam = () => {
    if (searchResult && team.length < 6) {
      setTeam([...team, searchResult])
      setSearchResult(null)
      setSearchTerm('')
    }
  }

  const removeFromTeam = (index) => {
    setTeam(team.filter((_, i) => i !== index))
  }

  const getSuggestion = async () => {
    const result = await mockOpenAI()
    setSuggestion(result)
  }

  return (
    (<div className="container mx-auto p-4 space-y-6">
      <h1 className="text-3xl font-bold text-center">Creador de Equipo Pokémon</h1>
      <div className="flex space-x-2">
        <Input
          type="text"
          placeholder="Buscar Pokémon"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} />
        <Button onClick={handleSearch}>Buscar</Button>
      </div>
      {searchResult && (
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Resultado de la búsqueda</CardTitle>
          </CardHeader>
          <CardContent className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <img src={searchResult.image} alt={searchResult.name} className="w-24 h-24" />
              <span className="text-xl">{searchResult.name}</span>
            </div>
            <Button onClick={addToTeam} disabled={team.length >= 6}>Agregar al equipo</Button>
          </CardContent>
        </Card>
      )}
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
        <Button onClick={getSuggestion}>Obtener Sugerencia de OpenAI</Button>
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
    </div>)
  );
}