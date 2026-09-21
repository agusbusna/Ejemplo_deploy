import React from 'react'
import { Link } from 'react-router'
import ContactOption from '../../Componentes/ContactOption/ContactOption'
import Sidebar from '../../Componentes/Sidebar/Sidebar'
import { LangContext, LANGS_AVIABLES } from '../../Context/LangContext'
import { useContext } from 'react'
import { LangSelect } from '../../Componentes/LangSelect/LangSelect'
import { ContactContext } from '../../Context/ContactContext'


export default function HomeScreen() {
    
    const {contacts} = useContext (ContactContext)
    console.log('[HomeScreen.jsx] Contactos', contacts)

    return (
        <div className='home-container'>
                
            <div className='contact-screen-container'>
                <Sidebar/>
            </div> 
            <div className='contenido-principal'>
                <LangSelect/>
            </div>
        </div>
    )
}