class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  apresentar() {
    console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
  }
}

// Exemplo de teste
const pessoaTeste = new Pessoa('João', 30); // Cria uma instância de Pessoa com nome 'João' e idade 30
pessoaTeste.apresentar(); // Chama o método apresentar()

// Resultado esperado no console:
// Olá, meu nome é João e tenho 30 anos.
