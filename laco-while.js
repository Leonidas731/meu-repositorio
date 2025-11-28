let palavra = prompt("Digite uma palavra com mais de 8 letras:");

while (palavra.length <= 8) {
  palavra = prompt("Muito curta! Digite uma palavra com MAIS de 8 letras:");
}

console.log("Palavra válida:", palavra);


let soma = 0;

while (soma <= 500) {
  let numero = Math.floor(Math.random() * 100);
  console.log("Gerado:", numero);
  soma += numero;
}

console.log("Soma final:", soma);


let tamanho = parseInt(prompt("Digite o número do calçado (34 a 44):"));

while (isNaN(tamanho) || tamanho < 34 || tamanho > 44) {
  tamanho = parseInt(prompt("Inválido! Digite um número entre 34 e 44:"));
}

console.log("Tamanho registrado:", tamanho);


let numero = 0;

while (numero % 3 !== 0 || numero % 5 !== 0) {
  numero = Math.floor(Math.random() * 200); // gera número entre 0 e 199
  console.log("Gerado:", numero);
}

console.log("Número múltiplo de 3 e 5 encontrado:", numero);


let idade = parseInt(prompt("Digite sua idade (18 a 60):"));

while (isNaN(idade) || idade < 18 || idade > 60) {
  idade = parseInt(prompt("Idade inválida! Digite entre 18 e 60:"));
}

console.log("Idade válida:", idade);


let senha = prompt("Digite uma senha com pelo menos 1 letra e 1 número:");

while (!(/[A-Za-z]/.test(senha)) || !(/[0-9]/.test(senha))) {
  senha = prompt("Senha inválida! Deve conter pelo menos 1 letra e 1 número:");
}

console.log("Senha válida:", senha);

