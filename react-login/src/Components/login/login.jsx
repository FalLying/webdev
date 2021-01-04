import './login.css'
import React, {useState} from 'react'
import Signup from '../signup/signup'

const Login = (props) => {
    const [user, setUser] = useState("")
    const [pass, setPass] = useState("")

    return (
        <div className="box-login">
            <form>
                <div className="box-login-input">
                    <label for="user">Usuário</label><br/>
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
                    <button onClick={Signup}>Cadastro</button>
                </div>
            </form>
        </div>
    )
}

export default Login
