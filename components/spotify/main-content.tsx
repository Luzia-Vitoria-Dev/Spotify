import { MediaCard } from "./media-card";
import { QuickPickTile } from "./quick-pick-tile";
import { quickPicks, madeForYou, popularArtists } from "../../lib/spotify-data"; // Importação dos dados mockados do Spotify

// Lista de categorias do topo (Chips de Filtro)
const chips = ["Tudo", "Música", "Podcasts"];

/*
 * SUBCOMPONENTE INTERNO: SectionHeader
 * Função: Padronizar o título de cada seção junto com o botão/link 'Mostrar tudo'.
 */
function SectionHeader({ title }: { title: string }) {
  return (
    <div className="flex items-baseline justify-between px-2">
      {/* Título da seção com efeito de sublinhado ao passar o mouse */}
      <h2 className="text-2xl font-bold text-foreground hover:underline">
        <a href="#">{title}</a>
      </h2>

      {/* Link secundário para expandir a listagem da seção */}
      <a
        href="#"
        className="text-sm font-bold text-spotify-subtext transition-colors hover:underline"
      >
        Mostrar tudo
      </a>
    </div>
  );
}

export function MainContent() {
  return (
    // Container Principal (<main>) com rolagem vertical independente ('overflow-y-auto') e gradiente de fundo suave
    // 'bg-linear-to-b from-[#1f1f1f] to-spotify-base': Gradiente do cinza escuro no topo para o fundo base do Spotify no final
    <main className="flex-1 overflow-y-auto rounded-lg bg-linear-to-b from-[#1f1f1f] to-spotify-base">
      <div className="px-6 pb-8 pt-4">
        {/* Filter chips - Seção de Chips de Filtro ("Tudo", "Música", "Podcasts") */}
        <div className="flex gap-2 pb-6">
          {chips.map((chip, i) => (
            <button
              key={chip}
              // O primeiro filtro ("Tudo", índice 0) fica ativo por padrão com fundo claro (`bg-foreground`), os demais ficam escuros
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                i === 0
                  ? "bg-foreground text-background"
                  : "bg-spotify-highlight text-foreground hover:bg-[#333]"
              }`}
            >
              {chip}
            </button>
          ))}
        </div>

        {/* Quick picks grid - Seção de Grade de Seleções Rápidas (Tocados Recentemente) */}
        <section aria-label="Seleções rápidas" className="mb-8">
          {/* Grade responsiva: 1 coluna em celulares, 2 em telas SM, 3 em XL e 4 em 2XL */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
            {quickPicks.map((item) => (
              <QuickPickTile key={item.id} item={item} />
            ))}
          </div>
        </section>

        {/* Made for you - Seção de Feito Para Você (Playlists Personalizadas) */}
        <section aria-label="Feito para você" className="mb-8">
          <SectionHeader title="Feito para Beatriz" />
          {/* Grade de Cards adaptável: de 2 colunas no mobile até 6 colunas em monitores ultra-wide */}
          <div className="mt-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
            {madeForYou.map((item) => (
              <MediaCard key={item.id} item={item} />
            ))}
          </div>
        </section>

        {/* Popular playlists - Seção de Playlists Populares */}
        <section aria-label="Playlists populares" className="mb-8">
          <SectionHeader title="Playlists populares" />
          <div className="mt-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
            {quickPicks.map((item) => (
              <MediaCard key={item.id} item={item} />
            ))}
          </div>
        </section>

        {/* Popular artists - Seção de Artistas Populares (Fotos Circulares) */}
        <section aria-label="Artistas populares" className="mb-8">
          <SectionHeader title="Artistas populares" />
          <div className="mt-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
            {popularArtists.map((item) => (
              // Repare na propriedade 'round': ativa a renderização do card com bordas totalmente arredondadas (Círculo)
              <MediaCard key={item.id} item={item} round />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
