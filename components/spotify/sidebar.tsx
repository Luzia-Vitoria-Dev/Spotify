/* Diretiva e Importações */
"use client"; // Habilita a interatividade no lado do cliente (useState e eventos de clique)

import Image from "next/image";
import { House, Search, LibraryBig, Plus, ArrowRight } from "lucide-react";
import { libraryItems } from "../../lib/spotify-data"; // Importação do array de dados mockados
import { useState } from "react"; // Gerencia o estado da navegação ativa
/* ... */

/* Lista Estática de Filtros e Estado Local */
const filters = ["Playlists", "Artistas", "Álbuns", "Podcasts"]; // Gera os chips de filtragem da biblioteca

export function Sidebar() {
  const [active, setActive] = useState<"home" | "search">("home"); // Controla qual botão da navegação superior está selecionado
  /* ... */

  return (
    /* Estrutura Principal */
    <nav
      aria-label="Navegação principal"
      className="flex w-85 shrink-0 flex-col gap-2"
    >
      {/* Top nav block (Bloco Superior de Navegação) */}
      <div className="rounded-lg bg-spotify-base px-2 py-2">
        <ul className="flex flex-col">
          <li>
            <button
              onClick={() => setActive("home")}
              className={`flex w-full items-center gap-5 rounded-md px-4 py-3 text-[15px] font-bold transition-colors ${
                active === "home"
                  ? "text-foreground"
                  : "text-spotify-subtext hover:text-foreground"
              }`}
            >
              <House
                className="size-6"
                strokeWidth={active === "home" ? 2.4 : 2}
              />
              Início
            </button>
          </li>
          <li>
            <button
              onClick={() => setActive("search")}
              className={`flex w-full items-center gap-5 rounded-md px-4 py-3 text-[15px] font-bold transition-colors ${
                active === "search"
                  ? "text-foreground"
                  : "text-spotify-subtext hover:text-foreground"
              }`}
            >
              <Search
                className="size-6"
                strokeWidth={active === "search" ? 2.4 : 2}
              />
              Buscar
            </button>
          </li>
        </ul>
      </div>

      {/* Library block - Bloco da Biblioteca (Sua Biblioteca) */}
      <div className="flex min-h-0 flex-1 flex-col rounded-lg bg-spotify-base">
        {/* Cabeçalho da Biblioteca */}
        <div className="flex items-center justify-between px-4 pt-4">
          <button className="flex items-center gap-3 text-[15px] font-bold text-spotify-subtext transition-colors hover:text-foreground">
            <LibraryBig className="size-6" />
            Sua Biblioteca
          </button>
          <div className="flex items-center gap-1">
            <button
              aria-label="Criar playlist"
              className="flex size-8 items-center justify-center rounded-full text-spotify-subtext transition-colors hover:bg-spotify-highlight hover:text-foreground"
            >
              <Plus className="size-5" />
            </button>
            <button
              aria-label="Mostrar mais"
              className="flex size-8 items-center justify-center rounded-full text-spotify-subtext transition-colors hover:bg-spotify-highlight hover:text-foreground"
            >
              <ArrowRight className="size-5" />
            </button>
          </div>
        </div>

        {/* Filter chips (Pílulas de Filtro) */}
        <div className="flex gap-2 px-4 pb-2 pt-3">
          {filters.map((f) => (
            <button
              key={f}
              className="rounded-full bg-spotify-highlight px-3 py-1.5 text-[13px] font-medium text-foreground transition-colors hover:bg-[#333]"
            >
              {f}
            </button>
          ))}
        </div>

        {/* Search inside library (Barra Interna de Busca e Ordenação) */}
        {/* Exibe a lupa de pesquisa rápida e o seletor de ordenação ("Recentes") */}
        <div className="flex items-center justify-between px-4 py-1">
          <button
            aria-label="Buscar na biblioteca"
            className="flex size-8 items-center justify-center rounded-full text-spotify-subtext transition-colors hover:text-foreground"
          >
            <Search className="size-4" />
          </button>
          <button className="flex items-center gap-1 text-[13px] font-medium text-spotify-subtext transition-colors hover:text-foreground">
            Recentes
          </button>
        </div>

        {/* Library list - Lista de Itens da Biblioteca com Rolagem */}
        <ul className="flex-1 overflow-y-auto px-2 pb-3">
          {libraryItems.map((item) => (
            <li key={item.id}>
              <button className="flex w-full items-center gap-3 rounded-md p-2 text-left transition-colors hover:bg-spotify-highlight">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt=""
                  width={48}
                  height={48}
                  className="size-12 shrink-0 rounded-md object-cover"
                />
                <div className="min-w-0">
                  <p className="truncate text-[15px] font-medium text-foreground">
                    {item.title}
                  </p>
                  <p className="truncate text-[13px] text-spotify-subtext">
                    {item.subtitle}
                  </p>
                </div>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
