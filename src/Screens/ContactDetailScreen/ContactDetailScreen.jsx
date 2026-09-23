import React, { useContext } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router'
import "./ContactDetailScreen.css"
import Sidebar from '../../Componentes/Sidebar/Sidebar'
import { ThemeContext } from '../../Context/ThemeContext'
import { LangContext } from '../../Context/LangContext'
import { ContactContext } from '../../Context/ContactContext'

export default function ContactDetailScreen() {
    const { theme } = useContext(ThemeContext)
    console.log("ContactDetailScreen.jsx", theme)
    const { langSelected } = useContext(LangContext)
    console.log("[ContactDetailScreen.jsx]", langSelected)
    const { contacts } = useContext(ContactContext)

    const { contact_id } = useParams()

    const contacto_seleccionado = contacts.find(
        (contacto) => contacto.id === Number(contact_id)
    )

    if (!contacto_seleccionado) {
        return (
            <h1>El contacto que buscas no existe!</h1>
        )
    }

    const mensajesRenderizados = [];
    for (const mensaje of contacto_seleccionado.messages) {
        mensajesRenderizados.push(
            <div
                key={mensaje.id}
                className={'message ' + (mensaje.author === 'YO' ? 'message--mine' : 'message--theirs')}
            >
                <p className='message-content'>{mensaje.content}</p>
                <span className='message-meta'>
                    <span className='message-time'>{mensaje.created_at}</span>
                </span>
            </div>
        );
    }
    return (


        <div className='body-screen-detail'>
            <Sidebar />
            <div className='contact-detail-screen'>
                <div className='header-contact-detail-screen'>
                    <div className='img-contact-detail-container'>
                        <img 
                            src={contacto_seleccionado.image} 
                            alt={contacto_seleccionado.name} 
                            className='img-contact-detail' />
                    </div>
                    <h1 className='nombre-contacto-detail'>
                        {contacto_seleccionado.name}
                    </h1>
                </div>
                <div className='contact-message-detail'>
                    {
                        contacto_seleccionado.messages.length === 0
                            ? <p className='messages-empty'>Todavía no hay mensajes</p>
                            : (
                                <div className='messages-list'>
                                    {mensajesRenderizados}
                                </div>
                            )
                    }
                </div>
            </div >
        </div>
    )
}