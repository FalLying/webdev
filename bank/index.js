import { Cliente } from "./Cliente.js";
import { Gerente } from "./Funcionario/Gerente.js";
import { Diretor } from "./Funcionario/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor("Rodrigo", 10000, 12345678910);
const gerente = new Gerente("Maria", 5000, 21346579801);

diretor.cadastrarSenha("123");

const estaLogado = SistemaAutenticacao.login(diretor, "123");

console.log(estaLogado);
