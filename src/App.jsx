import React, { useContext, useEffect, useState } from 'react'
import './global.css'
import Counter from './Componentes/Counter/Counter'
import LoginForm from './Componentes/LoginForm/LoginForm'
import { Route, Routes } from 'react-router'
import HomeScreen from './Screens/HomeScreen/HomeScreen'
import LoginScreen from './Screens/LoginScreen/LoginScreen'
import NotFoundScreen from './Screens/NotFoundScreen/NotFoundScreen'
import ProductDetailScreen from './Screens/ProductDetailScreen/ProductDetailScreen'
import ContactDetailScreen from './Screens/ContactDetailScreen/ContactDetailScreen'
import { ThemeContext } from './Context/ThemeContext'
import { LangContext } from './Context/LangContext'
import ProductsScreen from './Screens/ProductsScreen/ProductsScreen'
import NewProductsScreen from './Screens/NewProductScreen/NewProductsScreen'
import { ProductContextProvider } from './Context/ProductContext'
import { ContactContext, ContactContextProvider } from './Context/ContactContext'


export default function App() {
    const {theme, nombre_favorito} = useContext(ThemeContext)
    console.log("App.jsx", theme)
    const {langSelected} = useContext (LangContext)
    console.log("[App.jsx]", langSelected)
    return(
            <Routes>
                
                <Route element= {<ContactContextProvider/>}>
                    <Route 
                        path= "/" 
                        element= {<HomeScreen/>}/>
                    <Route 
                        path="/contact/:contact_id" 
                        element={<ContactDetailScreen />} 
                    />
                </Route>

                <Route path= "/login" element= {<LoginScreen/>}/>
                
                <Route path= "*" element= {<NotFoundScreen/>}/>

                <Route element={<ProductContextProvider/>}>
                    <Route
                        path='/products'
                        element={<ProductsScreen />}
                    />
                    <Route
                        path='/products/:product_id'
                        element={<ProductDetailScreen />}
                    />
                    <Route
                        path='/products/new'
                        element={<NewProductsScreen/>}
                    />
			    </Route>
            </Routes>   
    )
}

