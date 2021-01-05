import { Conta } from "./Conta.js";

export class ContaPoupanca extends Conta {
  constructor(saldoInicial, cliente, agencia) {
    super(cliente, agencia, saldoInicial);
  }

  sacar(valor) {
    const taxa = 1.02;
    return this._sacar(valor, taxa);
  }
}
