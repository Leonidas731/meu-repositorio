class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  apresentar() {
    console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
  }
}

// --- Trecho de teste ---

// Criação de uma instância da classe Pessoa com valores fictícios
const pessoaTeste = new Pessoa("Mariana", 28);

// Chamada do método apresentar()
pessoaTeste.apresentar();

// Resultado esperado no console:
// Olá, meu nome é Mariana e tenho 28 anos.
