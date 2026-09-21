import React, { useContext } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router'
import "./ContactDetailScreen.css"
import Sidebar from '../../Componentes/Sidebar/Sidebar'
import { ThemeContext } from '../../Context/ThemeContext'
import { LangContext } from '../../Context/LangContext'

export default function ContactDetailScreen() {
    const {theme} = useContext(ThemeContext)
    console.log("ContactDetailScreen.jsx", theme)
    const {langSelected} = useContext (LangContext)
        console.log("[ContactDetailScreen.jsx]", langSelected)
    const contact_list = [
        {
            id: 1,
            nombre: 'Marcos',
            ultimo_mensaje: 'Hey qué tal? Hay que juntarnos! La semana que viene es mi cumple y estas invitada',
            imagen: "https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fwww.gravatar.com%2Favatar%2F2c7d99fe281ecd3bcd65ab915bac6dd5%3Fs%3D250",
            mensajes_sin_leer: 2,
            fecha_ultimo_mensaje: "14:30"
        },
        {
            id: 2,
            nombre: "John Smith",
            ultimo_mensaje: "Testeando... 1, 2, 3, probando si funciona esto",
            imagen: "https://i.pinimg.com/736x/89/28/4b/89284b5c67cac49c7b0be588a335932a.jpg",
            mensajes_sin_leer: 3,
            fecha_ultimo_mensaje: "08:21"
        },
        {
            id: 3,
            nombre: "Jane Doe",
            ultimo_mensaje: "Holaaaaaaa queridoooo tanto tiempo",
            imagen: "https://i.pinimg.com/736x/1a/98/03/1a9803d93ff615ea7fbc198ba53401c5.jpg",
            mensajes_sin_leer: 1,
            fecha_ultimo_mensaje: "12:15"
        },
        {
            id: 4,
            nombre: "Samantha Lee",
            ultimo_mensaje: "Genial, vamos juntos!",
            imagen: "https://i.pinimg.com/736x/b7/5f/d2/b75fd2fc1f8cbb7f65bb4f1a87dcc71e.jpg",
            mensajes_sin_leer: null,
            fecha_ultimo_mensaje: "09:35"
        }
    ]

    const { contact_id } = useParams()

    let contacto_seleccionado = null

    for (const contacto of contact_list) {
        if (contacto.id === Number(contact_id)) {
            contacto_seleccionado = contacto
        }
    }

    if (!contacto_seleccionado) {
        return (
            <h1>El contacto que buscas no existe!</h1>
        )
    }
    return (

        
        <div className='body-screen-detail'>
            <Sidebar/>
            <div className='contact-detail-screen'>
                <Link to="/home" className="btn-volver">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M19 12H5M12 19l-7-7 7-7" />
                    </svg>
                </Link>
                <div className='img-contact-detail-container'>
                    <img src={contacto_seleccionado.imagen} alt={contacto_seleccionado.nombre} className='img-contact-detail' />
                </div>
                <h1 className='nombre-contacto-detail'>{contacto_seleccionado.nombre}</h1>

            </div >
        </div>
    )
}