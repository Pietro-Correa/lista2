//sortear 20 numeros entre 0 e 10
count = 0;
divs = 0;

for (i = 1; i <= 21; i++) {
  sorteado = Math.floor(Math.random() * 10); //sortear numeros arredondados de 0 ate 10

  console.log(`Sorteio do numero: ${i}`);
  console.log(`Numero sorteado: ${sorteado}`);


  //mostrar quantos são acima de 5
  if (sorteado > 5) {
    count = count + 1;
    //se n for divisivel por 4 vai normal
  }
  if (sorteado % 3 == 0) {
    divs = divs + 1;
  }
  console.log(`numeros maiores que 5: ${count}`);
  console.log(`numeros divisiveis por 3: ${divs}`);
}
