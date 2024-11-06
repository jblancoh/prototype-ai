import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { getPokemonColor, getTextColor } from "@/lib/utils"

const PokemonCard = ({ pokemon, onRemove, onAddToTeam }) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      <Card 
        style={{ backgroundColor: getPokemonColor(pokemon?.types[0]?.type?.name) }}
        className={`w-full transition-all duration-300 ease-in-out transform hover:scale-105`}
      >
        <CardContent className="flex flex-col items-center p-4">
        <div className="bg-white rounded-full p-2 mb-2">
          <img src={pokemon?.sprites?.front_default} alt={pokemon?.name} className="w-24 h-24" />
        </div>
        <span 
          style={{ color: getTextColor(pokemon?.types[0]?.type?.name) }}
          className={`text-lg font-bold mb-1`}
        >
          {pokemon?.name.charAt(0).toUpperCase() + pokemon?.name.slice(1).toLowerCase()}
        </span>
        <span 
          style={{ color: getTextColor(pokemon?.types[0]?.type?.name) }}
          className={`text-sm mb-2`}
        >
          {pokemon?.types[0]?.type?.name.charAt(0).toUpperCase() + pokemon?.types[0]?.type?.name.slice(1).toLowerCase()}
        </span>
      </CardContent>
    </Card>
        {onRemove && (
          <Button 
            variant="destructive" 
            size="sm" 
            onClick={onRemove} 
            className="mt-2"
          >
            Eliminar
          </Button>
        )}
        {onAddToTeam && (
          <Button 
            size="sm" 
            onClick={onAddToTeam} 
            className="mt-2"
          >
            Agregar
          </Button>
        )}
    </div>
  )
}

export default PokemonCard;