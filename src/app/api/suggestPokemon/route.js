// app/api/suggestPokemon/route.js
import { NextResponse } from 'next/server';
import { createOpenAI } from '@ai-sdk/openai'
import { streamText } from 'ai'

const openai = createOpenAI({
  apiKey: process.env.OPENAI_API_KEY
})

export async function POST(request) {
  const { prompt } = await request.json();

  try {
    const result = await streamText({
      model: openai("gpt-3.5-turbo"),
      messages: [{
        role: "user",
        content: `Tengo un equipo con los siguientes Pokémon: ${prompt}. ¿Qué otro Pokémon debería agregar para equilibrar mi equipo?, 
        si ya hay 6 Pokémon, no agregues ninguno y dar mas detalles sobre el equipo en ese momento.`
      }],
      stream: true,
    });
    return result.toDataStreamResponse();
  } catch (error) {
    return NextResponse.json(error, {
      status: 500
    })
  }
}
