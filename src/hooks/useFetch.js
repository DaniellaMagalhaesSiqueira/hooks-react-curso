import {useEffect, useState} from 'react'

export const useFetch = (url, method = 'get') => {
    const [response, setResponse] = useState({
        data: null,
        loading: true
    })

    useEffect(function(){
        fetch(url, {method}).then(resp => resp.json()).then(jason => setResponse({
            data: jason,
            loading: false
        }))
    }, [url, method])

    return response
}