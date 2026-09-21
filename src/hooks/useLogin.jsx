import React, { useEffect, useState } from 'react'

function useLogin (){
const [formState, setFormState] = useState ({email: "", password: ""})

    function handleSubmit(evento){
        evento.preventDefault() //Evita que se recargue la pagina
        const form = evento.target //target es una referencia del elemento de donde se desencadeno el evento
        const email = form.email.value
        const password = form.password.value
    }
    
    function handleChangeInput(evento){
        const campo = evento.target //hace referencia al campo que el usuario esta modificando
        const nombre_campo = campo.name
        const valor_campo = campo.value
        setFormState(
            (prevFormState) => {
                const cloned_state = {...prevFormState} //spread operator
                cloned_state[nombre_campo] = valor_campo
                return cloned_state
            }
        )
    }
    return {
        formState: formState,
        handleSubmit: handleSubmit,
        handleChangeInput: handleChangeInput
    }

}

export default useLogin