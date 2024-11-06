import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const SuggestionIA = ({ suggestion, getSuggestion, team, isLoading }) => {
  return (
    <div className="flex flex-col gap-6 pb-8">
      <div className="flex justify-center">
        <Button
          onClick={getSuggestion}
          disabled={team.length === 0}
        >
          {isLoading ? "Cargando..." : "Obtener Sugerencia de OpenAI"}
        </Button>
      </div>
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Sugerencia de OpenAI</CardTitle>
        </CardHeader>
        <CardContent>
          {suggestion && (
            <p>{suggestion}</p>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

export default SuggestionIA; 