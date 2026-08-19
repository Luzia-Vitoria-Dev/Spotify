import Image from "next/image";
import { Play } from "lucide-react";
import type { Cover } from "../../lib/spotify-data"; // Importação da tipagem TypeScript da capa de mídia criada nos arquivos de dados

// Interface e declaração do componente. Aceita a propriedade 'item' (dados) e 'round' (se deve ter bordas redondas para artistas)
export function MediaCard({
  item,
  round = false, // Por padrão, 'round' é falso (capas quadradas para álbums e playlists)
}: {
  item: Cover;
  round?: boolean;
}) {
  return (
    // Container principal do card:
    // 'group': Permite que elementos filhos (como o botão de play) reajam ao evento de hover neste container pai
    // 'hover:bg-spotify-highlight': Altera a cor de fundo suavemente para um tom mais claro ao passar o mouse
    <div className="group relative flex cursor-pointer flex-col gap-4 rounded-lg bg-transparent p-3 transition-colors hover:bg-spotify-highlight">
      {/* SEÇÃO DA IMAGEM E BOTÃO PLAY FLUTUANTE */}
      <div className="relative">
        <Image
          src={item.image || "/placeholder.svg"} // Utiliza a URL da imagem do item ou uma imagem de reserva (fallback)
          alt={item.title} // Texto alternativo descritivo para leitores de tela
          width={180} // Largura base para otimização de renderização do Next.js
          height={180} // Altura base para otimização de renderização do Next.js
          // 'aspect-square': Força a proporção 1:1 (quadrada perfeita)
          // Lógica condicional: Se 'round' for verdadeiro aplica 'rounded-full' (Círculo), senão 'rounded-md' (Quadrado com cantos suaves)
          className={`aspect-square w-full object-cover shadow-lg ${
            round ? "rounded-full" : "rounded-md"
          }`}
        />

        {/* Botão Flutuante de Play do Card */}
        {/* 'opacity-0': Invisível por padrão */}
        {/* 'group-hover:opacity-100 group-hover:translate-y-0': Ao passar o mouse no CARD PAI ('group'), o botão aparece e sobe suavemente */}
        <button
          aria-label={`Reproduzir ${item.title}`} // Acessibilidade para leitores de tela
          className="absolute bottom-2 right-2 flex size-12 translate-y-2 items-center justify-center rounded-full bg-primary text-primary-foreground opacity-0 shadow-xl transition-all duration-300 hover:scale-105 group-hover:translate-y-0 group-hover:opacity-100"
        >
          {/* Ícone de Play com preenchimento sólido ('fill-current') */}
          <Play className="size-5 fill-current" />
        </button>
      </div>

      {/* SEÇÃO DE TEXTOS (TÍTULO E SUBTÍTULO)*/}
      {/* 'min-w-0': Garante que a truncagem de texto funcione corretamente dentro de um flex-container */}
      <div className="min-w-0">
        {/* Título da mídia com reticências (...) caso o texto seja muito longo para uma única linha */}
        <p className="truncate text-base font-bold text-foreground">
          {item.title}
        </p>
        {/* Subtítulo ou descrição da mídia limitado a no máximo 2 linhas ('line-clamp-2') */}
        <p className="mt-1 line-clamp-2 text-sm text-spotify-subtext">
          {item.subtitle}
        </p>
      </div>
    </div>
  );
}
