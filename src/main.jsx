import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header'
import Cards from './components/Cards'
import Teams from './components/Teams'
import Draft from './components/Draft'
import BestGames from './components/BestGames'
import Pagina from './components/Pagina'
import Song from './components/Song'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <section className="main">
    <Cards/>
    <Teams/>
    <Draft/>
    <BestGames/>
    <Song/>
    </section>
    <Pagina/>
  </React.StrictMode>,
)
