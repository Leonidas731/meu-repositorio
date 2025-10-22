// Criando um array com nomes fictícios de clientes
let clientes = ['João', 'Maria', 'Pedro', 'Ana', 'Carlos'];

// Loop para percorrer o array e exibir a mensagem personalizada
for (let i = 0; i < clientes.length; i++) {
    console.log(`Enviando e-mail de agradecimento para ${clientes[i]}!`);
}

// Lista de objetos com data de compra e cliente
let compras = [
    { cliente: 'João', dataCompra: '2025-09-25' },
    { cliente: 'Maria', dataCompra: '2025-10-01' },
    { cliente: 'Pedro', dataCompra: '2025-09-15' },
    { cliente: 'Ana', dataCompra: '2025-10-20' },
    { cliente: 'Carlos', dataCompra: '2025-09-10' },
    { cliente: 'Lucas', dataCompra: '2025-09-30' },
    { cliente: 'Beatriz', dataCompra: '2025-09-29' },
    { cliente: 'Roberto', dataCompra: '2025-09-22' },
    { cliente: 'Juliana', dataCompra: '2025-10-05' },
    { cliente: 'Fernanda', dataCompra: '2025-09-18' }
];

// Função para verificar se a compra foi nos últimos 30 dias
function comprasRecentes(dataCompra) {
    let hoje = new Date();
    let dataCompraDate = new Date(dataCompra);
    let diffTime = hoje - dataCompraDate; // Diferença em milissegundos
    let diffDays = diffTime / (1000 * 3600 * 24); // Convertendo para dias
    return diffDays <= 30;
}

// Usando forEach para exibir clientes que compraram nos últimos 30 dias
compras.forEach(compra => {
    if (comprasRecentes(compra.dataCompra)) {
        console.log(`Cliente: ${compra.cliente} comprou nos últimos 30 dias.`);
    }
});

// Lista com nomes, alguns repetidos
let nomes = ['Ana', 'João', 'Carlos', 'Ana', 'Maria', 'João', 'Lucas', 'Carlos', 'Fernanda', 'Lucas'];

// Usando Set para garantir nomes únicos
let nomesUnicos = new Set(nomes);

// Usando o iterador do Set para exibir os nomes únicos
for (let nome of nomesUnicos) {
    console.log(nome);
}
