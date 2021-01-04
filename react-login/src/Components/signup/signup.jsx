import React from 'react'

export default () => {

    return (
        <div className="box-login">
            <p>Cadastro de usuário</p>
            <form>
                <div className="box-login-input">
                    <label for="user">Novo Usuário</label><br/>
                    <input 
                    id="user" 
                    type="text" 
                    placeholder="Usuário" 
                    onChange={e => setUser(e.target.value)} 
                    value={user}></input>
                </div>
                <div className="box-login-input">
                    <label for="password">Senha</label><br/>
                    <input 
                    id="password" 
                    type="password" 
                    placeholder="Senha" 
                    onChange={e => setPass(e.target.value)} 
                    value={pass}></input>
                </div>
                <div className="button-login">
                    <button type="submit">Entrar</button>
                </div>
            </form>
        </div>
    )
}
