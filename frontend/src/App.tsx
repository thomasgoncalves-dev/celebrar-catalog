import { useEffect, useState } from 'react'
import { fetchProdutos } from './api/produtos'
import type { Produto } from './types/produto'

function App() {
  const [produtos, setProdutos] = useState<Produto[]>([])
  const [erro, setErro] = useState<string | null>(null)

  useEffect(() => {
    fetchProdutos()
      .then(setProdutos)
      .catch((error: Error) => setErro(error.message))
  }, [])

  if (erro) {
    return <p>Erro ao carregar produtos: {erro}</p>
  }

  return (
    <div>
      <h1>Catálogo Celebrar Confeitaria</h1>
      <ul>
        {produtos.map((produto) => (
          <li key={produto.id}>
            {produto.nome} - R$ {produto.preco.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
