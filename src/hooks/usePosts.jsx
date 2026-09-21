import React, { useEffect, useState } from 'react'

function usePosts () {
    const [response, setResponse] = useState(null)
    const [error, setError] = useState(null)
    const [isLoading, setIsloading] = useState(true)

    async function consultarAlServidor (){
        const respuesta_http = await fetch (
        "https://jsonplaceholder.typicode.com/posts",
        {
            method: "GET",
        }
    )

    const resultado = await respuesta_http.json()
    console.log (resultado)
    setIsloading (false)
    setResponse (resultado)
    }
    useEffect(
        () => {
            consultarAlServidor()
        },
        []
    )
    return {
        response: response,
        error: error,
        isLoading: isLoading
    }
}

export default usePosts