let nomeProduto = "Laptop Lenovo";
let precoProduto = 2449.99;
let descontoProduto = 20.00;
let descontoValido = true;
let precoFinal;

if(descontoValido) {
  precoFinal = precoProduto - descontoProduto;
}
else {
  precoFinal = precoProduto;
}

if (precoFinal > 1000) {
  precoProduto -= 50;
}
else {
  console.log(`Preço final: ${precoFinal}`);
}

let demandas = [10, 2, 1, 10, 5];
let totalDemanda = [];
let aux = 0;
let totalLucro = 0;

for (i = 0; i < demandas.length; i++) {
  aux = demandas[i] * precoFinal;
  totalLucro += aux;
  totalDemanda.push(aux);
  console.log(`O cliente ${i+1} deverá pagar: ${totalDemanda[i].toFixed(2)}`);
}

console.log(`O lucro total foi ${totalLucro.toFixed(2)}`)
