import Image from "next/image";
import { Play } from "lucide-react";
import type { Cover } from "../../lib/spotify-data"; // Importação do tipo TypeScript para os dados de capa

export function QuickPickTile({ item }: { item: Cover }) {
  return (
    // Container Horizontal em Flexbox com itens alinhados ao centro
    // 'bg-white/10': Fundo semitransparente padrão
    // 'hover:bg-white/20': Aumenta a opacidade do fundo ao passar o mouse
    <div className="group relative flex cursor-pointer items-center gap-4 overflow-hidden rounded-md bg-white/10 transition-colors hover:bg-white/20">
      {/* Imagem de Capa do Tile */}
      <Image
        src={item.image || "/placeholder.svg"} // Fallback caso a imagem principal esteja indisponível
        alt="" // Atributo alt vazio por ser imagem decorativa (o título ao lado já descreve o item)
        width={80} // Largura fixa de 80px
        height={80} // Altura fixa de 80px
        className="size-20 shrink-0 object-cover" // 'shrink-0': Impede que a imagem esprema ou deforme se o texto for muito longo
      />

      {/* Título da Playlist ou Álbum */}
      {/* 'truncate': Adiciona reticências (...) caso o texto ultrapasse a largura do container */}
      <span className="truncate pr-3 text-base font-bold text-foreground">
        {item.title}
      </span>

      {/* Botão de Play que desliza da direita ao passar o mouse */}
      <button
        aria-label={`Reproduzir ${item.title}`} // Rótulo acessível para navegadores de voz e leitores de tela
        className="absolute right-3 flex size-12 translate-y-2 items-center justify-center rounded-full bg-primary text-primary-foreground opacity-0 shadow-xl transition-all duration-300 hover:scale-105 group-hover:translate-y-0 group-hover:opacity-100"
      >
        <Play className="size-5 fill-current" />
      </button>
    </div>
  );
}
