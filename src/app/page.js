import LogoShadcn from "@/assets/icons/logo-shadcn";
import LogoVercel from "@/assets/icons/logo-vercel";
import LogoNext from "@/assets/icons/logo-next";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-4 row-start-2 items-center sm:items-start">
        <h1 className="text-4xl font-bold">
          Bienvenido a 
        </h1>
        <span className="text-2xl">
          Prototipado Rápido con IA: Construyendo Aplicaciones con Next.js y v0.dev
        </span>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <Link
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* Next.js */}
          <LogoNext />
        </Link>
        <Link
          className="flex items-center gap-2"
          href="https://ui.shadcn.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* Shadcn */}
          <LogoShadcn />
          Shadcn
        </Link>
        <Link
          className="flex items-center gap-2"
          href="https://vercel.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* Vercel */}
          <LogoVercel />
          Vercel
        </Link>
        
      </footer>
    </div>
  );
}
