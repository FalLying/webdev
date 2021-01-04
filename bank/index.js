import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente("Ricardo", "11122233312");

const cliente2 = new Cliente("Maria", "44455566634");

const contaCorrenteRicardo = new ContaCorrente(1001, cliente1);
const contaCorrenteMaria = new ContaCorrente(1002, cliente2);

contaCorrenteRicardo.depositar(1000);
const sacou = contaCorrenteRicardo.sacar(342);

const transferiu = contaCorrenteRicardo.transferir(431, contaCorrenteMaria);

console.log(`Você sacou R$${sacou.toFixed(2)} da sua conta.`);
console.log(
  `Você transferiu R$${transferiu.toFixed(2)} da sua para ${
    contaCorrenteMaria.cliente.nome
  }.`
);
console.log("Número de contas: ", ContaCorrente.numeroDeContas);
console.log(contaCorrenteRicardo);
