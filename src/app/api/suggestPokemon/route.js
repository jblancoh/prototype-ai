// app/api/suggestPokemon/route.js
// const body = JSON.stringify({ inputs: `Tengo un equipo con los siguientes Pokémon: ${team}. ¿Qué otro Pokémon debería agregar para equilibrar mi equipo?` })
// const response = await fetch('https://api-inference.huggingface.co/models/google/t5-v1_1-xxl', {

import { NextResponse } from 'next/server';

export async function POST(request) {
  const { team } = await request.json();
  const body = JSON.stringify({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: `Tengo un equipo con los siguientes Pokémon: ${team}. ¿Qué otro Pokémon debería agregar para equilibrar mi equipo?` }]
  })

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
        "x-wait-for-model": "true"
      },
      body: body
    });
  
    const data = await response.json();
    if (!response.ok) {
      throw data
    }
    return NextResponse.json({ suggestion: data.choices[0].message.content });
  } catch (error) {
    return NextResponse.json(error, {
      status: 500
    })
  }
}
