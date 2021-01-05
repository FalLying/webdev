const listarClientes = () => {
  return fetch("http://localhost:4000/clientes")
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      return json;
    });
};

const cadastrarClientes = (nome, cpf) => {
  const data = JSON.stringify({
    nome: nome,
    cpf: cpf,
  });
  return fetch("http://localhost:4000/clientes/cliente", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: data,
  }).then((res) => {
    return res.body;
  });
};

const deletarCliente = (id) => {
  return fetch(`http://localhost:4000/clientes/cliente/${id}`, {
    method: "DELETE",
  });
};

const detalhaCliente = (id) => {
  return fetch(`http://localhost:4000/clientes/cliente/${id}`).then((res) => {
    return res.json();
  });
};

const editaCliente = (id, cpf, nome) => {
  const data = JSON.stringify({
    nome: nome,
    cpf: cpf,
  });
  return fetch(`http://localhost:4000/clientes/cliente/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: data,
  }).then((res) => {
    return res.body;
  });
};
