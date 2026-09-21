/* 
Crear un contexto llamado ContactContext que tenga un estado interno de contacts
Este contexto debera ser a nivel de rutas
Las rutas que afectara son:
    - /
    - /contact/:contact_id
Pueden probarlo rapidamente haciendo un console.log en los componentes afectados, para revisar si efectivamente llega la informacion.
*/

import contact_list_server from "../data/contact-data-mook";
import { createContext, useState } from "react";
import { Outlet } from "react-router";

export const ContactContext = createContext()

export function ContactContextProvider() {
    const [contacts, setContacts] = useState (contact_list_server)

    const provider_values = {
        contacts: contacts,
    } 


    return (
    <ContactContext.Provider
        value= {provider_values}
    >
        <Outlet/>
    </ContactContext.Provider>
)
}