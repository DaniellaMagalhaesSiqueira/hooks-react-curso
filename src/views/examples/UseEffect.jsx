import React, { useEffect, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'


function calcFatorial(num) {
    const n = parseInt(num)
    // const n = +num
    if (n < 0) return -1
    if (n === 0) return 1
    return calcFatorial(n - 1) * n
}


const UseEffect = (props) => {
    //não se pode alterar um estado dentro do componente, pois ele gera um laço infinito
    const [number, setNumber] = useState(1)
    const [fatorial, setFatorial] = useState(1)
    const [par, setPar] = useState(false)
    useEffect(function () {
        setFatorial(calcFatorial(number))
        if (number % 2 == 0) {
            setPar(true)
        } else {
            setPar(false)
        }
    }, [number])

    useEffect(function () {
        if (fatorial > 1000000) {
            document.title = "Eita!!!"
        }
       
    }, [fatorial])

    const [status, setStatus] = useState("Ímpar")


    useEffect(function (){
        setStatus(number %2 === 0 ? "Par" : "Ímpar")
    },[number])

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!" />
            <SectionTitle title="Exercício #01" />
            <div className="center">
                <div>
                    <span className="text">Fatorial: </span>
                    <span className="text red">{fatorial === -1 ? "Não Existe" : fatorial}</span>
                </div>
                <input type="number" className="input" value={number} onChange={e => setNumber(e.target.value)} />
            </div>
            {/* <SectionTitle  title="Exercício #02"/>
            <div className="center">
                <span className="text">Status: </span>
                <span className="text red">{par ? "Par" : "Ímpar"}</span>
            </div> */}
            <div className="center">
                <div>
                    <span className="text">Status: </span>
                    <span className="text red">{status}</span>
                </div>
            </div>

        </div>
    )
}

export default UseEffect
