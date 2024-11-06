import LogoShadcn from "@/assets/icons/logo-shadcn";
import LogoVercel from "@/assets/icons/logo-vercel";
import LogoNext from "@/assets/icons/logo-next";
import Link from "next/link";
import { PokemonSearch } from "@/components/PokemonSearch";

export default function Home() {
  return (
    <div className="grid items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col items-center justify-center gap-8">
        <h1 className="text-4xl font-bold">Construye tu Equipo Pokémon</h1>
        <PokemonSearch />
      </main>
    </div>
  );
}
