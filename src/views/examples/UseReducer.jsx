import React, { useReducer, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'
import  { allReducers, initialState } from '../../store/index'
import { numberAdd2, login } from '../../store/actions'

// desafio:
// multiplicar por 7
//dividir por 25
//transfomar o número para inteiro
//adicionar um número n
const UseReducer = (props) => {
    

    const [state, dispatch] = useReducer(allReducers, initialState)
    const [numN, setNumN] = useState(0)
    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />
            <SectionTitle title="Exercício #01" />
            <div className="center">
                {state.user ? <span className="text">{state.user.name}</span> : <span className="text">Sem Usuário</span>}

                <span className="text">{state.number}</span>
                <div>
                    <button className="btn" onClick={() => numberAdd2(dispatch)}>+ 2</button>
                </div>
                <div>
                    <button className="btn" onClick={() => login(dispatch, 'Maria')}>Login</button>
                </div>
            </div>
            <SectionTitle title="Desafio" />
            <div className="center">
                <span className="text">{state.number}</span>
                <div>
                    <button className="btn" onClick={() => dispatch({ type: 'mult7' })}>X 7</button>
                    <button className="btn" onClick={() => dispatch({ type: 'por25' })}> / 25</button>
                    <button className="btn" onClick={() => dispatch({ type: 'parseInt' })}>Inteiro</button>
                    <button className="btn" onClick={() => dispatch({ type: 'addN', payload: numN })}>Adicionar =&gt; </button>
                </div>
                <div>
                    <span className="text">Número: </span>
                    <input type="number" className="input" value={numN} onChange={e => setNumN(parseInt(e.target.value))} />
                </div>
            </div>
        </div>
    )
}

export default UseReducer
