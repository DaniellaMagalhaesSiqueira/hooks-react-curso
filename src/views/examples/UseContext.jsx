import React, { useContext, useEffect } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import { DataContext } from '../../data/DataContext'
import { AppContext } from '../../data/Store'
import SectionTitle from '../../components/layout/SectionTitle'

const UseContext = (props) => {

    const {state, setState} = useContext(DataContext)
    // const context = useContext(DataContext)
 
    function addNumber(delta) {
        setState({
            //manter todos os outros atributos do objeto e só modifique o number
            ...state,
            number: state.number + delta
        })
    }
    const {number, text, setNumber, setText} = useContext(AppContext)

    // useEffect(function(){
    //     if(number > 1250){
    //         setText("Eita!")
    //     }
    // },[number])
    // function addNumber(delta) {
    //     context.setState({
    //         //manter todos os outros atributos do objeto e só modifique o number
    //         ...context.state,
    //         number: context.state.number + delta
    //     })
    // }
    return (
        <div className="UseContext">
            <PageTitle
                title="Hook UseContext"
                subtitle="Aceita um objeto de contexto e retorna o valor atual do contexto!"
            />
            <SectionTitle title="Exercício #01"/>
            <div className="center">
                <span className="text">{state.text}</span>
                <span className="text">{state.number}</span>
                <div>
                    <button className="btn" onClick={() => addNumber(- 1)}>-1</button>
                    <button className="btn" onClick={() => addNumber(1)}>+1</button>
                </div>
            </div>
            <SectionTitle title="Exercício #02"/>
            <div className="center">
                <pan className="text">{text}</pan>
                <span className="text">{number}</span>
                <div>
                    <button className="btn" onClick={() => setNumber(number - 1)}>-1</button>
                    <button className="btn" onClick={() => setNumber(number + 1)}>+1</button>
                </div>
            </div>
        </div>
    )
}

export default UseContext
