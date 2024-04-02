import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FacebookComponent from './FacebookHome'
import SignUpFormComponent from './SignUpForm'
// import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  const [page, setPage] = useState(false)

  return(
    <div >
        <FacebookComponent  setPage={setPage} page={page}></FacebookComponent>
        {page ? <SignUpFormComponent setPage={setPage} page={page} ></SignUpFormComponent> : ``}
    </div>
  )
}

export default App
