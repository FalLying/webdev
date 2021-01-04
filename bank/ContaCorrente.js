import { Cliente } from "./Cliente.js";

export class ContaCorrente {
  static numeroDeContas = 0;
  agencia;
  _cliente;

  set cliente(novoValor) {
    if (novoValor instanceof Cliente) this._cliente = novoValor;
  }

  get cliente() {
    return this._cliente;
  }

  constructor(agencia, cliente) {
    this.agencia = agencia;
    this.cliente = cliente;
    this._saldo = 0;
    ContaCorrente.numeroDeContas++;
  }

  sacar(valor) {
    if (this._saldo > valor) {
      this._saldo -= valor;
      return valor;
    }
  }

  depositar(valor) {
    if (valor > 0) {
      this._saldo += valor;
    }
  }

  transferir(valor, conta) {
    const valorSacado = this.sacar(valor);
    if (valorSacado) {
      conta.depositar(valorSacado);
      return valor;
    }
  }
}
