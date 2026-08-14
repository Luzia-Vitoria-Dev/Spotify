import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  /* reactCompiler: true, */

  // Habilita explicitamente o suporte ao Turbopack
  turbopack: {
    // Força a resolução absoluta dos pacotes dentro do container Linux
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
