/**
 * Resolve um caminho de asset público respeitando a base do Vite.
 * Em dev a base é "/"; no build de produção (GitHub Pages) é "/project-taty/".
 * Necessário porque o site é servido em um subcaminho.
 */
export function asset(path: string): string {
  const base = import.meta.env.BASE_URL
  return `${base}${path.replace(/^\//, "")}`
}
