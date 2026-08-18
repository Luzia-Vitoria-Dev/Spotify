/* Definição das Estruturas (Tipo Cover) */
export type Cover = {
  id: string;
  title: string;
  subtitle: string;
  image: string;
};

/* Atalhos rápidos */
export const quickPicks: Cover[] = [
  {
    id: "qp1",
    title: "As Mais Tocadas",
    subtitle: "Playlist",
    image: "/covers/top-hits.png",
  },
  {
    id: "qp2",
    title: "RapCaviar",
    subtitle: "Playlist",
    image: "/covers/rap.png",
  },
  {
    id: "qp3",
    title: "Chill Lofi",
    subtitle: "Playlist",
    image: "/covers/chill.png",
  },
  {
    id: "qp4",
    title: "Treino Intenso",
    subtitle: "Playlist",
    image: "/covers/workout.png",
  },
  {
    id: "qp5",
    title: "Pop Brasil",
    subtitle: "Playlist",
    image: "/covers/pop.png",
  },
  {
    id: "qp6",
    title: "Rock Clássico",
    subtitle: "Playlist",
    image: "/covers/rock.png",
  },
  {
    id: "qp7",
    title: "Foco Total",
    subtitle: "Playlist",
    image: "/covers/focus.png",
  },
  {
    id: "qp8",
    title: "Volta aos Anos 80",
    subtitle: "Playlist",
    image: "/covers/throwback.png",
  },
];

/* Recomendações personalizadas */
export const madeForYou: Cover[] = [
  {
    id: "m1",
    title: "Daily Mix 1",
    subtitle: "Anitta, Luísa Sonza, Pabllo e mais",
    image: "/covers/pop.png",
  },
  {
    id: "m2",
    title: "Daily Mix 2",
    subtitle: "Racionais, Djonga, BK e mais",
    image: "/covers/rap.png",
  },
  {
    id: "m3",
    title: "Descobertas da Semana",
    subtitle: "Sua mixtape semanal de músicas novas",
    image: "/covers/focus.png",
  },
  {
    id: "m4",
    title: "Radar de Novidades",
    subtitle: "Lançamentos que combinam com você",
    image: "/covers/throwback.png",
  },
  {
    id: "m5",
    title: "Repeat Rewind",
    subtitle: "As músicas que você mais ouviu",
    image: "/covers/chill.png",
  },
  {
    id: "m6",
    title: "Mix Sertanejo",
    subtitle: "Marília Mendonça, Jorge & Mateus",
    image: "/covers/rock.png",
  },
];

/* Artistas populares */
export const popularArtists: Cover[] = [
  { id: "a1", title: "Anitta", subtitle: "Artista", image: "/covers/pop.png" },
  { id: "a2", title: "Djonga", subtitle: "Artista", image: "/covers/rap.png" },
  {
    id: "a3",
    title: "Marília Mendonça",
    subtitle: "Artista",
    image: "/covers/throwback.png",
  },
  {
    id: "a4",
    title: "Legião Urbana",
    subtitle: "Artista",
    image: "/covers/rock.png",
  },
  {
    id: "a5",
    title: "Ludmilla",
    subtitle: "Artista",
    image: "/covers/top-hits.png",
  },
  { id: "a6", title: "Jão", subtitle: "Artista", image: "/covers/chill.png" },
];

/* Definição das Estruturas (Tipo Track) */
export type Track = {
  id: string;
  title: string;
  artist: string;
  album: string;
  duration: string;
  image: string;
};

/* Objeto único da Música em Execução */
export const currentTrack: Track = {
  id: "t1",
  title: "Envolver",
  artist: "Anitta",
  album: "Versions of Me",
  duration: "3:20",
  image: "/covers/pop.png",
};

/* Itens da biblioteca */
export const libraryItems: Cover[] = [
  {
    id: "l1",
    title: "Músicas Curtidas",
    subtitle: "Playlist • 342 músicas",
    image: "/covers/top-hits.png",
  },
  {
    id: "l2",
    title: "RapCaviar",
    subtitle: "Playlist • Spotify",
    image: "/covers/rap.png",
  },
  {
    id: "l3",
    title: "Foco Total",
    subtitle: "Playlist • Spotify",
    image: "/covers/focus.png",
  },
  {
    id: "l4",
    title: "Treino Intenso",
    subtitle: "Playlist • Spotify",
    image: "/covers/workout.png",
  },
  {
    id: "l5",
    title: "Chill Lofi",
    subtitle: "Playlist • Você",
    image: "/covers/chill.png",
  },
  {
    id: "l6",
    title: "Rock Clássico",
    subtitle: "Playlist • Você",
    image: "/covers/rock.png",
  },
  {
    id: "l7",
    title: "Volta aos Anos 80",
    subtitle: "Playlist • Spotify",
    image: "/covers/throwback.png",
  },
];
