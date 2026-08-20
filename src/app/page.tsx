import { TopBar } from "../../components/spotify/top-bar";
import { Sidebar } from "../../components/spotify/sidebar";
import { MainContent } from "../../components/spotify/main-content";
import { PlayerBar } from "../../components/spotify/player-bar";

// Declaração do componente da página de entrada padrão do Next.js (App Router)
export default function Page() {
  return (
    /* CONTAINER ESTRUTURAL RAIZ DA APLICAÇÃO */
    <div className="flex h-screen flex-col bg-background text-foreground">
      {/* 1. NAVEGAÇÃO SUPERIOR (TOPBAR) */}
      {/* Renderiza a barra fixa no topo ocupando toda a largura horizontal disponível */}
      <TopBar />
      {/* 2. ÁREA CENTRAL DE CONTEÚDO (SIDEBAR + MAIN CONTENT) */}
      <div className="flex min-h-0 flex-1 gap-2 px-2">
        {/* Painel lateral esquerdo (Navegação/Biblioteca) */}
        <Sidebar />
        {/* Painel central de conteúdo com rolagem vertical independente */}
        <MainContent />
      </div>
      {/* 3. RODAPÉ / CONTROLE DE MÍDIA (PLAYERBAR) */}
      {/* Renderiza o player fixo na base da tela com as informações da faixa em reprodução */}
      <PlayerBar />
    </div>
  );
}
