import './App.css'
import React from 'react'

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import ComFilhos from './components/basicos/ComFilhos'
import Card from './components/layout/Card'
import Repeticao from './components/basicos/Repeticao'
import Condicional from './components/basicos/Condicional'
import Input from './components/form/Input'
import Contador from './components/contador/Contador'

export default (props) => (
    <div className="App">
        <Card titulo="Primeiro Componente" color="#FA6900">
            <Primeiro/>
        </Card>
        <Card titulo="Componente com paramentro">
            <ComParametro titulo="Esse é o título"
                subtitulo="Esse é um subtitulo"/>
        </Card>
        <Card titulo="Componente com com filhos">
            <ComFilhos>
                <ul>
                    <li>Ana</li>
                    <li>Bia</li>
                    <li>Carlos</li>
                    <li>Brenda</li>
                </ul>
            </ComFilhos>
        </Card>
        <Card titulo="Repetição">
            <Repeticao/>
        </Card>
        <Card titulo="Condicional">
            <Condicional numero={2}/>
        </Card>
        <Card titulo="Input">
            <Input />
        </Card>
        <Card titulo="Contador">
            <Contador passo={10} />
        </Card>
    </div>
)

