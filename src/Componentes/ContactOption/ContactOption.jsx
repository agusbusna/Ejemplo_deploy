import React from "react"
import "./ContactOption.css"

export default function ContactOption({imagen, nombre, ultimo_mensaje,fecha_ultimo_mensaje, mensajes_sin_leer}) {
    return (
        <div className="contacto-sidebar">
            <div className="contacto-sidebar-inside">
                <div className='imagen-contacto-container'>
                    <img src={imagen} alt={nombre} className='imagen-contacto' />
                </div>
                <div className="contacto-mensaje-wrap">
                    <h2 className="contacto-nombre">{nombre}</h2>
                    <p className="mensaje-contacto">{ultimo_mensaje}</p>
                </div>
                <div className="contacto-info">
                    <span className={mensajes_sin_leer > 0 ? "fecha-destacada": undefined}>{fecha_ultimo_mensaje}</span>
                    {mensajes_sin_leer !== null && (
                        <span className="msj-sin-leer">{mensajes_sin_leer}</span>    
                    )}
                </div>
            </div>
        </div>
    )
}
