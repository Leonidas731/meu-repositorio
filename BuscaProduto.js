/**
 * Busca um produto por nome em uma lista de objetos.
 * @param {Array<Object>} listaDeProdutos - Uma lista de produtos com propriedades 'nome' e 'preco'.
 * @param {string} nomeDoProduto - O nome do produto a ser buscado.
 * @returns {Object|null} O objeto do produto correspondente ou null se não for encontrado.
 */
function buscarProduto(listaDeProdutos, nomeDoProduto) {
  for (let i = 0; i < listaDeProdutos.length; i++) {
    if (listaDeProdutos[i].nome === nomeDoProduto) {
      return listaDeProdutos[i];
    }
  }
  return null;
}

// Exemplo de uso:
const produtosExemplo = [
  { nome: 'Teclado', preco: 150 },
  { nome: 'Mouse', preco: 80 },
  { nome: 'Monitor', preco: 1200 }
];

console.log(buscarProduto(produtosExemplo, 'Mouse'));
console.log(buscarProduto(produtosExemplo, 'Gabinete'));
