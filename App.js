import React from 'react'
import Header from './componentes/Header'
import Corpo from './componentes/Body'
import Relogio from './componentes/Relogio'
import Formulario from './componentes/Formulario'
import Footer from './componentes/Footer'
import './App.css'


export default function App() {

  return (
    <>
      <section className= 'caixa'>
        <Relogio/>
        <Header/>
        <Corpo/>
        <Formulario title= "BANCO DE CURRÍCULOS"/>
        <Footer/>
      </section>
    </>
  )
}

