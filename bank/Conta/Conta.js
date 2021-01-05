export class Conta {
  constructor(cliente, agencia, saldo) {
    if (this.constructor == Conta) {
      throw new Error(
        "Você não deveria instanciar essa classe diretamente (Abstract class)."
      );
    }
    this._cliente = cliente;
    this._agencia = agencia;
    this._saldo = saldo;
    Conta.numeroDeContas++;
  }

  static numeroDeContas = 0;

  set cliente(novoValor) {
    if (novoValor instanceof Cliente) this._cliente = novoValor;
  }

  get cliente() {
    return this._cliente;
  }

  get saldo() {
    return this._saldo;
  }

  sacar(valor) {
    throw new Error("O método sacar da classe conta é abstrato.");
  }

  _sacar(valor, taxa) {
    const valorSacado = taxa * valor;
    if (this._saldo > valorSacado) {
      this._saldo -= valorSacado;
      return valorSacado;
    }
    return 0;
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
