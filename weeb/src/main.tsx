import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

//Ele chama o método createRoot que vem do ReactDOM (pra browser), passando o document.getelement root e renderiza (exibe em tela) o componente app 
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

//Componentes são funções que retornam HTML
