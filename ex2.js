const prompt = require("prompt-sync")();

//ler idade de 10 pessoas
idades = [];

for (i = 1; i <= 10; i++) {
  idades.push(Number(prompt(`digite a idade da pessoa ${i}: `)));
}

console.log(idades);

//fazer a soma
soma = 0;
maior = 0;
menor5 = 0;
for (i = 0; i < idades.length; i++) {
  soma = soma + idades[i];

  //mostrar quem é maior de 18
  if (idades[i] >= 18) {
    maior = maior + 1;
  }

  if (idades[i] < 5) {
    menor5 = menor5 + 1;
  }
  
}
//maior idade
maiorIdade = Math.max(...idades);

console.log(`a media das idades é: ${soma / idades.length}`);
console.log(`A quantidade de maiores de 18 é: ${maior}`);
console.log(`A quantidade de pessoas a baixo de 5 anos é: ${menor5}`);
console.log(`A maior idade é: ${maiorIdade}`);