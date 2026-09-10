package com.thomas.celebrarcatalog.produto;

import java.math.BigDecimal;
import java.util.UUID;

public record ProdutoDto(
        UUID id,
        String nome,
        String descricao,
        BigDecimal preco,
        boolean esgotado,
        UUID categoriaId,
        String imagem
) {

    static ProdutoDto from(Produto produto) {
        return new ProdutoDto(
                produto.getId(),
                produto.getNome(),
                produto.getDescricao(),
                produto.getPreco(),
                produto.getQuantidade() == 0,
                produto.getCategoria().getId(),
                produto.getImagem()
        );
    }
}
