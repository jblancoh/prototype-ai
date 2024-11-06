import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import PokemonCard from "./PokemonCard"

const PokemonTeam = ({ team, removeFromTeam }) => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Tu Equipo Pokémon</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-3 gap-4">
          {team.map((pokemon, index) => (
            <PokemonCard
              pokemon={pokemon}
              onRemove={() => removeFromTeam(index)}
              key={index}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

export default PokemonTeam;