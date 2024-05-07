import React from 'react'
import ReactDOM from 'react-dom/client'
import Cards from './components/Cards'
import Teams from './components/Teams'
import Draft from './components/Draft'
import Pagina from './components/Pagina'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <section className="main">
    <Cards/>
    <Teams/>
    <Draft/>
    </section>
    <Pagina/>
  </React.StrictMode>,
)
