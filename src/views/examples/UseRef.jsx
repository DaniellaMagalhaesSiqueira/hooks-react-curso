import React, { useState, useRef, useEffect } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const merge = function (n1, n2) {
    let value = ""

    for (var i = 0; i < n1.length; i++) {

        value = value + (n1[i] || "")
        if(n2.length == 0){
            return value
        }
        if (n2.length > i) {
            value = value + (n2[i] || "")
        }  

    }

    return value
}

const mergeProf = function(s1, s2){
    return [...s1].map(function(letra, indice){
return `${letra}${s2[indice] || ""}`
    }).join("")
}

const UseRef = (props) => {

    const [value1, setValue1] = useState("")
    const [value2, setValue2] = useState("")
    const [value, setValue] = useState("")
    //retorna sempre a mesma referência
    const count = useRef(0)
    const myInput1 = useRef(null)
    const myInput2 = useRef(null)
    // console.log(myInput1.current)
    useEffect(function () {
        count.current = count.current + 1
        myInput2.current.focus()
    }, [value1])

    useEffect(function () {
        count.current++
        myInput1.current.focus()
    }, [value2])



    return (
        <div className="UseRef">
            <PageTitle
                title="Hook UseRef"
                subtitle="Retorna um objeto mutável com a propriedade .current!"
            />
            <SectionTitle title="Exercício #01"></SectionTitle>
            <div className="center">
                <div>
                    <span className="text">Valor: </span>
                    <span className="text">{mergeProf(value1, value2)} [</span>
                    <span className="text red">{count.current}</span>
                    <span className="text">]</span>
                </div>
                <input type="text" className="input"
                    ref={myInput1}
                    value={value1} onChange={e => setValue1(e.target.value)} />
            </div>
            <SectionTitle title="Exercício #02"></SectionTitle>
            <div className="center">
                <div>

                    <input type="text" className="input"
                        ref={myInput2}
                        value={value2} onChange={e => setValue2(e.target.value)} />
                </div>
            </div>
        </div>
    )
}

export default UseRef
