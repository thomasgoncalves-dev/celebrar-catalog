import type { Produto } from '../types/produto'

export async function fetchProdutos(): Promise<Produto[]> {
  const response = await fetch('/api/produtos')
  if (!response.ok) {
    throw new Error(`Erro ao buscar produtos: ${response.status}`)
  }
  return response.json()
}
