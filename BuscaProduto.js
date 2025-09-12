function buscarProduto(produtos, nomeProduto) {
  // Percorre a lista de produtos
  for (let i = 0; i < produtos.length; i++) {
    // Compara o nome do produto com o nome fornecido
    if (produtos[i].nome.toLowerCase() === nomeProduto.toLowerCase()) {
      // Se encontrar o produto, retorna o objeto completo
      return produtos[i];
    }
  }
  // Se não encontrar o produto, retorna null
  return null;
}

// Exemplo de uso:
const listaDeProdutos = [
  { nome: 'Camiseta', preco: 49.99 },
  { nome: 'Tênis', preco: 199.99 },
  { nome: 'Mochila', preco: 89.90 }
];

// Testando a função
const produtoBuscado = buscarProduto(listaDeProdutos, 'Tênis');
console.log(produtoBuscado);
// Resultado esperado: { nome: 'Tênis', preco: 199.99 }

const produtoInexistente = buscarProduto(listaDeProdutos, 'Chapéu');
console.log(produtoInexistente);
// Resultado esperado: null
