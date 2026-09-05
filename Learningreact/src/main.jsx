import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function Myfunction(){
  return(
    <>
      <h1>My Name is Kiran Kendre</h1>
      <p>I completed my B.Tech in 2026</p>
    </>
  )
}

createRoot(document.getElementById('root')).render(

    <Myfunction/>,
  
)
