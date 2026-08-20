"use client";

import Image from "next/image";
import { useState } from "react"; // Importação do Hook de estado do React

// Importação do pacote de ícones Lucide React
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Shuffle,
  Repeat,
  Heart,
  Volume2,
  Mic2,
  ListMusic,
  MonitorSpeaker,
  Maximize2,
} from "lucide-react";

// Importação dos dados mockados da faixa em reprodução
import { currentTrack } from "../../lib/spotify-data";

export function PlayerBar() {
  // Estado local para alternar o status de reprodução (Play / Pause)
  const [playing, setPlaying] = useState(false);

  // Estado local para alternar a curtida da música (Coração preenchido / vazio)
  const [liked, setLiked] = useState(false);

  return (
    // Tag semântica <footer> representando o rodapé da aplicação
    // 'flex items-center justify-between': Alinha os 3 blocos do player na horizontal com espaçamento distribuído
    <footer className="flex items-center justify-between gap-4 px-4 py-3">
      {/* Left: track info - Informações da Faixa Atual */}
      {/* 'md:w-[30%]': Ocupa até 30% da largura em telas médias/grandes */}
      <div className="flex min-w-0 items-center gap-3 md:w-[30%]">
        {/* Capa do Álbum da Música Atual */}
        <Image
          src={currentTrack.image || "/placeholder.svg"} // Imagem ou fallback
          alt={`Capa de ${currentTrack.album}`} // Texto alternativo dinâmico para acessibilidade
          width={56} // 56px de largura
          height={56} // 56px de altura
          className="size-14 shrink-0 rounded-md object-cover" // 'shrink-0': Evita que a imagem seja comprimida
        />

        {/* Textos: Nome da Música e Artista */}
        {/* 'min-w-0': Crucial para permitir que as classes 'truncate' dos filhos funcionem */}
        <div className="min-w-0">
          <p className="truncate text-sm font-medium text-foreground hover:underline">
            {currentTrack.title}
          </p>
          <p className="truncate text-xs text-spotify-subtext hover:text-foreground hover:underline">
            {currentTrack.artist}
          </p>
        </div>

        {/* Botão de Curtir (Coração) */}
        <button
          aria-label={liked ? "Remover das curtidas" : "Adicionar às curtidas"} // Rótulo dinâmico para acessibilidade
          onClick={() => setLiked((v) => !v)} // Alterna o estado de curtido
          className="ml-2 hidden shrink-0 transition-colors sm:block" // Oculto em telas muito pequenas (`sm:block`)
        >
          {/* Ícone de Coração com preenchimento condicional quando selecionado (`fill-primary`) */}
          <Heart
            className={`size-4 ${liked ? "fill-primary text-primary" : "text-spotify-subtext hover:text-foreground"}`}
          />
        </button>
      </div>

      {/* Center: controls - Controles Principais e Barra de Progresso */}
      {/* 'max-w-[45%] flex-1': Centraliza e expande até 45% do contêiner */}
      <div className="flex max-w-[45%] flex-1 flex-col items-center gap-2">
        {/* Botoes de Controle da Mídia (Ordem: Aleatório, Anterior, Play/Pause, Próxima, Repetir) */}
        <div className="flex items-center gap-4">
          {/* Botão Aleatório (Shuffle) */}
          <button
            aria-label="Aleatório"
            className="hidden text-spotify-subtext transition-colors hover:text-foreground sm:block"
          >
            <Shuffle className="size-4" />
          </button>
          {/* Botão Faixa Anterior */}
          <button
            aria-label="Anterior"
            className="text-spotify-subtext transition-colors hover:text-foreground"
          >
            <SkipBack className="size-5 fill-current" />
          </button>
          {/* Botão Central Principal: Play / Pause */}
          <button
            aria-label={playing ? "Pausar" : "Reproduzir"}
            onClick={() => setPlaying((v) => !v)} // Alterna o estado de reprodução
            className="flex size-8 items-center justify-center rounded-full bg-foreground text-background transition-transform hover:scale-105"
          >
            {/* Renderização condicional baseada no estado 'playing' */}
            {playing ? (
              <Pause className="size-4 fill-current" />
            ) : (
              <Play className="size-4 fill-current" />
            )}
          </button>
          {/* Botão Próxima Faixa */}
          <button
            aria-label="Próxima"
            className="text-spotify-subtext transition-colors hover:text-foreground"
          >
            <SkipForward className="size-5 fill-current" />
          </button>
          {/* Botão Repetir (Repeat) */}
          <button
            aria-label="Repetir"
            className="hidden text-spotify-subtext transition-colors hover:text-foreground sm:block"
          >
            <Repeat className="size-4" />
          </button>
        </div>

        {/* Progress bar - Barra de Progresso do Tempo da Música */}
        <div className="flex w-full items-center gap-2">
          {/* Tempo Decorrido */}
          <span className="text-[11px] tabular-nums text-spotify-subtext">
            1:07
          </span>
          {/* Trilha do Progresso */}
          {/* 'group': Permite que a bolinha de progresso (`span`) apareça apenas no hover deste trilho */}
          <div className="group relative h-1 flex-1 rounded-full bg-[#4d4d4d]">
            {/* Preenchimento Atual (33% da música) */}
            <div className="relative h-full w-[33%] rounded-full bg-foreground group-hover:bg-primary">
              {/* Marcador Circular (Ponteiro) - Visível apenas ao passar o mouse (`opacity-0 group-hover:opacity-100`) */}
              <span className="absolute -right-1.5 top-1/2 size-3 -translate-y-1/2 rounded-full bg-foreground opacity-0 group-hover:opacity-100" />
            </div>
          </div>
          {/* Duração Total da Música */}
          <span className="text-[11px] tabular-nums text-spotify-subtext">
            {currentTrack.duration}
          </span>
        </div>
      </div>

      {/* Right: volume + extras - Utilitários, Volume e Tela Cheia */}
      {/* 'hidden md:flex': Oculta toda a seção de utilitários adicionais em telas de celular */}
      <div className="hidden items-center justify-end gap-3 md:flex md:w-[30%]">
        {/* Ícone de Letra da Música */}
        <button
          aria-label="Letra"
          className="text-spotify-subtext transition-colors hover:text-foreground"
        >
          <Mic2 className="size-4" />
        </button>
        {/* Ícone de Fila de Reprodução */}
        <button
          aria-label="Fila"
          className="text-spotify-subtext transition-colors hover:text-foreground"
        >
          <ListMusic className="size-4" />
        </button>
        {/* Ícone de Conectar a um Dispositivo */}
        <button
          aria-label="Dispositivos"
          className="text-spotify-subtext transition-colors hover:text-foreground"
        >
          <MonitorSpeaker className="size-4" />
        </button>
        {/* Controle de Volume (Ícone + Barra de Nível) */}
        <div className="group flex items-center gap-2">
          <Volume2 className="size-4 text-spotify-subtext transition-colors group-hover:text-foreground" />
          {/* Trilha do Volume */}
          <div className="relative h-1 w-24 rounded-full bg-[#4d4d4d]">
            {/* Preenchimento do Volume (70%) */}
            <div className="relative h-full w-[70%] rounded-full bg-foreground group-hover:bg-primary">
              {/* Marcador Circular do Volume */}
              <span className="absolute -right-1.5 top-1/2 size-3 -translate-y-1/2 rounded-full bg-foreground opacity-0 group-hover:opacity-100" />
            </div>
          </div>
        </div>
        {/* Botão de Expansão (Tela Cheia) */}
        <button
          aria-label="Tela cheia"
          className="text-spotify-subtext transition-colors hover:text-foreground"
        >
          <Maximize2 className="size-4" />
        </button>
      </div>
    </footer>
  );
}
