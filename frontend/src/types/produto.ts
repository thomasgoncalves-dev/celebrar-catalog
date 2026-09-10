export interface Produto {
  id: string
  nome: string
  descricao: string | null
  preco: number
  esgotado: boolean
  categoriaId: string
  imagem: string | null
}
