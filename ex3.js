const prompt = require("prompt-sync")();
//variaveis
homens = 0;
mulheres = 0;
soma = 0;
somaHomens = 0;
mulheres20 = 0;
//pedindo a idade e o genero
for (i = 1; i <= 5; i++) {
  idade = Number(prompt(`qual a idade da pessoa ${i}: `));
  genero = prompt("qual o genero? (m/f): ");

  soma = soma + idade;
//se o genero for m(masculino)
  if (genero == "m") {
    homens = homens + 1;
    somaHomens = somaHomens + idade;
  }
//se genero for f(feminino)
  if (genero == "f") {
    mulheres = mulheres + 1;

    if (idade > 20) {
      mulheres20 = mulheres20 + 1;
    }
  }
}
//quantos homens são
console.log(`Homens: ${homens}`);
//quantas mulheres são
console.log(`Mulheres: ${mulheres}`);
//media do gp
console.log(`Média do grupo: ${soma / 5}`);
//media da idade dos homens
if (homens > 0) {
  console.log(`media da idade dos homens: ${somaHomens / homens}`);
}
//quantas mulhres tem mais de 20 anos
console.log(`Mulheres de 20 anos ou mais ${mulheres20}`);
