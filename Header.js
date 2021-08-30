import React from 'react'
import logo from './imgs/Figura2.png'
import topo from './imgs/imageHeader.png'

export default function Header() {
  return (
    <header>
      <div classeName="topo">
        <img src={topo} alt="executivos" title="Colaboradores"/>
      </div>
      <div>
        <img src={logo} alt="logoJobsNet" title= "LogoJobsNet"/>
      </div>
      <div  className= "net">
      <h2>RADAR DE OPORTUNIDADES DE EMPREGO</h2>
      </div>
      </header>

  )
}