import React from 'react'
import ReactDOM from 'react-dom/client'
import Cards from './components/Cards'
import Teams from './components/Teams'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <section className="main">
    <Cards/>
    <Teams/>
    </section>
  </React.StrictMode>,
)
