"use client"; // Diretiva que ativa o modo Client Component no Next.js (necessário para eventos e futuras interações)

// Importação dos ícones vetoriais da biblioteca Lucide React
import {
  ChevronLeft, // Seta para voltar no histórico
  ChevronRight, // Seta para avançar no histórico
  House, // Ícone de início (Home)
  Search, // Ícone da lupa de busca
  Bell, // Ícone de sininho para notificações
  Download, // Ícone de seta para baixo para atalho do App
} from "lucide-react";

// Importação do componente de marca do Spotify criado anteriormente
import { SpotifyLogo } from "./spotify-logo";

export function TopBar() {
  return (
    // Tag semântica de cabeçalho. Usa flexbox para distribuir as 3 seções e espaçamentos (padding)
    <header className="flex items-center justify-between gap-4 px-4 py-3">
      {/* Left: Spotify logo */}
      <div className="flex items-center">
        {/* Link acessível envolvido por rótulo de texto */}
        <a href="#" aria-label="Spotify" className="text-foreground">
          {/* Chama o SVG com tamanho fixo de 32x32px (size-8) */}
          <SpotifyLogo className="size-8" />
        </a>
      </div>

      {/* Center: nav arrows + search */}
      {/* 'flex-1' faz com que este container ocupe todo o espaço central disponível */}
      <div className="flex flex-1 items-center justify-center gap-2">
        {/* Setas do Histórico de Navegação (Voltar / Avançar) */}
        {/* Ocultas no Mobile ('hidden') e exibidas como Flexbox a partir de telas Médias ('md:flex') */}
        <div className="hidden items-center gap-2 md:flex">
          <button
            aria-label="Voltar"
            className="flex size-8 items-center justify-center rounded-full bg-black/70 text-spotify-subtext transition-colors hover:text-foreground"
          >
            <ChevronLeft className="size-5" />
          </button>
          <button
            aria-label="Avançar"
            className="flex size-8 items-center justify-center rounded-full bg-black/70 text-spotify-subtext transition-colors hover:text-foreground"
          >
            <ChevronRight className="size-5" />
          </button>
        </div>

        {/* Agrupamento do Botão Home e do Input de Pesquisa */}
        {/* 'max-w-130' define a largura máxima de 520px (130 * 4px) */}
        <div className="flex w-full max-w-130 items-center gap-2">
          {/* Botão circular de Início (Home) com fundo elevado */}
          <button
            aria-label="Início"
            className="flex size-12 shrink-0 items-center justify-center rounded-full bg-spotify-elevated text-foreground transition-colors hover:bg-spotify-highlight"
          >
            <House className="size-6" />
          </button>

          {/* Container do Campo de Pesquisa */}
          {/* 'focus-within:border-foreground': adiciona a borda branca quando o usuário clica no input interno */}
          <div className="flex h-12 flex-1 items-center gap-3 rounded-full border border-transparent bg-spotify-elevated px-4 transition-colors focus-within:border-foreground hover:bg-spotify-highlight">
            <Search className="size-6 shrink-0 text-spotify-subtext" />

            {/* Input real de texto. O fundo é transparente e a borda nativa do navegador é desativada ('focus:outline-none') */}
            <input
              type="text"
              placeholder="O que você quer ouvir?"
              aria-label="Buscar"
              className="h-full w-full bg-transparent text-[15px] text-foreground placeholder:text-spotify-subtext focus:outline-none"
            />
          </div>
        </div>
      </div>

      {/* Right: actions (Links de Suporte e Botões de Login/Cadastro) */}
      <div className="flex items-center gap-2">
        {/* Links institucionais visíveis apenas em telas grandes ('lg:block') com efeito de leve expansão ('hover:scale-105') */}
        <a
          href="#"
          className="hidden text-[15px] font-bold text-spotify-subtext transition-colors hover:scale-105 hover:text-foreground lg:block"
        >
          Premium
        </a>
        <a
          href="#"
          className="hidden text-[15px] font-bold text-spotify-subtext transition-colors hover:scale-105 hover:text-foreground lg:block"
        >
          Suporte
        </a>
        <a
          href="#"
          className="hidden text-[15px] font-bold text-spotify-subtext transition-colors hover:scale-105 hover:text-foreground lg:block"
        >
          Download
        </a>

        {/* Linha vertical divisória sutil visível em telas grandes */}
        <span className="mx-2 hidden h-6 w-px bg-[#333] lg:block" />

        {/* Botão de instalação com ícone de download */}
        <button className="hidden items-center gap-2 text-[15px] font-bold text-spotify-subtext transition-colors hover:scale-105 hover:text-foreground md:flex">
          <Download className="size-4" />
          Instalar App
        </button>

        {/* Botão do Sininho para Notificações e Novidades */}
        <button
          aria-label="Novidades"
          className="flex size-8 items-center justify-center rounded-full text-spotify-subtext transition-colors hover:text-foreground"
        >
          <Bell className="size-5" />
        </button>

        {/* Botão de Inscrição (Texto simples com hover ativo) */}
        <a
          href="#"
          className="rounded-full px-4 py-2 text-[15px] font-bold text-spotify-subtext transition-colors hover:scale-105 hover:text-foreground"
        >
          Inscrever-se
        </a>

        {/* Botão Principal 'Entrar' (Call-To-Action) com fundo branco contrastante */}
        <a
          href="#"
          className="rounded-full bg-foreground px-8 py-3 text-[15px] font-bold text-background transition-transform hover:scale-105"
        >
          Entrar
        </a>
      </div>
    </header>
  );
}
