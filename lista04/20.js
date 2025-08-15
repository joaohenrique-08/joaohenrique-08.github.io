let frutas = ["maçã", "banana", "laranja", "abacaxi", "banana"];

let Procurada = "laranja";
let posicao = frutas.indexOf(Procurada);

if (posicao > -1) {
  console.log(`A fruta "${Procurada}" foi encontrada na posição: ${posicao}`);
} else {
  console.log(`A fruta "${Procurada}" não foi encontrada na lista.`);
}

