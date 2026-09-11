import type { Cesta } from '../types/cesta'

export async function fetchCestas(): Promise<Cesta[]> {
  const response = await fetch('/api/cestas')
  if (!response.ok) {
    throw new Error(`Erro ao buscar cestas: ${response.status}`)
  }
  return response.json()
}
