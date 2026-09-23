import React, { useContext } from "react"
import ContactOption from "../ContactOption/ContactOption"
import { Link } from "react-router"
import "./Sidebar.css"
import { ContactContext } from "../../Context/ContactContext"

export default function Sidebar() {

    const { contacts } = useContext (ContactContext)

        const logo_sidebar = (
            <div className="sidebar-logo">
                <img
                    src="/logo/expanded-logo.svg"
                    alt="WhatsApp"
                    width="138"
                    height="39"
                />
            </div>
        )

        if (contacts.length === 0){
            return (
                <div>
                    {logo_sidebar}
                    <span>No tienes contactos registrados</span>
                </div>
            )
        }
        const contactos_jsx = []
        for (const contacto of contacts) {
            contactos_jsx.push(
                <Link 
                className="link-contact"
                to={`/contact/${contacto.id}`}
                key={contacto.id}
                >
                    <ContactOption
                        id={contacto.id}
                        imagen={contacto.image}
                        ultimo_mensaje={contacto.last_message}
                        nombre={contacto.name}
                        mensajes_sin_leer={contacto.unread_messages}
                        fecha_ultimo_mensaje={contacto.last_message_time}
                        key={contacto.id}
                    />
                </Link>
                )
        }
        return (
            <div>
                {logo_sidebar}
                {contactos_jsx}
            </div>
    )
}