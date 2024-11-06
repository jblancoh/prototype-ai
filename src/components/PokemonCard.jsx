import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const PokemonCard = ({ pokemon, onAddToTeam }) => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Resultado de la búsqueda</CardTitle>
      </CardHeader>
      <CardContent className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img src={pokemon.image} alt={pokemon.name} className="w-24 h-24" />
          <span className="text-xl">{pokemon.name}</span>
        </div>
        <Button onClick={onAddToTeam}>Agregar al equipo</Button>
      </CardContent>
    </Card>
  )
}

export default PokemonCard;