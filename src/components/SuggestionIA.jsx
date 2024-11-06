import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const SuggestionIA = ({ suggestion, getSuggestion, team }) => {
  return (
    <div className="flex flex-col gap-6 pb-8">
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
  )
}

export default SuggestionIA; 