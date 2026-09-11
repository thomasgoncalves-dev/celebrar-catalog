import type { Categoria } from '../types/categoria'

export async function fetchCategorias(): Promise<Categoria[]> {
  const response = await fetch('/api/categorias')
  if (!response.ok) {
    throw new Error(`Erro ao buscar categorias: ${response.status}`)
  }
  return response.json()
}
