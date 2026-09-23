import { useState } from "react"

function useContactSearchTerm(contacts) {
    const [searchTerm, setSearchTerm] = useState("")
    const [filter, setFilter] = useState("todos") //"todos" | "no_leidos" | "leidos"

    function handleChangeSearch(event) {
        setSearchTerm(event.target.value)
    }

    function handleClearSearch() {
        setSearchTerm("")
    }

    function handleChangeFilter(id) {
        setFilter(id)
    }

    const contacts_filtrados = contacts.filter((contacto) => {
        const texto = searchTerm.trim().toLowerCase()
        const coincide_busqueda =
            texto === "" ||
            contacto.name.toLowerCase().includes(texto) ||
            contacto.last_message.toLowerCase().includes(texto)

        const tiene_sin_leer = contacto.unread_messages > 0

        const coincide_filtro =
            filter === "todos" ||
            (filter === "no_leidos" && tiene_sin_leer) ||
            (filter === "leidos" && !tiene_sin_leer)

        return coincide_busqueda && coincide_filtro
    })

    return {
        searchTerm: searchTerm,
        filter: filter,
        contacts_filtrados: contacts_filtrados,
        handleChangeSearch: handleChangeSearch,
        handleClearSearch: handleClearSearch,
        handleChangeFilter: handleChangeFilter,
    }
}

export default useContactSearchTerm
