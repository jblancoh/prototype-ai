import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function PokemonCard({ name = "Pikachu", type = "Electric", imageUrl = "" }) {
  return (
    <Card className="w-full max-w-sm bg-gradient-to-b from-yellow-100 to-yellow-200 overflow-hidden">
      <CardHeader className="pb-2">
        <CardTitle className="text-2xl font-bold text-center text-yellow-800">{name}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center">
        <div className="w-48 h-48 rounded-full bg-yellow-300 border-4 border-yellow-400 overflow-hidden mb-4">
          {imageUrl ? (
            <img
              src={imageUrl}
              alt={`${name} Pokémon`}
              className="w-full h-full object-cover"
            />
          ) : (
            <img
              src="/placeholder.svg?height=192&width=192"
              alt="Pokémon placeholder"
              className="w-full h-full object-cover"
            />
          )}
        </div>
        <Badge variant="secondary" className="px-3 py-1 text-sm font-semibold bg-yellow-400 text-yellow-800 hover:bg-yellow-500">
          {type}
        </Badge>
      </CardContent>
    </Card>
  )
}