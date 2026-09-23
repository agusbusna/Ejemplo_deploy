/* 
Paso 1:
    Crear un contexto llamado ContactContext que tenga un estado interno de contacts
    Este contexto debera ser a nivel de rutas
    Las rutas que afectara son:
        - /
        - /contact/:contact_id

    Pueden probarlo rapidamente haciendo un console.log en los componentes afectados, para revisar si efectivamente llega la informacion.

Paso 2:
    Remplazar/usar en el Sidebar.jsx el estado de contactos para renderizar la lista de contactos.
    Remplazar con ContactDetailScreen.jsx la logica de obtencion de listado de mensajes a partir de ahora debe venir del estado de contactos en el contexto.


*/

import contact_list_server from "../data/contact-data-mook";
import { createContext, useState } from "react";
import { Outlet, useParams } from "react-router";

export const ContactContext = createContext()

export function ContactContextProvider() {
    const [contacts, setContacts] = useState(contact_list_server)
    const { contact_id } = useParams()

    const contacto_seleccionado = contact_id
        ? contacts.find((contacto) => contacto.id === Number(contact_id)) || null
        : null

    function getContactById(id) {
        return contacts.find((contacto) => contacto.id === Number(id)) || null
    }

    const provider_values = {
        contacts: contacts,
        setContacts: setContacts,
        contact_id: contact_id,
        contacto_seleccionado: contacto_seleccionado,
        selected_contact: contacto_seleccionado,
        getContactById: getContactById,
    } 

    return (
        <ContactContext.Provider
            value={provider_values}
        >
            <Outlet/>
        </ContactContext.Provider>
    )
}